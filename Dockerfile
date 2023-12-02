FROM node:18-alpine3.17 AS BUILDER

ARG environment
ENV environment ${environment}

WORKDIR /app

COPY . .
RUN yarn install &&\
    yarn build:${environment}

# PREPARE RUNNABLE IMAGE
FROM nginx:stable-alpine3.17-slim as RUN

COPY --from=BUILDER app/build /usr/share/nginx/html

EXPOSE 80
