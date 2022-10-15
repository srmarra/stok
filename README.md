# STOK sistema de gerenciamento de estoque

Esse sistema está sendo desenvolvido em ***REACT*** na parte do ***FRONT*** e uma api em ***PHP*** na parte do back.
Estou hospedando eles no servidor gratuito ***HEROKU***.
Os dois estão em servidores separados e se comunicando atravez de API REST

![TELA LOGIN](https://i.ibb.co/BNm35p9/stok-login.png) 
#
Esse é um sistema simples que tem como funcionalidade ***gerenciar*** o estoque de uma empresa.
O foco dele não é ser ***exemplar*** quanto ao gerenciamento mas sim explorar as vantagens de usar  ***API REST***.
A arquitetura utilizada nesse projeto é ***microservices***

![TELA PAINEL](https://i.ibb.co/mDyxXKL/painel.png)
# LINKS UTEIS

- UX/UI [FIGMA](https://www.figma.com/file/9ehp9Bys8QzGyH7GEDM5GT/STOK?node-id=0%3A1)
- API PHP [GITHUB](https://github.com/srmarra/stok-api)
- MODELAGEM BANCO DE DADOS [FIGMA](https://www.figma.com/file/ltQUIdU3vG8SVFmeVtHs4T/STOK-Banco-de-dados)
- LINK FRONT HOSPEDADO [HEROKU](https://stokmarra.herokuapp.com/)
- LINK API HOSPEDADA [HEROKU](https://stok-api-srmarra.herokuapp.com/)



# COMO INSTALAR

- Baixe os arquivos
- Instale as dependencias do react
- Rode a API em um ambiente php
- No REACT vá no arquivo app.js e altere a variavel API_URL para o link da api exemplo "https://dominio.com/".
- No servidor do banco de dados insira o código SQL localizado na pasta raiz dos arquivos da API
- Nos arquivos da api vá até util/pdo_connect.php e altere as configurações de conexão do banco de dados.

