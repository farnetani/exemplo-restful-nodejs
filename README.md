# RESTful com Node.js, Restify e MySQL

## 20.08.2017

> Este projeto foi desenvolvido durante a gravação da série de screencasts disponível em [https://www.youtube.com/playlist?list=PLFJmwzuHdBRTBbkyH0gATtDhj6ikOIkMy](https://www.youtube.com/playlist?list=PLFJmwzuHdBRTBbkyH0gATtDhj6ikOIkMy) e é pré-requisito para o curso **Single Page Application com Vue.js** [http://www.treinatom.com.br/pt/edukee/detalhes-do-evento/190edc6b7593e3081a858f55652abd92a9d07353](http://www.treinatom.com.br/pt/edukee/detalhes-do-evento/190edc6b7593e3081a858f55652abd92a9d07353)

### Pré-requisitos

- **Node.js** versão 8 ou superior;
- **Nodemon** - `npm i -g nodemon`.

### Instalação

1. Faça o clone do repositório e no terminal navegue até a pasta;
2. Instale as dependências do projeto com `npm install`;
3. Rode o servidor de desenvolvimento com `npm run dev`.
4. Edite o arquivo `/src/services/mysql/index.js` e adicione as suas próprias configurações de conexão com o MySQL. Não se esqueça de criar o banco de dados e a tabela:

```
mysql -u <usuario> -p

mysql> create database restful_ws character set utf8 collate utf8_general_ci

mysql> create table categories (id INT(11) unsigned not null auto_increment, name VARCHAR(255), primary key(id));

mysql> insert into categories (name) values ('Categoria 01');
mysql> insert into categories (name) values ('Categoria 02');

```
4. O *endpoint* do serviço estará disponível em http://localhost:3456 .

### Sugestão

Utilize o Postman para testar suas chamadas. [https://www.getpostman.com/](https://www.getpostman.com/).

### Estrutura de Pasta

 ├── restful-ws
 |   ├── node_modules (não será importado, rodar npm install)
 |   ├── src
 |       ├── http
 |           ├── routes.js
 |       ├── server
 |           ├── cors.js
 |           ├── index.js
 |       ├── services
 |           ├── mysql
 |               ├── categories.js
 |               ├── index.js
 |   ├── .eslintrc.json
 |   ├── package-lock.json
 |   ├── package.json
 |   ├── README-JR.md
 |   ├── README.md

## Versionalização

- Para melhor organização seguiremos as diretrizes da Versionalização semântica -  1.0.0

## License

[MIT](https://github.com/farnetani)©[farnetani](https://github.com/farnetani)