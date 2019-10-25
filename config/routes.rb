Rails.application.routes.draw do
  resources :comments
  #resources :promos

  scope '/api/v1' do
    get '/promos', to: 'promos#all'
    post '/newpromo', to: 'promos#newpromo'
    post '/update_rating', to: 'promos#update_rating'

  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
