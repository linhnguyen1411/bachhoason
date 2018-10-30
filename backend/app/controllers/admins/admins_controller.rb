class Admins::AdminsController < ApplicationController
  protect_from_forgery with: :exception
  before_action :authenticate_admin!
  layout "admin_manager"
end
