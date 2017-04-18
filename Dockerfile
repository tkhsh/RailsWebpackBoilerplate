FROM ruby:2.3.4

ENV APP_ROOT /app

WORKDIR $APP_ROOT

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
                       mysql-client && \
    rm -rf /var/lib/apt/lists/*

COPY Gemfile $APP_ROOT
COPY Gemfile.lock $APP_ROOT

RUN \
  bundle config --global build.nokogiri --use-system-libraries && \
  bundle install --jobs=4 && \
  rm -rf ~/.gem

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3000"]
