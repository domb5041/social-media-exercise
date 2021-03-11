require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Images" do
  header "Host", "localhost:3000"

  let(:user) { User.create(firstname: 'Homer', lastname: 'Simpson') }
  let(:post) { Post.create(body: 'My First Post', state: 'draft', user_id: user.id) }
  let(:post_id) { post.id }
  let(:image) { Rack::Test::UploadedFile.new("spec/fixtures/image.png", "image/png") }

  post "/api/posts/:post_id/image" do
    parameter :image, "Image file", required: true

    example_request "Upload post image" do
      expect(status).to eq(201)
    end
  end

  delete '/api/posts/:post_id/image' do
    before do
      file = fixture_file_upload(image)
      post.image.attach(file)
    end

    example_request "Delete post image" do
      expect(status).to eq(200)
    end
  end
end
