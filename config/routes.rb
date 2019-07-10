
Rails.application.routes.draw do
  root 'scapes#index'
  match '*path', to: 'scapes#index', via: :all

  resources :scapes, only: [:index, :new, :show]

end
