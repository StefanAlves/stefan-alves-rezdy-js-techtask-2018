FROM node:10.10-alpine

COPY . /build

WORKDIR /build
RUN yarn && yarn build:dist

COPY /build/dist /app/dist
COPY /build/index.html /app

# removes unnecessary node modules just use dist files
RUN rm -rf /build && yarn cache clean
RUN yarn global add http-server
WORKDIR /app

CMD ["http-server ."]