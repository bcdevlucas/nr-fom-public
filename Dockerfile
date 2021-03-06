
FROM node:12-alpine AS ui-public
WORKDIR /usr/src/app/
COPY . ./nr-fom-public/
WORKDIR /usr/src/app/nr-fom-public
RUN npm cache clean --force && npm install @angular/cli && npm install && npm run build

FROM node:12-alpine AS server-build
WORKDIR /root/
COPY --from=ui-public /usr/src/app/nr-fom-public/dist nr-fom-public/dist
COPY ./openshift/package*.json ./
RUN npm install
COPY ./openshift/server.js .

EXPOSE 4300

CMD ["node", "server.js"]
