FROM node:14-alpine

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add --no-cache mongodb nodejs-npm

RUN mkdir /data mkdir /data/db

VOLUME /app
COPY start.sh /start.sh
WORKDIR /app

#RUN npm i

CMD sh /start.sh
