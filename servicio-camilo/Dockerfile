# Imagen base de Node.js
FROM node:21-alpine3.18

WORKDIR /app

COPY ./package*.json .

# Automate dependencies installation
RUN npm ci

COPY ./serverCamilo.js .

EXPOSE 3004

CMD [ "npm", "start" ]