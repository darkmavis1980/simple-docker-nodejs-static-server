FROM node:carbon

WORKDIR /app

COPY . /app/

RUN npm install
RUN npm install -g pm2

EXPOSE 8100

CMD ["pm2-runtime", "server.js"]