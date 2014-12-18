module Author

  def self.words_after(word, author)
    @author = author
    text = File.read("./lib/authors/#{@author}/#{@author}.txt")
    pattern = Regexp.new(word + '\s(\w+)')
    text.scan(pattern).flatten
  end


  def self.write(first_word, max_word_length=100)
    words = [first_word]
    while next_word = words_after( words.last, @author ).sample
      break if words.length > max_word_length
      words << next_word
    end
    words.join(' ')
  end

end