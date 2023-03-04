# imagem base
FROM node:14-alpine

# diretório de trabalho
WORKDIR /app

# instalação das dependências
COPY package*.json ./
RUN yarn install

# cópia do código-fonte
COPY . .

# compilação
RUN yarn build

# porta que será exposta
EXPOSE 8080

# comando de inicialização
CMD [ "yarn", "start" ]