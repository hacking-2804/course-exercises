FROM node:8.11.4-alpine

COPY ./data_server /app
COPY ./package-lock.json /app
COPY ./package.json /app

WORKDIR /app

RUN ./install.sh

CMD ["node", "server.js"]