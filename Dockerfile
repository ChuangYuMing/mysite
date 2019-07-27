# stage: 1
FROM node:10.16.0-alpine as builder
WORKDIR /
COPY . ./

# stage: 2 — the production environment
# EXPOSE 3000
WORKDIR /server/
ENV NODE_ENV production
CMD [ "node", "app.js" ]