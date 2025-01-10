const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nomebanco', 'user', 'senha',{
    host: 'localhost',
    dialect: 'mysql',
})

try{

    sequelize.authenticate()
    console.log("Banco de dados MySQL Conectado!")

} catch(error){
    console.log(`Erro ao conectar ao banco!!!! ${error}`)
}

module.exports = sequelize; 