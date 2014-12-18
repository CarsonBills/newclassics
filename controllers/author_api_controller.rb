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

  get "/bio" do
    content_type :json
    author = params['author']
    biography = Author.biography(author)
    {
      author: author,
      biography: biography
    }.to_json
  end
end