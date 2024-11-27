import {Sequelize} from 'sequelize'

const db = new Sequelize('db_10','root','root', {
    host:'localhost',
    dialect:'mysql',
    define: { // Bloqueo de las tabals de fecha (actualizacion) de Sequelize
        timestamps: false
    }
})

export default db