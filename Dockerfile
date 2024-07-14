FROM node:20.15.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=postgres
ENV DB_DATABASE=postgres
ENV DB_DIALECT=postgres
ENV APP_PORT=3027

EXPOSE 3027

CMD ["npm", "start"]
