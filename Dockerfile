FROM ruby:2.5.1

RUN mkdir -p /opt/site

RUN gem install github-pages --no-ri --no-rdoc \
     html-proofer \
     mini_racer \
     minitest

COPY Gemfile /tmp/
RUN (cd /tmp && bundle install -V )

WORKDIR /opt/site

VOLUME /opt/site

EXPOSE 4000

CMD jekyll serve --trace --verbose --host 0.0.0.0
