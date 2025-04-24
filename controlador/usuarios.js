import Servicio from '../servicio/usuarios.js';
import jwt from 'jsonwebtoken'; // Para manejar el JWT
import cloudinary from 'cloudinary'; // Importa Cloudinary para la carga de imágenes

class ControladorUsuarios {
    constructor(persistencia) {
        this.servicio = new Servicio(persistencia);
    }

    // ========== AUTENTICACIÓN ==========

    logearUsuario = async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log("Nos logeamos " + email)
    
            // Validación básica de parámetros
            if (!email || !password) {
                return res.status(400).json({ message: 'Email y contraseña son requeridos' });
            }

            // Llamar al servicio para verificar las credenciales
            const token = await this.servicio.logearUsuario(email, password);
    
            if (token) {
                // Si el token es generado, guardarlo en una cookie
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production', // Solo si estás en producción
                    sameSite: 'strict',
                    maxAge: 60 * 60 * 1000 // 1 hora
                });
                return res.json({ token });
            } else {
                return res.status(401).json({ message: 'Credenciales incorrectas' });
            }
        } catch (error) {
            console.error("Error al logear al usuario:", error);
            return res.status(500).json({ message: 'Error en el servidor' });
        }
    };

    logOut = (req, res) => {
        try {
            // Eliminar la cookie que contiene el token
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/'
            });
            return res.status(200).json({ message: 'Logout exitoso', token: null });
        } catch (error) {
            console.error("Error al hacer logout:", error);
            return res.status(500).json({ message: 'Error al hacer logout' });
        }
    };

    // ========== REGISTRO SEGÚN ROL ==========

    // Registro de admins
    registrarAdmin = async (req, res) => {
        try {
            const admin = req.body;
            const adminAgregado = await this.servicio.registrarAdmin(admin);
            res.json(adminAgregado);
        } catch (error) {
            console.error("Error al registrar admin:", error);
            res.status(500).json({ message: 'Error al registrar admin' });
        }
    };

    // Registro de entrenadores
    registrarEntrenador = async (req, res) => {
        try {
            const entrenador = req.body;
            const entrenadorAgregado = await this.servicio.registrarEntrenador(entrenador);
            res.json(entrenadorAgregado);
        } catch (error) {
            console.error("Error al registrar entrenador:", error);
            res.status(500).json({ message: 'Error al registrar entrenador' });
        }
    };

    // Registro de nutricionistas
    registrarNutricionista = async (req, res) => {
        try {
            const nutricionista = req.body;
            const nutricionistaAgregado = await this.servicio.registrarNutricionista(nutricionista);
            res.json(nutricionistaAgregado);
        } catch (error) {
            console.error("Error al registrar nutricionista:", error);
            res.status(500).json({ message: 'Error al registrar nutricionista' });
        }
    };

    // Registro de clientes
    registrarCliente = async (req, res) => {
        try {
            const cliente = req.body;
            const clienteAgregado = await this.servicio.registrarCliente(cliente);
            res.json(clienteAgregado);
        } catch (error) {
            console.error("Error al registrar cliente:", error);
            res.status(500).json({ message: 'Error al registrar cliente' });
        }
    };

    // ========== PERFIL ==========

    obtenerPerfil = async (req, res) => {
        try {
            const { userId } = req.user;  // Suponiendo que el JWT ya ha sido validado en el middleware authMiddleware
            const perfil = await this.servicio.obtenerPerfil(userId);
            res.json(perfil);
        } catch (error) {
            console.error("Error al obtener perfil:", error);
            res.status(500).json({ message: 'Error al obtener perfil' });
        }
    };

    actualizarPerfil = async (req, res) => {
        try {
            const { userId } = req.user;
            const { avatar } = req.file;  // Asumiendo que usas multer para subir imágenes

            // Si se sube una nueva imagen, sube a Cloudinary
            if (avatar) {
                const result = await cloudinary.v2.uploader.upload(avatar.path);
                await this.servicio.actualizarPerfil(userId, { avatarUrl: result.secure_url });
                return res.json({ message: 'Perfil actualizado con éxito', avatarUrl: result.secure_url });
            } else {
                return res.status(400).json({ message: 'No se recibió imagen' });
            }
        } catch (error) {
            console.error("Error al actualizar perfil:", error);
            if (error instanceof cloudinary.CloudinaryError) {
                return res.status(500).json({ message: 'Error al subir la imagen a Cloudinary', error: error.message });
            }
            res.status(500).json({ message: 'Error al actualizar perfil' });
        }
    };

    // ========== USUARIOS (por rol) ==========

    obtenerUsuariosPorRol = async (req, res) => {
        try {
            const rol = req.params.rol;
            // Validación del rol
            const rolesPermitidos = ['admin', 'entrenador', 'nutricionista', 'cliente'];
            if (!rolesPermitidos.includes(rol)) {
                return res.status(400).json({ message: 'Rol no válido' });
            }
            const usuarios = await this.servicio.obtenerUsuariosPorRol(rol);
            res.json(usuarios);
        } catch (error) {
            console.error("Error al obtener usuarios por rol:", error);
            res.status(500).json({ message: 'Error al obtener usuarios por rol' });
        }
    };

    // ========== ACTUALIZACIONES ==========

    modificarUsuario = async (req, res) => {
        try {
            const { id } = req.params;
            const usuarioModificado = await this.servicio.modificarUsuario(id, req.body);
            res.json(usuarioModificado);
        } catch (error) {
            console.error("Error al modificar usuario:", error);
            res.status(500).json({ message: 'Error al modificar usuario' });
        }
    };

    modificarEmail = async (req, res) => {
        try {
            const { id } = req.params;
            const emailModificado = await this.servicio.modificarEmail(id, req.body.email);
            res.json(emailModificado);
        } catch (error) {
            console.error("Error al modificar email:", error);
            res.status(500).json({ message: 'Error al modificar email' });
        }
    };

    modificarContraseña = async (req, res) => {
        try {
            const { id } = req.params;
            const contrasenaModificada = await this.servicio.modificarContraseña(id, req.body.password);
            res.json(contrasenaModificada);
        } catch (error) {
            console.error("Error al modificar contraseña:", error);
            res.status(500).json({ message: 'Error al modificar contraseña' });
        }
    };

    // ========== ELIMINAR ==========

    borrarUsuario = async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await this.servicio.borrarUsuario(id);
            res.json(resultado);
        } catch (error) {
            console.error("Error al borrar usuario:", error);
            res.status(500).json({ message: 'Error al borrar usuario' });
        }
    };
}

export default ControladorUsuarios;
