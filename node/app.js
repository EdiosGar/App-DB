import express from 'express'
import cors from 'cors'

import db from './database/db.js'
import usersRouters from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', usersRouters)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`Error de conexion: ${error}`)
}

app.get('/',(req,res) => {
    res.send('Hola Mundo')
})

app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/')
})