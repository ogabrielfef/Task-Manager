# TaskManager!

O TaskManager é uma aplicação web que irá te auxiliar no gerenciamento e planejamento de tarefas diarias.

## Como funciona?

Você se cadastra utilizando seu próprio email, e terá acesso a um ambiente para gerenciar suas tarefas.

## Features

- Tenha um acesso privado por meio de email e senha. ✅
- Registre suas tarefas. ✅ 
- Altere tarefas ja existentes. ✅
- Exclua tarefas que não deseja mais. ✅
- Atualize o status de uma atividade para concluido, sem a necessidade de exclui-la. ✅

## Installation and Usage (Linux Ubuntu - Development)

Clone o repositório para a sua máquina.

```bash
git clone git@github.com:ogabrielfef/Task-Manager.git
```

Crie o Banco de dados conforme o modelo fornecido. 

- Para criar o Banco de dados, execute no MySQL Workbench a query contida no arquivo `migration.sql`

- Para popular o Banco de dados com os dados iniciais, execute no MySQL Workbench a query contida no arquivo `seed.sql`.


Vá para a pasta `backend` e crie um arquivo `.env`:
- Você pode criar manualmente usando algum editor de códigos ou caso se sinta a vontade pode fazer esse processo pelo terminal utilizando os passos abaixo:
```bash
cp .env.example .env
nano .env
```

Preencha o arquivo `.env` com as suas variáveis de ambiente:
- Preencha o arquivo .env com as informações do seu banco local, seguindo o exemplo:
```bash
MYSQL_HOST=localhost
MYSQL_USER=seuusuario
MYSQL_PASSWORD=suasenha
MYSQL_DATABASE=StoreManager
PORT=3000
HOST=localhost
```

Intale as dependencias do backend:

```bash
npm install
```

Inicie o backend:

```bash
npm start
```

Abra um segunto terminal e vá para pasta frontend.

instale as dependências do frontend:
```bash
npm install
```

Inicie o frontend:

```bash
npm start
```

- Vá para http://localhost:3001/
- Cadastre seu usuário ou acesse o usuário administrador utilizando o email: `admim@admim.com`, e a senha: `admim123`.
- A aplicação ja está disponivel para utilização.

## Considerações 

A ideia inicial do projeto continha alguns detalhes, recursos e tecnologias a mais, as quais eu adoraria de ter utilizado. Foquei em entregar as funcionalidades sem prejudicar o código com arquivos/lógicas monolitos, tentei usar um padrão e arquitetura de código que eu já tinha um certo conhecimento.

Para o backend eu optei por usar express, jasonwebtoken e mysql2 como ferramentas base para o código, utilizei nodemon pelo "conforto" que ela entrega durante o desenvolvimento. Minha ideia principal no backend incluía testes e validações utilizando o joy, sem contar que eu gostaria de ter implantado um sistema de mapError.

Para frontend utilizei react, react-router-dom, useState, context, jasonwebtoken, axios e react-modal. Minha ideia era criar um frontend básico, porém intuitivo e com uma visão clean e moderna. Para que isso fosse possível optei pelo  tailwind pois é uma ferramenta que eu tenho gostado de utilizar e que nos entrega uma boa otimização de tempo.

O projeto foi muito bom para testar as minhas habilidades com as staks, com ter que lidar com as novas versões de algumas ferramentas, o exercício do gerenciamento de tempo, o entendimento das necessidades e "urgências" e a gratificação de poder ver uma aplicação fullstack em funcionamento.

##
Para vocês que estiverem avaliando o projeto e para vocês que estiverem apenas visitando, agradeço pela atenção. 



Abraços,

ogabrielfef
