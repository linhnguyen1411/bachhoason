class Admins::CategoriesController < Admins::AdminsController
  before_action :load_category, only: [:update, :destroy]

  def index
    respond_to do |format|
      format.html
      format.json do
        render json: {
          categories: Category.order(created_at: :desc).page(params[:page] || 1).per(params[:per_page] || 10),
          total_items: Category.all.count
        }
      end
    end
  end

  def create
    category = Category.new category_params
    status = category.save
    render json: {
      status: status,
      errors: category.errors.messages.to_json
    }
  end

  def update
    status = @category.update_attributes category_params
    render json: {
      status: status,
      errors: @category.errors.details.to_json
    }
  end

  def destroy
    status = @category&.destroy
    render json: {
      status: status
    }
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end

  def load_category
    @category = Category.find_by id: params[:id]
  end
end
