module Author

  def words_after(word, author)
    author = File.read(File.dirname(__FILE__) + "/#{Melville}.txt")
    pattern = Regexp.new(word + '\s(\w+)')
    melville.scan(pattern).flatten
  end


  def self.write(first_word, max_word_length=100)
    words = [first_word]

    while next_word = words_after( words.last ).sample
      break if words.length > max_word_length
      words << next_word
    end
    words.join(' ')
  end

end