# stage: 1
FROM node:14.15.1-alpine as builder
WORKDIR /usr/app

COPY . /usr/app/
RUN yarn install --production


# stage: 2 — the production environment
# EXPOSE 3000
WORKDIR /usr/app/server
ENV NODE_ENV production
CMD [ "node", "app.js" ]