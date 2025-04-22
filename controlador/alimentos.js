import ServiciosAlimentos from '../servicio/alimentos.js';

class ControladorAlimentos {
    constructor() {
        this.servicio = new ServiciosAlimentos();
    }

    // GET /api/alimentos/
    obtenerAlimentos = async (req, res) => {
        try {
            const alimentos = await this.servicio.obtenerAlimentos();
            res.json(alimentos);
        } catch (error) {
            console.error('Error al obtener alimentos:', error);
            res.status(500).json({ message: 'Error al obtener los alimentos' });
        }
    };

    // GET /api/alimentos/filtrar/comida?calorias=...&proteinas=...&...
    obtenerComida = async (req, res) => {
        try {
            const { calorias, proteinas, carbohidratos, grasas, ...rest } = req.query;

            // Alimentos individuales del query
            const alimentos = Object.values(rest).filter(Boolean);

            let comida;

            if (calorias && proteinas && !carbohidratos && !grasas) {
                comida = await this.servicio.obtenerComidaSoloConCaloriasYProteinas(
                    Number(calorias),
                    Number(proteinas),
                    alimentos
                );
            } else {
                comida = await this.servicio.obtenerComida(
                    Number(calorias),
                    Number(proteinas),
                    Number(carbohidratos),
                    Number(grasas),
                    alimentos
                );
            }

            res.json(comida);
        } catch (error) {
            console.error('Error al obtener comida:', error);
            res.status(500).json({ message: 'Error al obtener la comida' });
        }
    };

    // GET /api/alimentos/prueba
    obtenerComidaPrueba = async (req, res) => {
        try {
            const comida = await this.servicio.obtenerComidaPrueba();
            res.json(comida?.data ?? comida); // Soporta si viene con .data o no
        } catch (error) {
            console.error('Error al obtener comida de prueba:', error);
            res.status(500).json({ message: 'Error al obtener la comida de prueba' });
        }
    };

    // GET /api/alimentos/menu-diario
    obtenerMenuDiario = async (req, res) => {
        try {
            const menu = await this.servicio.obtenerMenuDiario();
            res.json(menu);
        } catch (error) {
            console.error('Error al obtener el menú diario:', error);
            res.status(500).json({ message: 'Error al obtener el menú diario' });
        }
    };

    // GET /api/alimentos/menu-semanal
    obtenerMenuSemanal = async (req, res) => {
        try {
            const menu = await this.servicio.obtenerMenuSemanal();
            res.json(menu);
        } catch (error) {
            console.error('Error al obtener el menú semanal:', error);
            res.status(500).json({ message: 'Error al obtener el menú semanal' });
        }
    };
}

export default ControladorAlimentos;
