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
    registrarAdmin = async (admin) => {
        if (!CnxMongoDB.connection) {
            throw new Error('No hay conexión a la base de datos');
        }
        const resultado = await CnxMongoDB.db.collection('usuarios').insertOne({
            ...admin,
            rol: 'admin',
            creadoEn: new Date()
        });
        return { _id: resultado.insertedId, ...admin, rol: 'admin' };
    }
}

export default ModelMongoDBUsuarios;
