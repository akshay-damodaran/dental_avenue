FROM node:10
WORKDIR /app
COPY package.json /app
RUN yarn
COPY dist /app/dist
EXPOSE 3000
CMD ["yarn", "start"]