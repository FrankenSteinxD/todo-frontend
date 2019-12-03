FROM node:10-alpine as builder

WORKDIR /app
COPY . .

RUN yarn install && yarn build

FROM nginx:alpine as server

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/resolve-env.sh /tmp
RUN chmod +x /tmp/resolve-env.sh

CMD ["/bin/sh", "-c", "/tmp/resolve-env.sh && nginx -g \"daemon off;\""]
