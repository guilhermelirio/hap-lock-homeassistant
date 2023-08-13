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