require 'json'
require 'net/http'

source 'https://rubygems.org'

begin
  uri      = URI('https://pages.github.com/versions.json')
  versions = JSON.parse(Net::HTTP.get(uri))

  # We need to be sure jekyll gets built in CI using the same version
  # than Github does.
  gem 'github-pages', versions['github-pages'], group: :jekyll_plugins

  # The reason to add a ruby version at .ruby-version and here is to prevent
  # the CI server to push to Github if the versions mismatch.
  # see <https://circleci.com/docs/unrecognized-ruby-version/>
  ruby versions['ruby'] if ENV['CI']

# If DNS lookup fails or the versions endpoint is just unreacheable, we do the
# reasonable assumption that there's no internet connection.
rescue SocketError => socket_error
  # Halt execution immediatly if CI server run.
  raise socket_error if ENV['CI']

  # Warn the user if we believe she's offline.
  puts <<-MESSAGE

    Couldn't reach #{uri.to_s}, assuming you're offline.

  MESSAGE

  # Try to use whatever version is already installed.
  gem 'github-pages'

# If for any other reason the production versions check fails, we still need to provide
# a fallback scenario to the user.
rescue => standard_error
  # Halt execution immediatly if CI server run.
  raise standard_error if ENV['CI']

  # We invite the user to report the incident by opening an issue.
  puts <<-MESSAGE

    Something went wrong trying to parse production versions.
    Please report the incident at https://github.com/sgmap/beta.gouv.fr/issues:

      Exception name:    #{standard_error.class.name}
      Exception message: #{standard_error.message}

  MESSAGE

  # Try to use whatever version is already installed.
  gem 'github-pages'
end

gem 'html-proofer', group: :test
