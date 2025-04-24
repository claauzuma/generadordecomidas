import express from 'express';
import ControladorUsuarios from '../controlador/usuarios.js';
import multer from 'multer';
import authMiddleware from '../middleware/authMiddleware.js'; // 🛡️ IMPORTANTE: agregalo

const upload = multer({ dest: 'uploads/' }); // subidas temporales

class RouterUsuarios {
  constructor(persistencia) {
    this.router = express.Router();
    this.controladorUsuarios = new ControladorUsuarios(persistencia);
  }

  start() {
    console.log("🔐 Router de usuarios activo");

    // ========== AUTENTICACIÓN ===========
    // Asegúrate de que logearUsuario esté correctamente definido en el controlador
    this.router.post('/login', this.controladorUsuarios.logearUsuario);

    this.router.post('/logout', (req, res) => {
      res.clearCookie('access_token')
        .json({ message: "Sesión cerrada exitosamente" });
    });

    // ========== REGISTRO SEGÚN ROL ==========
    // Asegúrate de que los métodos de registro estén definidos correctamente
    this.router.post('/registro/admin', this.controladorUsuarios.registrarAdmin);
    this.router.post('/registro/entrenador', this.controladorUsuarios.registrarEntrenador);
    this.router.post('/registro/nutricionista', this.controladorUsuarios.registrarNutricionista);
    this.router.post('/registro/cliente', this.controladorUsuarios.registrarCliente);

    // ========== PERFIL ==========
    // Asegúrate de que obtenerPerfil y actualizarPerfil estén correctamente definidos
    this.router.get('/perfil', authMiddleware, this.controladorUsuarios.obtenerPerfil);

    this.router.put(
      '/perfil',
      authMiddleware,
      upload.single('avatar'),
      this.controladorUsuarios.actualizarPerfil
    );


    // ========== ACTUALIZACIONES ==========
    this.router.put('/:id', this.controladorUsuarios.modificarUsuario);
    this.router.put('/email/:id', this.controladorUsuarios.modificarEmail);
    this.router.put('/contrasenia/:id', this.controladorUsuarios.modificarContraseña);

    // ========== ELIMINAR ==========
    this.router.delete('/:id', this.controladorUsuarios.borrarUsuario);

    return this.router;
  }
}

export default RouterUsuarios;
