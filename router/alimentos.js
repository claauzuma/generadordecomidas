import express from 'express';
import ControladorAlimentos from '../controlador/alimentos.js';
import multer from 'multer';
// import cloudinary from 'cloudinary'; // solo si vas a usarlo más adelante

const upload = multer({ dest: 'uploads/' });

class RouterAlimentos {
  constructor(persistencia) {
    this.router = express.Router();
    this.controladorAlimentos = new ControladorAlimentos(persistencia);
  }

start() {
console.log("RouterAlimentos iniciado");


///Endpoint de prueba //
this.router.get('/prueba', (req, res) => this.controladorAlimentos.obtenerComidaPrueba(req, res));

this.router.get('/', (req, res) => this.controladorAlimentos.obtenerAlimentos(req, res));

this.router.get('/filtrar/comida', (req, res) => this.controladorAlimentos.obtenerComida(req, res));
this.router.get('/menu-diario', (req, res) => this.controladorAlimentos.obtenerMenuDiario(req, res));
this.router.get('/menu-semanal', (req, res) => this.controladorAlimentos.obtenerMenuSemanal(req, res));

    return this.router;
  }
}

export default RouterAlimentos;
