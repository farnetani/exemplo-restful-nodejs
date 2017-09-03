## Backend nodeJS com Restify

## 20.08.2017

## Curso VueJS : Vedovelli

## Git

    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:farnetani/exemplo-restful-nodejs.git
    git push -u origin master

## Atualização do NPM e do NodeJS

  - sudo npm cache clean -f 
  - sudo npm install -g n install 
  - sudo n stable 

  - npm -v
    5.3.0
  - node -v
    v8.4.0

## Instalação

  - $ npm init -y
  - $ npm i restify eslint --save-dev

  - $ npm i -g jshint

## Explicação : package-lock.json

  - Serve para trabalhar em equipe, onde as versões dos node_modules serão
  as mesmas que eu instalei.

## Eslint : linter - Cara que nos guia para escrever o javascript corretamente
 
  - Instalando:
     - ./node_modules/.bin/eslint --init
       Escolher - 1: na primeira opção: Use a popular style guide
       Escolher - 2: Standard (muitos usam o Airbnb)
       Escolher - 3: JSON

  - Testando eslint:
    Criar uma pasta src e um arquivo dentro dela chamado index.js
    
      vedovelli = 'batuta'

      module.exports = vedovelli

    Rodar: ./node_modules/.bin/eslint src/index.js

    - Resultará nos erros, basta corrigir:

      const vedovelli = 'batuta'

      module.exports = vedovelli
      <enter> para gerar a ultima linha

## Package Control (sublime) e instale o pacote sublimeLinter

  - Ele irá procurar o arquivo .eslintrc.json

## Dicas
  - Descobrir o diretorio do npm global no mac: npm root -g
  - Para instalar a versão do nodeJS
    - npm i -g n 
    - sudo n lts  (para instalar a ultima versao do npm lts)
    - sudo n (enter para switch entre as versoes)
     
## Problemas com eslint
  - npm install -g standard

  - URL: http://www.sublimelinter.com/en/latest/installation.html#installing-via-pc
  - Instalar o pacote: sublimelinter-linter
  - Instalar o pacote: sublimelinter-contrib-stantard
  - Instalar o pacote: Standard format

  - Instalar o pacote: HTML-CSS-JS Prettify : arrumar no arquivo de settings a identação para 2 e para adicionar nova linha:
    Clicar com o botão direito e escolher: 
    HTML/CSS/JS prettify > Prettify Preferences - Default e alterar:

    "end_with_newline": true,
    "indent_size": 2,

## URLS
  https://github.com/Flet/SublimeLinter-contrib-standard
  https://github.com/bcomnes/sublime-standard-format

## Config user
  http://sublimelinter.readthedocs.io/en/latest/settings.html

## Configurando o package.json um script:
   
   "dev" : "node src/index.js"

## Instalando o nodemon:
  - npm i -g nodemon
  - Editar o arquivo package.json e mudar o script DEV de node para nodemon
    "dev": "nodemon src/index.js",

## Aula 4 : Organizar o projeto
  - Criado 2 pastas: server e http
  - Criado um index.js em server
  - Criado um routes.js em http
  - Removido o conteúdo do index.js principal mantendo o mínimo possível

## Aula 5 : CORS
  - Instalando o pacote: restify-cors-middleware
  - url: https://github.com/TabDigital/restify-cors-middleware
  - npm i --save-dev restify-cors-middleware

## Aula 6 : Criar novas rotas
  - ENDPOINT: sempre o mesmo
  - Pensar sempre no recurso que será utilizado
  - Ativar em index.js (server):
    server.use(restify.plugins.bodyParser())

## Aula 7 : Fazer uma conexao no Mysql
  - Criar o banco de dados: restful_ws: create database restful_ws character set utf8 collate utf8_general_ci;

  - Criar a tabela: categories
  create table categories (id INT(11) unsigned not null auto_increment, name varchar(255), primary key(id));

  - Biblioteca para comunicar com o mysql: https://github.com/mysqljs/mysql

  - INSTALANDO:
    - npm i --save-dev mysql
    - npm i --save-dev mysqljs/mysql

  - Criar uma promise em services:

        const categories = new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            reject(error)
          }
          resolve({ categories: results })
        })
      })

  ## Aula 14
  - Criar o arquivo .env
  - https://github.com/motdotla/dotenv
    npm install dotenv --save-dev

  ## Aula 15 : TESTES
  - Solução chamada AVA (pronuncia-se: eiva)
  - https://github.com/avajs/ava
  - Mais usado = .is
  - Instalar: 
    npm install --global ava

  - Rodar na raiz do projeto:
    ava --init 

    - Isso irá criar no package.json em scripts um script chamado test: ava.
    - pode-se por também a flag --verbose para que ele nos passe mais informações

    - "test": "ava --verbose"

    - Basta criar os arquivos de testes: <nome>.test.js
    - Rodar: npm run test
    - Exemplo de arquivo de teste
    
    ```
          import test from 'ava';

      test('foo', t => {
        t.pass();
      });

      test('bar', async t => {
        const bar = Promise.resolve('bar');

        t.is(await bar, 'bar');
      });
    ```
- Criar um banco para os testes
MYSQL_TEST_DATABASE=restful_ws_test



    





