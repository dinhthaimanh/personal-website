FROM node

WORKDIR /usr/web/test-web
RUN yarn install

CMD ['yarn', 'dev']