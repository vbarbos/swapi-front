FROM node:8-alpine

ARG ENVIRONMENT=homolog
ENV ENVIRONMENT=$ENVIRONMENT

RUN echo Using $ENVIRONMENT environment.

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app
COPY package.json /usr/src/app/

RUN npm install --production

RUN npm run build:$ENVIRONMENT

ENTRYPOINT npm run start:$ENVIRONMENT
