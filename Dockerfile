FROM node:17-alpine

WORKDIR /company_template

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]