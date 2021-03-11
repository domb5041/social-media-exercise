require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Images" do
  header "Host", "localhost:3000"

  let(:user) { User.create(firstname: 'Homer', lastname: 'Simpson') }
  let(:user_id) { user.id }
  let(:image) { Rack::Test::UploadedFile.new("spec/fixtures/image.png", "image/png") }

  post "/api/users/:user_id/image" do
    parameter :image, "Image file", required: true

    example_request "Upload user image" do
      expect(status).to eq(201)
    end
  end

  delete '/api/users/:user_id/image' do
    before do
      file = fixture_file_upload(image)
      user.image.attach(file)
    end

    example_request "Delete user image" do
      expect(status).to eq(200)
    end
  end
end
