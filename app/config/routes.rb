Rails.application.routes.draw do
  
  #UI
  root 'sessions#welcome'

  #Create user
  post 'signup', to: 'users#create'

  #Login
  get 'login', to: 'sessions#new'
  get 'closesession', to: 'sessions#delete'
  post 'login', to: 'sessions#create'
  get 'home', to: 'platform#home'
  get 'authorized', to: 'sessions#page_requires_login'

  #API

  namespace :api do
    namespace :v1 do
      #Lessor
      post "lessor/new", to: "public#createlessor"
    end
  end


end
