ARG BUILD_FROM
FROM $BUILD_FROM

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para o container
COPY package*.json ./
COPY . .
COPY node_modules ./node_modules

# Expõe a porta utilizada pela aplicação
EXPOSE 47169

# Copy data for add-on
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]