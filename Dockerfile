FROM node:slim

WORKDIR /usr/src/app

COPY src .

RUN npm install

CMD ["node","."]