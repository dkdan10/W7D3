require 'test_helper'

class Api::PokemonControllerTest < ActionDispatch::IntegrationTest
  test "should get Pokemon" do
    get api_pokemon_Pokemon_url
    assert_response :success
  end

end
