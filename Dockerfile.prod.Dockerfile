FROM node:10.10-alpine

COPY . /app

WORKDIR /app
RUN yarn && yarn build:dist && yarn cache clean && rm -rf node_modules
RUN yarn global add http-server && yarn cache clean

CMD ["yarn","serve"]