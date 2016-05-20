require 'json'
require 'open-uri'

versions = JSON.parse(open('https://pages.github.com/versions.json').read)

source 'https://rubygems.org'

# The reason to add a ruby version at .ruby-version and here is to prevent
# the CI server to push to Github if the versions mismatch.
# see <https://circleci.com/docs/unrecognized-ruby-version/>
ruby versions['ruby'] if ENV['CI']

group :jekyll_plugins do
  gem 'github-pages', versions['github-pages']
  gem 'algoliasearch-jekyll', '~> 0.7.0'
end

group :test do
  gem 'html-proofer'
end
