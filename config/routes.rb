Rails.application.routes.draw do
  get 'welcome/index'
  
  resources :series

  root 'welcome#index'
end
