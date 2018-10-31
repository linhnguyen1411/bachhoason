class Admins::CatalogsController < Admins::AdminsController
  before_action :load_catalog, except: [:index, :create]

  def index
    respond_to do |format|
      format.html
      format.json do
        render json: {
          catalogs: Catalog.order(created_at: :desc).page(params[:page] || 1).per(params[:per_page] || 10),
          catalogs_selection: (params[:is_load_catalogs_selection] == "true" ? Catalog.all.order(created_at: :desc) : {}),
          total_items: Catalog.all.count
        }
      end
    end
  end

  def create
    catalog = Catalog.new catalog_params
    status = catalog.save
    render json: {
      status: status,
      errors: catalog.errors.messages.to_json
    }
  end

  def update
    status = @catalog.update_attributes catalog_params
    render json: {
      status: status,
      errors: @catalog.errors.messages.to_json
    }
  end

  def destroy
    status = @catalog.destroy
    render json: {
      status: status
    }
  end

  private
  def catalog_params
    params.require(:catalog).permit :name, :parent_id
  end

  def load_catalog
    @catalog = Catalog.friendly.find params[:id]
  end
end
