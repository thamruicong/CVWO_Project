Rails.application.routes.draw do
  root 'home#index'

  namespace :api do

    # tasks controller
    get 'tasks/index', to: 'tasks#index'
    get 'tasks/show/:id', to: 'tasks#show'
    post 'tasks/create', to: 'tasks#create'
    get 'tasks/edit/:id', to: 'tasks#edit'
    put 'tasks/update/:id', to: 'tasks#update'
    delete 'tasks/:id', to: 'tasks#destroy'

    # tags controller
    get 'tags/index', to: 'tags#index'
    get 'tags/show/:id', to: 'tags#show'
    post 'tags/create', to: 'tags#create'
    get 'tags/edit/:id', to: 'tags#edit'
    put 'tags/update/:id', to: 'tags#update'
    delete 'tags/:id', to: 'tags#destroy'
  end

  match '*path', to: 'home#index', via: :all
  
end
