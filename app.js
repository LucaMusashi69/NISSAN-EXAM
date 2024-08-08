import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import testempleados from "./backend/controllers/practica.controller.js"
import testbecarios from "./backend/controllers/becarios.controller.js"
import testentrenadores from "./backend/controllers/entrenadores.controller.js"
import testetecnicos from "./backend/controllers/tecnicos.controller.js"
import testelideres from "./backend/controllers/lideres.controller.js"
import testelideres from './backend/models/lideres.model.js'
import testenomina from "./backend/controllers/nomina.controller.js"
import testentradas from "./backend/controllers/entradas.controller.js"
import testsalidas from "./backend/controllers/salidas.controller.js"
dotenv.config()

mongoose.connect(procces.env.url)
.then(()=>{
    console.log("Se conecto la base de datos ")
})
.catch((err)=>{
    console.log("No se logro conectar ")
})
const app = express()
app.use(cors())

app.listen(4000,()=>{
    console.log("Si funciona el server")
})
 testempleados()
 testbecarios()
 testentrenadores()
 testetecnicos()
 testelideres()
 testenomina()
 testsalidas()
 testentradas()
