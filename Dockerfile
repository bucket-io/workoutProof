FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
EXPOSE 3000

# add app
COPY . ./

# start app
CMD ["npm", "start"]