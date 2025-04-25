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

    rellenarTargetComidas = async (calorias, proteinas, carbohidratos, grasas, cantidad) => {
        const generarProporciones = (cantidad) => {
            const randoms = Array.from({ length: cantidad }, () => Math.random());
            const suma = randoms.reduce((a, b) => a + b, 0);
            return randoms.map(r => r / suma); // Normalizamos para que sumen 1
        };
    
        const proporcionesCalorias = generarProporciones(cantidad);
        const proporcionesProteinas = generarProporciones(cantidad);
        const proporcionesCarbohidratos = generarProporciones(cantidad);
        const proporcionesGrasas = generarProporciones(cantidad);
    
        const targetComidas = [];
    
        for (let i = 0; i < cantidad; i++) {
            targetComidas.push({
                calorias: Math.round(proporcionesCalorias[i] * calorias),
                proteinas: Math.round(proporcionesProteinas[i] * proteinas),
                carbohidratos: Math.round(proporcionesCarbohidratos[i] * carbohidratos),
                grasas: Math.round(proporcionesGrasas[i] * grasas)
            });
        }
    
        return targetComidas;
    };
    
// GET /api/alimentos/menu-diario
obtenerMenuDiario = async (req, res) => {
    try {
        const { calorias, proteinas, carbohidratos, grasas, comidas } = req.query;
        let  { targetComidas } = req.body;

        if (!calorias) {
            return res.status(400).json({ message: 'Debes especificar las calorías' });
        }

        
        const caloriasNum = parseFloat(calorias);
        const proteinasNum = proteinas ? parseFloat(proteinas) : null;
        const carbohidratosNum = carbohidratos ? parseFloat(carbohidratos) : null;
        const grasasNum = grasas ? parseFloat(grasas) : null;
        const cantidadComidas = comidas ? parseInt(comidas) : Math.floor(Math.random() * 3) + 3; // entre 3 y 5
        if(!targetComidas) {
            targetComidas = await this.rellenarTargetComidas(calorias,proteinas,carbohidratos,grasas,cantidadComidas)
        }

        console.log("El target de comidas es de " , targetComidas)

        const menu = await this.servicio.obtenerMenuDiario({
            calorias: caloriasNum,
            proteinas: proteinasNum,
            carbohidratos: carbohidratosNum,
            grasas: grasasNum,
            comidas: cantidadComidas,
            targetComidas : targetComidas
          
        });

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
