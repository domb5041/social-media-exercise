require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Users" do
  header "Accept", "application/json"
  header "Content-Type", "application/json"
  header "Host", "localhost:3000"

  let(:raw_post) { params.to_json }
  let(:response) { HashWithIndifferentAccess.new(JSON.parse(response_body)) }

  let(:user) { User.create(firstname: 'Homer', lastname: 'Simpson') }
  let(:user_attributes) { HashWithIndifferentAccess.new(JSON.parse(user.attributes.to_json)) }

  get '/api/users' do
    parameter :page, 'Page', default: 1
    parameter :per_page, 'Per page', default: 10

    before { user }

    example_request "List users" do
      expect(status).to eq(200)
      expect(response).to match(hash_including({
        users: [hash_including(user_attributes)],
        metadata: hash_including(
          page: 1,
          per_page: 10,
          total_pages: 1,
          total_entries: 1
        )
      }))
    end
  end

  post '/api/users' do
    with_options scope: :user, with_example: true do
      parameter :firstname, 'Firstname', required: true
      parameter :lastname, 'Lastname', required: true
    end

    let(:firstname) { 'Marge' }
    let(:lastname) { 'Simpson' }
    let(:attributes) { { firstname: firstname, lastname: lastname } }

    example_request "Create user" do
      expect(status).to eq(201)
      expect(response).to match(hash_including(
        user: hash_including(attributes)
      ))
    end
  end

  get '/api/users/:id' do
    let(:id) { user.id }

    example_request "Get user" do
      expect(status).to eq(200)
      expect(response).to match(hash_including(
        user: hash_including(user_attributes)
      ))
    end
  end

  patch '/api/users/:id' do
    let(:id) { user.id }

    with_options scope: :user, with_example: true do
      parameter :firstname, 'Firstname'
      parameter :lastname, 'Lastname'
    end

    let(:firstname) { 'Maggie' }
    let(:attributes) { { firstname: firstname, lastname: user.lastname } }

    example_request "Update user" do
      expect(status).to eq(200)
      expect(response).to match(hash_including(
        user: hash_including(attributes)
      ))
    end
  end

  delete '/api/users/:id' do
    let(:id) { user.id }

    example_request "Delete user" do
      expect(status).to eq(200)
    end
  end
end
