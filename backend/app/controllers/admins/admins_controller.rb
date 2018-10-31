class Admins::AdminsController < ApplicationController
  protect_from_forgery with: :exception
  before_action :authenticate_admin!
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  layout "admin_manager"

  private
  def render_json status, data = {}, message = ""
    render json: data.merge!(status: status, message: message)
  end

  def record_not_found error
    render_json :not_found, {data: {errors: error.message}},
      I18n.t("model.load_resource.not_found")
  end
end
