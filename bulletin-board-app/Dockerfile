FROM node:current-slim

WORKDIR /bulletin-board-app
COPY package.json .
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]

COPY . .
