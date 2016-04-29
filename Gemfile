require 'json'
require 'open-uri'

versions = JSON.parse(open('https://pages.github.com/versions.json').read)

source 'https://rubygems.org'

gem 'github-pages', versions['github-pages']

group :jekyll_plugins do
  gem 'algoliasearch-jekyll', '~> 0.7.0'
end
