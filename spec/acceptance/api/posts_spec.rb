require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Posts" do
  header "Accept", "application/json"
  header "Content-Type", "application/json"
  header "Host", "localhost:3000"

  let(:raw_post) { params.to_json }
  let(:response) { HashWithIndifferentAccess.new(JSON.parse(response_body)) }

  let(:user) { User.create(firstname: 'Homer', lastname: 'Simpson') }
  let(:post) { Post.create(body: 'My First Post', state: 'draft', user_id: user.id) }
  let(:post_attributes) { HashWithIndifferentAccess.new(JSON.parse(post.attributes.to_json)) }

  get '/api/posts' do
    parameter :page, 'Page', default: 1
    parameter :per_page, 'Per page', default: 10

    before { post }

    example_request "List posts" do
      expect(status).to eq(200)
      expect(response).to match(hash_including({
        posts: [hash_including(post_attributes)],
        metadata: hash_including(
          page: 1,
          per_page: 10,
          total_pages: 1,
          total_entries: 1
        )
      }))
    end
  end

  post '/api/posts' do
    with_options scope: :post, with_example: true do
      parameter :body, 'Body', required: true
      parameter :user_id, 'User ID', required: true, example: 1
      parameter :state, 'State', default: 'draft', enum: ['draft', 'published']
    end

    let(:body) { 'Create post' }
    let(:user_id) { user.id }
    let(:attributes) { { body: body, user_id: user_id, state: 'draft' } }

    example_request "Create post" do
      expect(status).to eq(201)
      expect(response).to match(hash_including(
        post: hash_including(attributes)
      ))
    end
  end

  get '/api/posts/:id' do
    let(:id) { post.id }

    example_request "Get post" do
      expect(status).to eq(200)
      expect(response).to match(hash_including(
        post: hash_including(post_attributes)
      ))
    end
  end

  patch '/api/posts/:id' do
    let(:id) { post.id }

    with_options scope: :post, with_example: true do
      parameter :body, 'Body'
      parameter :state, 'State', enum: ['draft', 'published']
    end

    let(:state) { 'published' }
    let(:attributes) { { body: post.body, state: state } }

    example_request "Update post" do
      expect(status).to eq(200)
      expect(response).to match(hash_including(
        post: hash_including(attributes)
      ))
    end
  end

  delete '/api/posts/:id' do
    let(:id) { post.id }

    example_request "Delete post" do
      expect(status).to eq(200)
    end
  end
end
