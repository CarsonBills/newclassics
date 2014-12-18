require 'bundler'
Bundler.require

puts '********************'
puts Dir['./*']

require './controllers/application_controller'
require './controllers/author_api_controller'
require File.expand_path('../lib/author_write', __FILE__)


map('/'){run ApplicationController }
map('/api'){run AuthorAPIController }