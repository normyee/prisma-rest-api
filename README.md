# API REST usando Prisma
Este é um projeto de uma API REST desenvolvida com o framework Prisma, seguindo boas práticas de arquitetura e utilizando o padrão de repositórios. O projeto consiste em duas tabelas no banco de dados: User e Post. A tabela Post tem uma chave estrangeira que referencia a chave primária da tabela User.

## Repositories Pattern
Para deixar a aplicação mais escalável, foram criados dois controllers: `PostController` e `UserController`. Cada controller tem o seu repositório correspondente, garantindo uma melhor organização e manutenção do código.

## Como usar

Para usar esta aplicação, é necessário seguir os seguintes passos:
1. Subir um container de MySQL pelo Docker:
 ```
$ docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=yourpassword -d mysql:latest
 ```
2. Especificar as informações de conexão com o banco de dados no arquivo `.env`, incluindo user, senha, endereço e porta.
```
DATABASE_URL="mysql://user:senha@endereco:porta/mydb?schema=public"
```
3. Gerar as migrations com o comando:
```
$ npx prisma migrate dev
```

4. Gerar a build com o comando:
```
$ npx tsc
```

5. Incializar o servidor:
```
$ node ./dist/index.js
```

# Documentação da API

## Users
Visão geral
| Rota | Método| Descrição |
|---------|---------|---------|
| /newUser | POST | Cria um novo usuário |
| /getAllUsers | GET | Retorna todos os usuários |

* `POST /newUser`: Cria um novo usuário. O corpo da requisição deve conter um objeto com as seguintes informações:

```json
{
    "name": "nome",
    "email": "example@gmail.com"
}
```
* `GET /getAllUsers`: Retorna uma lista de todos os usuários cadastrados.


## Posts
Visão geral
| Rota | Método | Descrição |
|---------|---------|---------|
| /newPost | POST | Cria um novo post |
| /getPost/:id | GET | Retorna um post específico |
| /updatePost/:id | PATCH | Edita um post específico |
| /deletePost/:id | DELETE |Deleta um post específico |

* `POST /newPost`: Cria um novo post. O corpo da requisição deve conter um objeto com as seguintes informações:

```json
{
    "authorId": 1,
    "title": "titulo",
    "content": "conteudo"
}
```
O `authorId` deve referenciar a chave primária do usuário criado na tabela users.

* `GET /getPost/:id`: Retorna as informações do post com o id especificado na rota.

* `PATCH /updatePost/:id`: Edita o post com o id especificado na rota. O corpo da requisição deve conter um objeto com as informações a serem atualizadas:
```json
{
    "title": "Título Atualizado",
    "content": "post editado"
}
```

* `DELETE /deletePost/:id`: Deleta o post com o id especificado na rota.

## Tecnologias utilizadas
* Prisma
* MySQL
* Node.js
* Express
* Typescript
* Docker




