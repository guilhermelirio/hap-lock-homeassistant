ARG BUILD_FROM
FROM $BUILD_FROM

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