FROM node:10.15-alpine
WORKDIR /app
RUN apk update && \
    npm install -g npm && \
    npm install -g yarn && \
    npm install -g create-nuxt-app && \
    npm install -g firebase-tools
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["/bin/ash"]
