Rails.application.routes.draw do
  root "tasks#index"
  get "tasks/index"
  get "tasks/new"
  post "tasks/create"
  get "tasks/edit"
  patch "tasks/update"
  post "tasks/create_tag"
end
