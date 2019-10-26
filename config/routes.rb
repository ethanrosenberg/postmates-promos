Rails.application.routes.draw do
  #resources :promos

  scope '/api/v1' do
    get '/promos', to: 'promos#all'
    post '/newpromo', to: 'promos#newpromo'
    post '/update_rating', to: 'promos#update_rating'
    post '/add_comment', to: 'comments#add_comment'

  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
