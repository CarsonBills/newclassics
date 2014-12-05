class ApplicationController < Sinatra::Base

  set :views, File.expand_path('../../views', __FILE__)

  get '/' do
    erb :index
  end

  get '/write' do
    author = params['author']
    word = params['word']
    max_word_length = 100
    words_after = Author.words_after(word, author)
    @sentence = Author.write(word)
  end

end