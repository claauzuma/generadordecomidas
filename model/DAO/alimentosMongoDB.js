import { ObjectId } from "mongodb";
import CnxMongoDB from "../DBMongo.js";

class ModelMongoDBAlimentos {
    
    // Obtener uno o todos los pedidos
    obtenerAlimentos = async (id) => {   
        if (!CnxMongoDB.connection) {
            throw new Error('No hay conexión a la base de datos');
        }
        if (id) {
            const alimento = await CnxMongoDB.db.collection('pedidos').findOne({ _id: new ObjectId(id) });
            return alimento;
        } else {
            const alimentos = await CnxMongoDB.db.collection('alimentos').find({}).toArray();
            return alimentos;
        }
    }

   
}

export default ModelMongoDBAlimentos;
