Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  api_actions = [:index, :show, :create, :update, :destroy]

  root to: 'home#show'
  get '/', action: :show, controller: 'home'
  get '/login', action: :show, controller: 'home'
  get '/posts', action: :show, controller: 'home'
  get '/profile', action: :show, controller: 'home'

  namespace :api, constraints: { format: :json } do
    resources :users, only: api_actions do
      scope module: :users do
        resource :image, only: [:create, :destroy]
      end
    end

    resources :posts, only: api_actions do
      scope module: :posts do
        resources :comments, only: api_actions
        resource :image, only: [:create, :destroy]
      end
    end
  end
end
