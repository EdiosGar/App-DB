// Importar la connexion a la DB
import db from "../database/db.js"
import { DataTypes } from "sequelize"

const UsersModel = db.define('users',{
    nombre: {type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    edad: {type: DataTypes.INTEGER},
    telefono: {type: DataTypes.STRING}
}
// Lo utilizamos para el contro de fechas
// ,{ 
//     timestamps: false
// }
)

export default UsersModel