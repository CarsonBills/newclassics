class ApplicationController < Sinatra::Base

  set :views, File.expand_path('../../views', __FILE__)
  set :public_folder, File.expand_path("../../public", __FILE__)

  get '/' do
    erb :index
  end

  get '/write' do
    erb :write
  end

  get '/game' do
    erb :game
  end

end