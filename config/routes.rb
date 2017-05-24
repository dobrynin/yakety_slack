Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    resources :direct_messages, only: [:create]
    resources :subscriptions, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index]
    resources :channels, only: [:create, :index, :show]
    resources :messages, only: [:create]
  end

  root 'static_pages#root'
end
