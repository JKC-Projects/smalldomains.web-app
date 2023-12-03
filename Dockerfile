FROM node:18-alpine3.17 as BUILDER

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build:development &&\
    yarn build:production

# PREPARE RUNNABLE IMAGE
FROM nginx:stable-alpine3.17-slim as RUN

RUN rm /etc/nginx/conf.d/default.conf &&\
    rm -r /usr/share/nginx/html

# copy over the not-yet-hydrated config file to a generic location
COPY --from=BUILDER app/nginx-config-files/static-react-content.conf /config/static-react-content.conf
# copy over the static-content for each environment
COPY --from=BUILDER app/development-build /usr/share/nginx/html/development
COPY --from=BUILDER app/production-build /usr/share/nginx/html/production

# test nginx config
RUN nginx -T || exit 1

EXPOSE 8080
ENTRYPOINT ["/bin/sh", "-c", "envsubst < /config/static-react-content.conf > /etc/nginx/conf.d/static-react-content.conf && nginx -g 'daemon off;'"]