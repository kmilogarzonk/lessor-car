Rails.application.routes.draw do
  
  #UI
  root 'sessions#welcome'

  resources :users, only: [:new, :create]

  #Login
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'home', to: 'sessions#welcome'
  get 'authorized', to: 'sessions#page_requires_login'

  #API

  namespace :api do
    namespace :v1 do
      #Lessor
      post "lessor/new", to: "public#createlessor"
    end
  end


end
