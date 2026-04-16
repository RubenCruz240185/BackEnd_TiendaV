# BackEnd_TiendaV
npm init = para crear un package.json
puedes configurar las caracteristicas a como mas te guste, pero puedes dejar parametros vacios. 
ahora instalamos Express
npm install --save express body-parser morgan =para descargar el framework de trabajo
git ignore = para excluir cosas que no quieres subir a tu repositorio
npm i -D nodemon
npm start
npm install -g sequelize-cli para installar eso xcomo su paquete visual cm2
npm install --save sequelize 
npm install --save mysql2 depende de que motor de bd vamos a ocupar
sequelize init estructura de las carpetas
npm install dotenv para installar
npm install jsonwebtoken express = para retornar un token
sequelize model:generate --name tbc_usuarios --attributes ...:string...
npx sequelize-cli model:generate --name tbc_categorias --attributes nombre:string
# Si tu terminal no lo toma, usa comillas:
npx sequelize-cli model:generate --name tbc_categorias --attributes "nombre:string"
sequelize-cli db:migrate
para revertir ocupamos sequelize db:migrate:undo:all
y volvemos a migrar
//--------------------
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=1234
DB_NAME=db_tiendavirtual
DB_PORT=3307
----------//