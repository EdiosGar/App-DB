// Importar el modelo
import UsersModel from "../models/usersModel.js"


// Metodos para el CRUD

// Mostrar todods los registros
export const getAllUsers = async(req, res) => {
    try{
        const users = await UsersModel.findAll()
        // const users = await UsersModel.findAll({attributes: ['id', 'nombre', 'apellido', 'edad', 'telefono']})
        res.json(users)
    } catch(error) {
        res.json( {message: error.message} )
    }
}

// Mostrar un registro
export const getUser = async (req,res) => {
    try{
        const user = await UsersModel.findAll({
            where: { id: req.params.id }
        })
        res.json(user[0])
    } catch (error){
        res.json( {message: error.message} )
    }
}

// Crear registro
export const createUser = async (req,res) => {
    try {
        await UsersModel.create(req.body)
        res.json({"message": "Registro exitoso!"})
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Actualizar registro
export const updateUser = async (req,res) => {
    try {
        await UsersModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({"message": "Registro actualizado con exito!"})
    } catch(error){
        res.json( {message: error.message} )
    }
}

// Eliminar registro
export const deleteUser = async (req,res) => {
    try {
        const user = await UsersModel.destroy({
            where: { id: req.params.id }
        })
        res.json({"message": "Registro eliminado"})
    } catch(error) {
        res.json( {message: error.message} )
    }
}