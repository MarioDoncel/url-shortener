import express from 'express'
import routes from './routes'
import cors from 'cors'
import mongoConnection from './database/mongoConnection'
// import errorHandler from './middlewares/error.handler.middleware'

const api = express()
const port = 5000
const host = 'http://localhost'


//api Configuration
api.use(express.json())
api.use(express.urlencoded({extended:true}))
api.use(cors())
mongoConnection.connect()

// CONFIGURANDO PASTA PUBLIC
// api.use(express.static('public'));

// Routes Configuration
api.use(routes);

//Handlers de erro
// api.use(errorHandler)

//Server initialization
api.listen(port, ()=> console.log(`⚡️:Server is running on ${host}:${port}`))