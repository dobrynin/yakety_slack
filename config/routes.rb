Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end

  namespace :api do
    resources :users, only: [:create]
  end

  root 'static_pages#root'
end
