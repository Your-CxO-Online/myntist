FROM node:21.1.0-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

CMD [ "npm", "run", "dev" ]
