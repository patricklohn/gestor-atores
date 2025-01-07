// Importando dependencias
const express = require('express')
const exphbs = require('express-handlebars')

//Configurando o app e banco de dados
const app = express()
const port = 4000; 
const conn = require('./db/conn')

//configurando handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

// configurando arquivo json para o app
app.use(express.json())
// configurando pasta publica para o app
app.use(express.static('public'))


.then(()=>{
    app.listen(port,() =>{
    console.log(`Programa rodando na porta ${port}. Acesse o link do serviço http://localhost:${port}/`)
})
}).catch((error)=> console.log(error))



