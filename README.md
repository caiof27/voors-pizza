# API - Teste Tecnico Voors Pizza

##

API construída para teste tecnico utilizando NestJS e TypeScript.
Recebe pedidos de uma pizzaria

## Tecnologias Utilizadas

- `API`: NestJS
- `ORM`: Sequelize
- `Validações de Requisições`: Class Validator e Class Transformer
- `Testes`: Jest
- `Documentação de API`: Swagger
- `Containers`: Docker

## Informações Importantes

Como padrão a porta da aplicação é definida pela variavel `APP_PORT`, para viés de exemplificação digamos que será `3000`

URL's importantes:

URL API: `http://localhost:3000/`
Swagger: `http://localhost:3000/api-docs`

## Processo de instalação

# Dependencias

```bash
$ npm install
```

# Migrações

As migrações são executadas pelo sequelize utilizando o seguinte comando:

```bash
$ npx sequelize-cli db:migrate
```

# Seeds

As migrações são executadas pelo sequelize utilizando o seguinte comando:

```bash
$ npx sequelize-cli db:seed:all
```

# Inicialização

```bash
# Desenvolvimento
$ npm run start:dev

# Produção
$ npm run start:prod
```

# Testes

A aplicação possui cobertura completa de testes

```bash
# Teste Unitarios
$ npm run test:unit

# Teste de Cobertura
$ npm run test:cov
```

# Docker

A aplicação foi construída para ser executada com containers, então para construir a imagem da `API` e do `POSTGRES` utilize esse comando abaixo:

```bash
# build image
$ docker-compose up
```

## Aspectos Técnicos

# Modelagem de Banco

Foram criadas as seguintes tabelas para atender aos requisitos propostos:

- `tb_pizza_size`
  Utilizada para armazenar os tamanho de pizza
- `tb_pizza_flavor`
  Utilizada para armazenar os sabores de  pizza
- `tb_pizza_personalization`
  Utilizada para armazenar as personalizações de pizza
- `tb_order`
  Utilizada para armazenar o pedido
- `tb_order_pizza`
  Utilizada para armazenar as pizzas relacionadas ao pedido
- `tb_order_pizza_personalization`
  Utilizada para armazenar as personalizações relacionadas as pizzas pedidas

Segue abaixo a representação grafica:

# Endpoints

- Rotas GET:
  Utilizadas para buscar informações

  - `/flavor`
  - `/size`
  - `/personalization`
  - `/order/:id`

- Rotas POST:
  Utilizadas para criar informações
  
  - `/order`

O detalhamento das mesmas se encontra do Swagger

# Status Code

Os endpoints podem retornas os seguintes status:

- `200 - OK`
  Concluido com sucesso e retorna algo
- `204 - No Content`
  Concluido com sucesso e sem retorno
- `500 - Server Error`
  Falha na execução

# Arquitetura

Foram criadas as seguintes camadas inspiradas no Clean Architecture:

- `Data`
  Camada onde são definidas os repositorios, protocolos e aplicadas regras de negocio
- `Domain`
  Camada mais interna responsavel pela definição dos casos de uso e modelos
- `Infra`
  Camada de conexão com bibliotecas terceiras onde no caso são aplicados os repositorios atraves da ORM
- `Main`
  Camada mais externa onde é definida a API, recebidas as requisições e são feitas as coneções e injeções de dependencias
- `Presentation`
  Camada onde são utilizados os casos de uso e statusCode

# Gitflow

O fluxo de codigo foi feito da seguinte maneira

- `feature/size`
- `feature/flavor`
- `feature/personalization`
- `feature/order`
- `feature/final-adjustments`

Além disso tambem possuimos as seguintes branchs:

- `master` -> para produçao
- `develop` -> para desenvolvimento

Para cada versão final será criada uma tag, segue abaixo a lista das mesmas:

- `1.0.0`




