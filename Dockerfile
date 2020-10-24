# stage: 1
FROM node:10.16.0-alpine as builder
WORKDIR /usr/app
COPY package*.json yarn.lock /usr/app/
RUN yarn install --production

COPY . /usr/app/

# stage: 2 — the production environment
# EXPOSE 3000
WORKDIR /usr/app/server
ENV NODE_ENV production
CMD [ "node", "app.js" ]