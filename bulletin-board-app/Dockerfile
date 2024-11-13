FROM node:current-slim

WORKDIR /usr/src/app
#COPY bulletin-board-app/package.json .
COPY bulletin-board-app/package.json /usr/src/app/
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]


#COPY . /usr/src/app