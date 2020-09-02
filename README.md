# gerenciamento-de-crushes-node.js
Este projeto é a realização do desafio prático 
"Criando uma API em Node.js para gerir os seus crushes" 
do bootcamp backend developer do site Digital Innovation One.

Para saber mais sobre o projeto original [clique aqui](https://github.com/jakeliny/NodeJS_DigitalInnovationOne).
Entretanto, é importante ressaltar que esse projeto foi acrescentado um recurso que faz com que algumas funcionalidades só sejam acessadas através do token;

## Requisitos
  - [Node.js](https://nodejs.org/en/)
  - [NPM](https://docs.npmjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=bing&utm_campaign=bs_americas_brazil_search_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=386028217&msclkid=4f5ca07cda901151ee53ff2cff3f7f65)
  - [Postman](https://www.postman.com/)


## Instalação
Execute os seguintes comandos num terminal:

````
 git clone https://github.com/JeanCarlos2017/gerenciamento-de-crushes-noje.js.git
````
```` 
cd gerenciamento-de-crushes-noje.js
````
````
 npm install
````

## Para rodar o projeto
Utilize o comando 
 ````
   npm start
````

##Navegador ou Postman
Abra a seguinte rota que está especificada no server.ts:

``
localhost:3000/
``
Como dito anteriormente para acessar as funcionalidades da API será necessário do token,
 que pode ser obtido em:
 ```` 
  http://localhost:3000/api/token
``