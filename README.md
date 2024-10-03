# Movie API

## Descrição

Esta é uma API desenvolvida em **TypeScript** utilizando **Express.js** para fornecer serviços de gerenciamento de usuários e trailers de filmes. Ela oferece funcionalidades de autenticação com **JWT** (JSON Web Tokens), segurança de senhas com **Bcrypt**, e interações com banco de dados **MongoDB** através do **Mongoose**.

## Tecnologias Utilizadas

- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a qualidade e manutenção do código.
- **Express.js**: Framework minimalista para construção de APIs com Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenar dados sobre filmes e usuários.
- **Mongoose**: Ferramenta de modelagem de objetos MongoDB para Node.js, facilitando a interação com o banco de dados.
- **JWT**: Utilizado para autenticação segura e comunicação entre cliente e servidor.
- **Bcrypt**: Biblioteca para hashing e salting de senhas, garantindo seu armazenamento seguro.
- **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens (frontend e backend).

## Endpoints da API

### Autenticação

- **POST /auth/register**  
  Registra um novo usuário no sistema.

- **POST /auth/login**  
  Autentica um usuário e retorna um token JWT.

- **GET /auth/users** (Apenas Admin)  
  Retorna uma lista de todos os usuários.

- **PUT /auth/users/:id** (Apenas Admin)  
  Atualiza os detalhes de um usuário específico.

- **DELETE /auth/users/:id** (Apenas Admin)  
  Remove um usuário específico.

### Filmes

- **GET /api/movies** (Apenas usuários logados)  
  Retorna uma lista de trailers de filmes com detalhes.

- **GET /api/movies/search** (Apenas usuários logados)  
  Pesquisa filmes com paginação, ordenação e filtros (ordenar por data de lançamento, buscar por ano de lançamento, nome ou gênero).

- **POST /api/movies** (Apenas Admin)  
  Adiciona um novo filme.

- **PUT /api/movies/:id** (Apenas Admin)  
  Atualiza os detalhes de um filme específico.

- **DELETE /api/movies/:id** (Apenas Admin)  
  Remove um filme específico.

## Estrutura do Projeto

O projeto segue o padrão **MVC (Model-View-Controller)**, com a seguinte organização de pastas:

- /controllers # Controladores que processam as requisições 
- /models # Modelos do Mongoose representando dados de usuários e filmes 
- /services # Lógica de negócios separada dos controladores 
- /middleware # Middleware como autenticação e autorização 
- /routes # Definição das rotas da API

### Modelos

#### User Model

O modelo de usuário representa um usuário cadastrado na aplicação, com os seguintes campos:

- `username`: Nome de usuário
- `email`: Endereço de email
- `password`: Senha (hash e salt com Bcrypt)
- `role`: Define o papel do usuário (normal ou admin)

#### Movie Model

O modelo de filme representa um filme com os seguintes campos:

- `title`: Título do filme
- `releaseDate`: Data de lançamento
- `trailerLink`: URL do trailer do filme
- `posterUrl`: URL do pôster do filme
- `genres`: Gêneros associados ao filme

## Requisitos

- **Node.js** v14+
- **MongoDB** v4.4+
- **npm** ou **yarn** (para gerenciar pacotes)

## Instalação

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/movie-api.git 
```

2. Instale as dependências:

```
npm install 
```

3. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```
PORT=3000
MONGO_URI=sua_url_mongodb
JWT_SECRET=seu_segredo_jwt 
```

4. Inicie o servidor:
```
npm run dev
```