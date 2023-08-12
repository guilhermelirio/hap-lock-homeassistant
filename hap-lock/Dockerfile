ARG NODE_VERSION=16.11.1
ARG ALPINE_VERSION=3.14

FROM node:${NODE_VERSION}-alpine AS node

FROM alpine:${ALPINE_VERSION}

ENV LANG C.UTF-8
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN apk add --no-cache \
    nodejs@16.13.2 \
    npm \
    git

COPY package*.json ./
COPY . .
COPY node_modules ./node_modules

# Define o diretório de trabalho
WORKDIR /app

# Expõe a porta utilizada pela aplicação
EXPOSE 47169

# Copy data for add-on
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]