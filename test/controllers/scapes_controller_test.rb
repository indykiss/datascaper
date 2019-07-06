require 'test_helper'

class ScapesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get scapes_index_url
    assert_response :success
  end

end
