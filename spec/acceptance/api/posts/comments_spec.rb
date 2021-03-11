require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Comments" do
  header "Accept", "application/json"
  header "Content-Type", "application/json"
  header "Host", "localhost:3000"

  let(:raw_post) { params.to_json }
  let(:response) { HashWithIndifferentAccess.new(JSON.parse(response_body)) }

  let(:user) { User.create(firstname: 'Homer', lastname: 'Simpson') }
  let(:post) { Post.create(body: 'My First Post', state: 'draft', user_id: user.id) }
  let(:post_id) { post.id }

  let(:comment) { Comment.create(body: 'My First Comment', post_id: post.id, user_id: user.id) }
  let(:comment_attributes) { HashWithIndifferentAccess.new(JSON.parse(comment.attributes.to_json)) }

  get '/api/posts/:post_id/comments' do
    parameter :page, 'Page', default: 1
    parameter :per_page, 'Per page', default: 10

    before { comment }

    example_request "List comments" do
      expect(status).to eq(200)
      expect(response).to match(hash_including({
        comments: [hash_including(comment_attributes)],
        metadata: hash_including(
          page: 1,
          per_page: 10,
          total_pages: 1,
          total_entries: 1
        )
      }))
    end
  end

  post '/api/posts/:post_id/comments' do
    with_options scope: :comment, with_example: true do
      parameter :body, 'Body', required: true
      parameter :user_id, 'User ID', required: true, example: 1
    end

    let(:body) { 'Super cool comment' }
    let(:user_id) { user.id }
    let(:attributes) { { body: body, post_id: post_id, user_id: user_id } }

    example_request "Create comment" do
      expect(status).to eq(201)
      expect(response).to match(hash_including(
        comment: hash_including(attributes)
      ))
    end
  end

  get '/api/posts/:post_id/comments/:id' do
    let(:id) { comment.id }

    example_request "Get comment" do
      expect(status).to eq(200)
      expect(response).to match(hash_including(
        comment: hash_including(comment_attributes)
      ))
    end
  end

  patch '/api/posts/:post_id/comments/:id' do
    let(:id) { comment.id }

    with_options scope: :comment, with_example: true do
      parameter :body, 'Body'
      parameter :user_id, 'User ID', example: 1
    end

    let(:body) { 'Hello world!' }
    let(:attributes) { { body: body, post_id: post_id, user_id: comment.user_id } }

    example_request "Update comment" do
      expect(status).to eq(200)
      expect(response).to match(hash_including(
        comment: hash_including(attributes)
      ))
    end
  end

  delete '/api/posts/:post_id/comments/:id' do
    let(:id) { comment.id }

    example_request "Delete comment" do
      expect(status).to eq(200)
    end
  end
end
