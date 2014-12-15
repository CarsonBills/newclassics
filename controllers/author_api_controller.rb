class AuthorAPIController < ApplicationController

  get '/write' do
    content_type :json
    author = params['author']
    word = params['word']
    text = Author.words_after(word, author)
    sentence = Author.write(word)

    {
      word: word,
      author: author,
      sentence: sentence
    }.to_json
  end

end