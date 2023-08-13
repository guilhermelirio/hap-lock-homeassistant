ARG BUILD_FROM
FROM $BUILD_FROM

ENV LANG C.UTF-8
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.15/main" >> /etc/apk/repositories \
    && echo "http://dl-cdn.alpinelinux.org/alpine/v3.15/community" >> /etc/apk/repositories \
    && apk add --no-cache \
    nodejs=16.20.1-r0 \
    npm \
    git

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para o container
COPY package*.json ./
COPY . .
COPY node_modules ./node_modules

# Expõe a porta utilizada pela aplicação
EXPOSE 47169

# Define o comando para iniciar a aplicação
CMD [ "npm", "start" ]