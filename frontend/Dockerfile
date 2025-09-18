FROM node:23-alpine
RUN apk add --no-cache dumb-init
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_INTERVAL=100
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --only=production=false
COPY . ./
RUN mkdir -p .next && chown -R node:node .next
USER node
EXPOSE 3000
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "dev:docker"]