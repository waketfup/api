FROM node:8

RUN useradd --user-group --create-home --shell /bin/false webserver

ENV HOME=/home/webserver

COPY code/package*.json $HOME/www/

RUN chown -R webserver:webserver /home/webserver/*

USER webserver

WORKDIR $HOME/www

RUN npm install
