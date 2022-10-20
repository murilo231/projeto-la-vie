# :construction: Projeto em Construção :construction:

La Vie - Desafio 3 - Gama Academy

Foi solicitado a criação de uma API para melhor atender, agilizar e documentar todas as consultas da clínica de saúde mental La Vie, criada por amigos psicólogos para oferecer diversos tipos de terapia aos seus pacientes.

## Instruções para iniciar o projeto

Para executá-lo, primeiramente é necessário informar e direcionar a um banco de dados MySQL. Vá no arquivo src/database/dbsecret.js e preencha os campos "usuario" e "senha" com suas informações para conectar ao seu MySQL. 

Após feito isso, basta digitar no node o comando "npm run start" para iniciar o projeto junto ao nodemon.

## Documentação da API

## API

As tecnologias e pacotes utilizados nesse projeto foram Sequelize e Express, sendo divididos em 4 endpoints:

:white_medium_square:Login<br>
:white_medium_square:Pacientes<br>
:white_medium_square:Psicólogos<br>
:white_medium_square:Atendimento<br>

## Login

No área de login é feito uma autenticação de e-mail e senha que retorna um token gerado pelo [JWT](https://www.npmjs.com/package/jsonwebtoken)

## Pacientes

Feito um CRUD de acordo com a documentação.

## Psicólogos

No CRUD foi utilizado o pacote [bcrypt](https://www.npmjs.com/package/bcrypt) fazendo a criptografia na senha do psicólogo.

### Atendimentos

Para criação do atendimento é necessário uma autorização. Essa autorização é feita pelo token JWT.

## Desenvolvedores responsáveis pelo projeto - Grupo nº 5
  
[Maria Lima](https://github.com/LimaMaria),
[Ricardo Geneolle](https://github.com/RicardoGeneolle),
[Murilo Sodre](https://github.com/murilo231),
[Hudson Menezes](https://github.com/HudsonMenezes)
