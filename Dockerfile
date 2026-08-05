# syntax=docker/dockerfile:1

FROM node:26-alpine AS assets
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM ruby:3.4-alpine AS site
WORKDIR /app
RUN apk add --no-cache build-base
COPY Gemfile Gemfile.lock* ./
RUN bundle install
COPY . .
COPY --from=assets /app/assets ./assets
COPY --from=assets /app/_data/manifest.json ./_data/manifest.json
RUN bundle exec jekyll build

FROM nginxinc/nginx-unprivileged:alpine
COPY --from=site /app/_site /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
