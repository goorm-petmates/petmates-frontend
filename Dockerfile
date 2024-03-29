FROM node:20.11.0-alpine3.18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./ ./
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000
CMD [ "npm", "run", "start" ]