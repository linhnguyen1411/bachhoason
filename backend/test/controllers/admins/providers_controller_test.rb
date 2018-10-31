require 'test_helper'

class Admins::ProvidersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admins_providers_index_url
    assert_response :success
  end

  test "should get show" do
    get admins_providers_show_url
    assert_response :success
  end

  test "should get create" do
    get admins_providers_create_url
    assert_response :success
  end

  test "should get update" do
    get admins_providers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get admins_providers_destroy_url
    assert_response :success
  end

end
