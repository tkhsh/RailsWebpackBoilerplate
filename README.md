# Rails Webpack Boilerplate

Configure Rails app with

- Rails 5.x(< 5.1) api mode
- MySQL
- webpack 2.x
- Docker containers(Rails, webpack, MySQL) composed

## Configuration

```
git clone git@github.com:tkhsh/rails-webpack-boilerplate.git app_name
cd app_name
docker-compose build
docker-compose run web rake db:setup
docker-compose run client npm install
```

## Run App

```
docker-compose up
```
