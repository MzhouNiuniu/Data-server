FROM node:10.15-jessie
RUN mkdir -p /root/app
COPY . /root/app
WORKDIR /root/app
RUN npm install
EXPOSE 3000
CMD ["npm","run","sit"]
