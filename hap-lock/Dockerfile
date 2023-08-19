# Use a base image with Node.js 16.13.2
FROM node:16.13.2

ENV LANG C.UTF-8
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para o container
COPY package.json ./
COPY . .
COPY node_modules ./node_modules

# Expõe a porta utilizada pela aplicação
EXPOSE 47169

# Define o comando para iniciar a aplicação
CMD [ "npm", "start" ]