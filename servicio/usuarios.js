import ModelFactory from "../model/DAO/usuariosFactory.js";
import bcrypt from 'bcryptjs'; // Para manejar las contraseñas de forma segura
import jwt from 'jsonwebtoken';
import cloudinary from 'cloudinary';

class ServicioUsuarios {
    constructor(persistencia) {
        this.model = ModelFactory.get(persistencia);
    }

    logearUsuario = async (email, password) => {
        try {
          console.log("🔐 Login attempt:", email);
    
          // Obtener todos los usuarios (ya que el modelo no tiene obtenerPorEmail)
          const usuarios = await this.model.obtenerUsuarios();
          console.log("Mostramos los usuarios " , usuarios)
    
          // Buscar el usuario por email
          const usuario = usuarios.find(u => u.email === email);
          console.log("Encontramos al usuario, bien")
    
          if (!usuario) {
            console.warn("❌ Usuario no encontrado:", email);
            throw new Error('Usuario no encontrado');
          }
    
          // Comparar la contraseña proporcionada con la almacenada (encriptada)
          const esValido = await bcrypt.compare(password, usuario.password);
          console.log("La contraseña pasada es " + password)
          console.log("La contraseña del usuario encontrado es " + usuario.password)
          if (!esValido) {
            console.warn("❌ Contraseña incorrecta para:", email);
            throw new Error('Contraseña incorrecta');
          }
    
          // Generar JWT con el id del usuario
          const token = jwt.sign(
            { userId: usuario.id, rol: usuario.rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          );
    
          console.log("✅ Login exitoso:", email);
          return token;
        } catch (error) {
          console.error("⚠️ Error al logear usuario:", error.message);
          throw new Error('Credenciales incorrectas');
        }
      };


    registrarAdmin = async (admin) => {
        try {

            const usuarioExistente = await this.model.obtenerUsuarios(); 
            const emailExistente = usuarioExistente.find(u => u.email === admin.email);
            
            if (emailExistente) {
                console.warn("❌ Email ya registrado:", admin.email);
                throw new Error('Email ya registrado');
            }
    

            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(admin.password, salt);
    

        } catch (error) {
            console.error("Error al registrar admin:", error);
            throw new Error('No se pudo registrar al admin');
        }
    };
    

    // Método para registrar un entrenador
    registrarEntrenador = async (entrenador) => {
        try {
            const salt = await bcrypt.genSalt(10);
            entrenador.password = await bcrypt.hash(entrenador.password, salt);
            return await this.model.registrarEntrenador(entrenador);
        } catch (error) {
            console.error("Error al registrar entrenador:", error);
            throw new Error('No se pudo registrar al entrenador');
        }
    };

    // Método para registrar a un nutricionista
    registrarNutricionista = async (nutricionista) => {
        try {
            const salt = await bcrypt.genSalt(10);
            nutricionista.password = await bcrypt.hash(nutricionista.password, salt);
            return await this.model.registrarNutricionista(nutricionista);
        } catch (error) {
            console.error("Error al registrar nutricionista:", error);
            throw new Error('No se pudo registrar al nutricionista');
        }
    };

    // Método para registrar a un cliente
    registrarCliente = async (cliente) => {
        try {
            const salt = await bcrypt.genSalt(10);
            cliente.password = await bcrypt.hash(cliente.password, salt);
            return await this.model.registrarCliente(cliente);
        } catch (error) {
            console.error("Error al registrar cliente:", error);
            throw new Error('No se pudo registrar al cliente');
        }
    };

    // Obtener el perfil del usuario
    obtenerPerfil = async (userId) => {
        try {
            return await this.model.obtenerPorId(userId);
        } catch (error) {
            console.error("Error al obtener perfil:", error);
            throw new Error('Error al obtener perfil');
        }
    };

    // Actualizar el perfil del usuario
    actualizarPerfil = async (userId, datos) => {
        try {
            return await this.model.actualizarPerfil(userId, datos);
        } catch (error) {
            console.error("Error al actualizar perfil:", error);
            throw new Error('Error al actualizar perfil');
        }
    };

    // Obtener usuarios por rol
    obtenerUsuariosPorRol = async (rol) => {
        try {
            return await this.model.obtenerPorRol(rol);
        } catch (error) {
            console.error("Error al obtener usuarios por rol:", error);
            throw new Error('Error al obtener usuarios por rol');
        }
    };

    // Modificar un usuario
    modificarUsuario = async (id, datos) => {
        try {
            return await this.model.modificarUsuario(id, datos);
        } catch (error) {
            console.error("Error al modificar usuario:", error);
            throw new Error('Error al modificar usuario');
        }
    };

    // Modificar el email de un usuario
    modificarEmail = async (id, email) => {
        try {
            return await this.model.modificarEmail(id, email);
        } catch (error) {
            console.error("Error al modificar email:", error);
            throw new Error('Error al modificar email');
        }
    };

    // Modificar la contraseña de un usuario
    modificarContraseña = async (id, password) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const contrasenaEncriptada = await bcrypt.hash(password, salt);
            return await this.model.modificarContraseña(id, contrasenaEncriptada);
        } catch (error) {
            console.error("Error al modificar contraseña:", error);
            throw new Error('Error al modificar contraseña');
        }
    };

    // Eliminar un usuario
    borrarUsuario = async (id) => {
        try {
            return await this.persistencia.borrarUsuario(id);
        } catch (error) {
            console.error("Error al borrar usuario:", error);
            throw new Error('Error al borrar usuario');
        }
    };
}

export default ServicioUsuarios;
