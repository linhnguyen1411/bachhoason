require 'test_helper'

class Admins::CatalogsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admins_catalogs_index_url
    assert_response :success
  end

  test "should get show" do
    get admins_catalogs_show_url
    assert_response :success
  end

  test "should get create" do
    get admins_catalogs_create_url
    assert_response :success
  end

  test "should get update" do
    get admins_catalogs_update_url
    assert_response :success
  end

  test "should get destroy" do
    get admins_catalogs_destroy_url
    assert_response :success
  end

end
