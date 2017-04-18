FROM node:6.10.2

ENV APP_ROOT /app

WORKDIR $APP_ROOT

COPY package.json $APP_ROOT

RUN npm install

EXPOSE 8080
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "8080"]
