class AuthorAPIController < ApplicationController

  get "/write" do
    content_type :json
    author = params['author']
    word = params['word']
    text = Author.words_after(word, author)
    passage = Author.write(word)
    {
      word: word,
      author: author,
      passage: passage
    }.to_json
  end

end