FROM node:10.10-alpine

COPY . /app

WORKDIR /app
RUN yarn && yarn global add http-server concurrently

CMD ["yarn", "start"]