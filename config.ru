require 'bundler'
Bundler.require

require './controllers/application_controller'
require './controllers/author_api_controller'
require './lib/author_write'


map('/'){run ApplicationController }
map('/api'){run AuthorAPIController }