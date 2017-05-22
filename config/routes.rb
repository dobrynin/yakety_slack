Rails.application.routes.draw do

  namespace :api do
    get 'subscriptions/create'
  end

  namespace :api, defaults: { format: :json } do
    resources :subscriptions, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :channels, only: [:create, :index, :show]
    resources :messages, only: [:create]
  end

  root 'static_pages#root'
end
