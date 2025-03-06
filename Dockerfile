FROM node:20-alpine

RUN node -v
RUN npm -v

WORKDIR /app

RUN apk add --update --no-cache bash yarn nano

# Install packages first so that Docker doesn't run `yarn install` if the packages haven't changed
# See https://making.close.com/posts/reduce-docker-image-size
ADD package.json /app
ADD yarn.lock /app
RUN yarn install && yarn cache clean

ADD index.js /app
ADD negotiateHandlerFactory.js /app
ADD src /app/src

RUN chmod -R 777 /app/src

EXPOSE 8000

CMD [ "node", "index.js" ]
