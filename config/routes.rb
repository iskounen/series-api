Rails.application.routes.draw do
  get 'welcome/index'

  resources :series do
    resources :books
  end

  root 'welcome#index'
end
