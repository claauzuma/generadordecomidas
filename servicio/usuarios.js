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
            // Verificar si ya existe un usuario con el mismo email
            const usuarioExistente = await this.model.obtenerUsuarios(); 
            const emailExistente = usuarioExistente.find(u => u.email === admin.email);
    
            if (emailExistente) {
                console.warn("❌ Email ya registrado:", admin.email);
                throw new Error('Email ya registrado');
            }
    
            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(admin.password, salt);
    
            admin.rol = "admin";
    
            const adminGuardado = await this.model.registrarUsuario(admin);  // Llamamos al modelo para guardar el administrador
            console.log("✅ Admin registrado exitosamente:", admin.email);
            return adminGuardado;
             
    
        } catch (error) {
            console.error("Error al registrar admin:", error);
            throw new Error('No se pudo registrar al admin');
        }
    };
    
    

    registrarEntrenador = async (entrenador) => {
        try {
            // Verificar si ya existe un usuario con el mismo email
            const usuarios = await this.model.obtenerUsuarios(); 
            const emailExistente = usuarios.find(u => u.email === entrenador.email);
    
            if (emailExistente) {
                console.warn("❌ Email ya registrado:", entrenador.email);
                throw new Error('Email ya registrado');
            }
    
            // Encriptar contraseña
            const salt = await bcrypt.genSalt(10);
            entrenador.password = await bcrypt.hash(entrenador.password, salt);
    
            // Atributos iniciales
            entrenador.rol = "entrenador";
            entrenador.clientes = []; // Lista vacía al inicio
            entrenador.creadoEn = new Date();
            entrenador.activo = true; // Opcional
            entrenador.especialidades = []; // Opcional, si pensás agregar luego
    
            // Guardar entrenador
            const entrenadorGuardado = await this.model.registrarUsuario(entrenador);
            console.log("✅ Entrenador registrado exitosamente:", entrenador.email);
            return entrenadorGuardado;
    
        } catch (error) {
            console.error("Error al registrar entrenador:", error);
            throw new Error('No se pudo registrar al entrenador');
        }
    };
    
    
    registrarNutricionista = async (nutricionista) => {
        try {
            const usuarios = await this.model.obtenerUsuarios(); 
            const emailExistente = usuarios.find(u => u.email === nutricionista.email);
    
            if (emailExistente) {
                console.warn("❌ Email ya registrado:", nutricionista.email);
                throw new Error('Email ya registrado');
            }
    
            const salt = await bcrypt.genSalt(10);
            nutricionista.password = await bcrypt.hash(nutricionista.password, salt);
    
            nutricionista.rol = "nutricionista";
            nutricionista.pacientes = [];  // Lista vacía de pacientes
            nutricionista.creadoEn = new Date();
            nutricionista.activo = true;
    
            const nutricionistaGuardado = await this.model.registrarUsuario(nutricionista);
            console.log("✅ Nutricionista registrado exitosamente:", nutricionista.email);
            return nutricionistaGuardado;
    
        } catch (error) {
            console.error("Error al registrar nutricionista:", error);
            throw new Error('No se pudo registrar al nutricionista');
        }
    };
    

    registrarCliente = async (cliente) => {
        try {
            const usuarios = await this.model.obtenerUsuarios(); 
            const emailExistente = usuarios.find(u => u.email === cliente.email);
    
            if (emailExistente) {
                console.warn("❌ Email ya registrado:", cliente.email);
                throw new Error('Email ya registrado');
            }
    
            const salt = await bcrypt.genSalt(10);
            cliente.password = await bcrypt.hash(cliente.password, salt);
    
            cliente.rol = "cliente";
            cliente.objetivo = "";
            cliente.entrenadorId = null;
            cliente.nutricionistaId = null;
            cliente.creadoEn = new Date();
            cliente.activo = true;
    
            // Tarjeta nutricional base
            cliente.tarjetaNutricional = {
                calorias: 0,
                proteinas: 0,
                carbohidratos: 0,
                grasas: 0
            };
    
            // Estructura por días de la semana
            const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
            cliente.comidasAsignadas = {};
            cliente.comidasGuardadas = {};
    
            dias.forEach(dia => {
                cliente.comidasAsignadas[dia] = []; // Hasta 7 comidas, cada una con hasta 9 alimentos
                cliente.comidasGuardadas[dia] = [];
            });
    
            const clienteGuardado = await this.model.registrarUsuario(cliente);
            console.log("✅ Cliente registrado exitosamente:", cliente.email);
            return clienteGuardado;
    
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
