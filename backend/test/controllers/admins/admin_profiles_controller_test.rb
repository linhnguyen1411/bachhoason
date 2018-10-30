require 'test_helper'

class Admins::AdminProfilesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get admins_admin_profiles_show_url
    assert_response :success
  end

end
