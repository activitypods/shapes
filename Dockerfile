# ---- Build the website (static files served by the Express server) ----
FROM node:24.1.0-alpine AS builder

WORKDIR /app/

RUN apk add --update --no-cache bash yarn

# Install packages first so that Docker doesn't run `yarn install` if the packages haven't changed
# See https://making.close.com/posts/reduce-docker-image-size
COPY yarn.lock package.json /app/
COPY website/package.json /app/website/
COPY packages/shape-definitions/package.json /app/packages/shape-definitions/
COPY packages/ldo-shapes/package.json /app/packages/ldo-shapes/
RUN yarn install --frozen-lockfile && yarn cache clean

COPY website /app/website/
RUN yarn build:website

# ---- Runtime image ----
FROM node:24.1.0-alpine

RUN node -v
RUN npm -v

WORKDIR /app/

RUN apk add --update --no-cache bash yarn nano

COPY yarn.lock package.json /app/
COPY website/package.json /app/website/
COPY packages/shape-definitions/package.json /app/packages/shape-definitions/
COPY packages/ldo-shapes/package.json /app/packages/ldo-shapes/
RUN yarn install --frozen-lockfile --production && yarn cache clean

COPY index.ts negotiateHandlerFactory.ts /app/
COPY api /app/api/
COPY packages/shape-definitions/source /app/packages/shape-definitions/source/
COPY --from=builder /app/website/dist /app/website/dist/

RUN chmod -R a+r /app/

EXPOSE 30916

CMD [ "node", "index.ts" ]
