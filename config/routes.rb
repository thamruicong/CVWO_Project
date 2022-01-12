Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    get 'tasks/index', to: 'tasks#index'
    get 'tasks/show/:id', to: 'tasks#show'
    post 'tasks/create', to: 'tasks#create'
    get 'tasks/edit/:id', to: 'tasks#edit'
    put 'tasks/update/:id', to: 'tasks#update'
    delete 'tasks/:id', to: 'tasks#destroy'
  end

  match '*path', to: 'home#index', via: :all
  
end
