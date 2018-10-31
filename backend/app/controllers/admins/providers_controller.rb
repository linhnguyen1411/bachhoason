class Admins::ProvidersController < Admins::AdminsController
   before_action :load_provider, except: [:index, :create]

  def show
    render_json true, {provider: @provider}, t(".load_data_success")
  end

  def index
    @providers = Provider.all
    return unless request.xhr?
    render_json true, {providers: @providers}, t(".load_data_success")
  end

  def create
    provider = Provider.new provider_params
    status = provider.save
    if status
      render_json status, {providers: Provider.all}, t(".success")
    else
      render_json status, {errors: provider.errors.messages}, t(".fail")
    end
  end

  def update
    @provider.assign_attributes provider_params
    if @provider.save
      render_json true, {providers: Provider.all}, t(".success")
    else
      render_json false, {}, t(".fail")
    end
  end

  def destroy
    if @provider.destroy
      render_json true, {providers: Provider.all}, t(".success")
    else
      render_json false, {}, t(".fail")
    end
  end

  private
  def provider_params
    params.require(:provider).permit(:name)
  end

  def load_provider
    @provider = Provider.friendly.find params[:id]
  end
end
