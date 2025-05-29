FROM node:24.1.0-alpine

RUN node -v
RUN npm -v

WORKDIR /app/

RUN apk add --update --no-cache bash yarn nano

# Install packages first so that Docker doesn't run `yarn install` if the packages haven't changed
# See https://making.close.com/posts/reduce-docker-image-size
COPY yarn.lock package.json /app/
RUN yarn install && yarn cache clean

COPY index.ts negotiateHandlerFactory.ts /app/
COPY packages/shape-definitions/source /app/packages/shape-definitions/source/

RUN chmod -R a+r /app/

EXPOSE 30916

CMD [ "node", "index.ts" ]
