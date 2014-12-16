class ApplicationController < Sinatra::Base

  set :views, File.expand_path('../../views', __FILE__)
  set :public_folder, File.expand_path("../../public", __FILE__)

  get '/' do
    erb :index
  end

  get '/write' do
    author = params['author']
    word = params['word']
    max_word_length = 100
    words_after = Author.words_after(word, author)
    @sentence = Author.write(word)
    erb :write
  end

  get '/game' do
    author_1 = params['author_1']
    author_2 = params['author_2']
    word = params['word']
    max_word_length = 50
    words_after_1 = Author.words_after(word, author_1)
    words_after_2 = Author.words_after(word, author_2)
    sentence_1 = Author.write(word)
    sentence_2 = Author.write(word)
    @game_sentence = sentence_1 + sentence_2
    binding.pry
  end

end