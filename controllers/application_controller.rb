class ApplicationController < Sinatra::Base

  set :views, File.expand_path('../../views', __FILE__)

  get '/' do
    erb :index
  end

  post '/write' do
    binding.pry
  end

end