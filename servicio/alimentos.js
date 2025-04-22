import ModelFactory from "../model/DAO/alimentosFactory.js";
import menu from '../menu.js';

class ServicioAlimentos {
    constructor(persistencia) {
        this.model = ModelFactory.get(persistencia);
    }


    obtenerAlimentos = async () => {
        try {
            const alimentosTotales = await this.model.obtenerAlimentos();
            return {
                status: 'success',
                data: alimentosTotales,
            };
        } catch (error) {
            console.error('Error al obtener alimentos:', error);
            throw new Error('No se pudieron obtener los alimentos');
        }
    };


    obtenerComida = async (calorias, proteinas, carbohidratos, grasas, alimentos) => {
        try {

            const alimentosTotales = await this.model.obtenerAlimentos();


            const resultado = menu.generarMenu(
                Number(calorias),
                Number(proteinas),
                Number(carbohidratos),
                Number(grasas),
                alimentos, 
                alimentosTotales 
            );

            return {
                status: 'success',
                data: resultado,
            };
        } catch (error) {
            console.error('Error al obtener comida:', error);
            throw new Error('No se pudo obtener la comida');
        }
    };

    // Obtener comida de prueba sin parámetros (para mostrar un menú predefinido)
    obtenerComidaPrueba = async () => {
        try {
            // Llamar a la función de menú para obtener comida de prueba
            const resultado = menu.generarMenu();
            return {
                status: 'success',
                data: resultado,
            };
        } catch (error) {
            console.error('Error al obtener comida de prueba:', error);
            throw new Error('No se pudieron obtener los alimentos de prueba');
        }
    };

    // Obtener el menú diario (puedes modificar esta lógica si tienes reglas para generar menús diarios)
    obtenerMenuDiario = async () => {
        try {
            // Llamada a alguna lógica o función que calcule el menú diario
            const resultado = menu.generarMenu(); // Aquí podrías pasar más parámetros si es necesario
            return {
                status: 'success',
                data: resultado,
            };
        } catch (error) {
            console.error('Error al obtener el menú diario:', error);
            throw new Error('No se pudo obtener el menú diario');
        }
    };

    // Obtener el menú semanal (de igual manera, podrías ajustar la lógica según tus necesidades)
    obtenerMenuSemanal = async () => {
        try {
            // Llamada a alguna lógica o función que calcule el menú semanal
            const resultado = menu.generarMenu(); // Aquí también puedes pasar más parámetros si es necesario
            return {
                status: 'success',
                data: resultado,
            };
        } catch (error) {
            console.error('Error al obtener el menú semanal:', error);
            throw new Error('No se pudo obtener el menú semanal');
        }
    };
}

export default ServicioAlimentos;
