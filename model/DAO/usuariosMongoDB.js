import { ObjectId } from "mongodb";
import CnxMongoDB from "../DBMongo.js";

class ModelMongoDBUsuarios {
    
    // Obtener uno o todos los usuarios
    obtenerUsuarios = async (id) => {   
        if (!CnxMongoDB.connection) {
            throw new Error('No hay conexión a la base de datos');
        }
        if (id) {
            const usuario = await CnxMongoDB.db.collection('usuarios').findOne({ _id: new ObjectId(id) });
            return usuario;
        } else {
            const usuarios = await CnxMongoDB.db.collection('usuarios').find({}).toArray();
            return usuarios;
        }
    }

    // Registrar un administrador
    registrarUsuario = async (usuario) => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('usuarios').insertOne(usuario)
        return usuario
    }
}

export default ModelMongoDBUsuarios;
