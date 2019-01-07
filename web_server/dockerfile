FROM node:8.11.4-alpine

COPY ./ /app/

WORKDIR /app/web_server

RUN ./install.sh

CMD ["node", "server.js"]