> [[Voltar]](../README.md)

---

<p align="center">
  <img src="../__Layout/Marca/marca_mysocial-02.svg" width="300" />
</p>

# MYSOCIAL - backend

_Projeto Teste para DIALOG, o back foi criado de forma simples a servir uma api para o frontend consultar_

> O Documento abaixo terá uma breve descrição do projeto

_Tecnologias_

### #BackEnd

- NodeJS
- TypeScript
- GraphQL
- Apollo Server

## Features

1. List de Usuários
2. Busca de um Usuário específico

## Instalação das dependências

_Após fazer a copia do repositório executar o comando abaixo para fazer download de todos as dependncias_^

> NPM i

## Rodando o Projeto

_O projeto deverá ser rodado pelo comando abaixo_^

> NPM run dev:server
> O servidor será iniciado em : http://localhost:4000

## Queries

### List

### 1. Busca todos usuarios

> list(name:String){

    _id: ID
    index: Int
    name: String!
    email: String
    age: Int
    eyeColor: String
    company: String
    phone: String
    greeting: String
    picture: String
    friends: [User]

}

---

### 1. Busca todos usuarios

> user(user:ID){

    _id: ID
    index: Int
    name: String!
    email: String
    age: Int
    eyeColor: String
    company: String
    phone: String
    greeting: String
    picture: String
    friends: [User]

}

---
