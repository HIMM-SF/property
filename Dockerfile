FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "docker"]
