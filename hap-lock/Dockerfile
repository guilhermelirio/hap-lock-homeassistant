ARG BUILD_FROM
FROM $BUILD_FROM
FROM --platform=$TARGETPLATFORM node:16.13.2

ENV LANG C.UTF-8
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN apk add --no-cache \
    nodejs \
    npm \
    git

COPY package*.json ./
COPY . .
COPY node_modules ./node_modules
#COPY package.json /app/package.json
# COPY package-lock.json /app/package-lock.json
# RUN cd /app && npm install --unsafe-perm
# COPY src /app/src

# Define o diretório de trabalho
WORKDIR /app

# Expõe a porta utilizada pela aplicação
EXPOSE 47169

# Copy data for add-on
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]