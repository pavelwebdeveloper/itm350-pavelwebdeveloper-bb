FROM node:current-slim

WORKDIR /usr/src/app
COPY bulletin-board-app/package.json .
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]


#COPY . /usr/src/app