
FROM image-registry.openshift-image-registry.svc:5000/a4b31c-tools/node:14-slim AS ui-public
WORKDIR /usr/src/app/nr-fom-public
# Filtered by .dockerignore
COPY . .
RUN npm ci && npm run build

FROM image-registry.openshift-image-registry.svc:5000/a4b31c-tools/node:14-slim AS server-build
RUN mkdir "/.npm"
RUN chown -R 1001:0 "/.npm"
RUN mkdir "/app"
RUN chown -R 1001:0 "/app"
USER 1001
WORKDIR /app
COPY --from=ui-public /usr/src/app/nr-fom-public/dist nr-fom-public/dist
COPY ./openshift/node-server/* ./
RUN npm install

EXPOSE 4300

CMD ["node", "server.js"]
