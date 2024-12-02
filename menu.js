const alimentos = [
    { nombre: "Almendras", proteina: 0.212, carbohidratos: 0.216, grasas: 0.499, calorias: 6.20 },
    { nombre: "Nueces", proteina: 0.152, carbohidratos: 0.137, grasas: 0.652, calorias: 7.02 },
    { nombre: "Aceite de Oliva", proteina: 0, carbohidratos: 0, grasas: 1, calorias: 9 },
    { nombre: "Pechuga de pollo", proteina: 0.31, carbohidratos: 0, grasas: 0.036, calorias: 1.56 },
    { nombre: "Churrasco Magro", proteina: 0.27, carbohidratos: 0, grasas: 0.15, calorias: 2.43 },
    { nombre: "Banana", proteina: 0.013, carbohidratos: 0.228, grasas: 0.003, calorias: 0.99 },
    { nombre: "Manzana", proteina: 0.005, carbohidratos: 0.25, grasas: 0.003, calorias: 1.05 },
    { nombre: "Pan Blanco", proteina: 0.075, carbohidratos: 0.49, grasas: 0.012, calorias: 2.37 },
    { nombre: "Tomate", proteina: 0.009, carbohidratos: 0.039, grasas: 0.002, calorias: 0.21 },
    { nombre: "Palta", proteina: 0.02, carbohidratos: 0.085, grasas: 0.15, calorias: 1.77 },
    { nombre: "Pera", proteina: 0.004, carbohidratos: 0.25, grasas: 0.001, calorias: 1.03 },
    { nombre: "Arroz", proteina: 0.027, carbohidratos: 0.282, grasas: 0.003, calorias: 1.26 },
    { nombre: "Papas", proteina: 0.02, carbohidratos: 0.175, grasas: 0.001, calorias: 0.79 },
    { nombre: "Whey Protein", proteina: 0.8, carbohidratos: 0.04, grasas: 0.06, calorias: 3.90 },
    { nombre: "Jamon Cocido", proteina: 0.18, carbohidratos: 0.01, grasas: 0.05, calorias: 1.21 },
    { nombre: "Higado", proteina: 0.26, carbohidratos: 0.039, grasas: 0.045, calorias: 1.60 },
    { nombre: "Queso Cremoso", proteina: 0.125, carbohidratos: 0.044, grasas: 0.32, calorias: 3.56 },
    { nombre: "Pechuga de Pavo", proteina: 0.29, carbohidratos: 0, grasas: 0.01, calorias: 1.25 },
    { nombre: "Leche Descremada", proteina: 0.034, carbohidratos: 0.05, grasas: 0.001, calorias: 0.35 },
    { nombre: "Leche Entera", proteina: 0.032, carbohidratos: 0.048, grasas: 0.032, calorias: 0.61 },
    { nombre: "Pasas de Uva", proteina: 0.031, carbohidratos: 0.79, grasas: 0.005, calorias: 3.33 },
    { nombre: "Fideos", proteina: 0.12, carbohidratos: 0.72, grasas: 0.015, calorias: 3.50 },
    { nombre: "Sandía", proteina: 0.006, carbohidratos: 0.08, grasas: 0.002, calorias: 0.36 },
    { nombre: "Higo", proteina: 0.008, carbohidratos: 0.19, grasas: 0.003, calorias: 0.82 },
    { nombre: "Dulce de Leche", proteina: 0.05, carbohidratos: 0.55, grasas: 0.08, calorias: 3.12 },
    { nombre: "Galletitas", proteina: 0.07, carbohidratos: 0.65, grasas: 0.2, calorias: 4.68 },
    { nombre: "Mermelada", proteina: 0.004, carbohidratos: 0.6, grasas: 0.001, calorias: 2.43 }
];

let listaCombinacionesComidas = [];




const combinacionesValidasDeComidas = [
    {
      nombre: "Churrasco Magro",
      fuentesProtes: ["Pechuga de Pollo", "Pechuga de Pavo", "Higado", "Jamon Cocido"],
      fuentesCh:[
         ["Arroz", "Tomate", "Fideos", "Pan Blanco", "Papas"],
         ["Banana", "Pera", "Higo", "Sandía", "Papas", 'Manzana' , 'Tomate']
    ]
       
       ,
      fuentesGrasas: ["Aceite de Oliva", "Palta", "Almendras", "Nueces", "Queso Cremoso"]
    },

    {
        nombre: "Higado",
        fuentesProtes: ["Pechuga de Pollo", "Pechuga de Pavo", "Jamon Cocido"],
        fuentesCh:[
            ["Arroz", "Tomate", "Fideos", "Pan Blanco", "Papas"],
            ["Banana", "Pera", "Higo", "Sandía", "Papas", 'Manzana' , 'Tomate']
       ],
        fuentesGrasas: ["Aceite de Oliva", "Palta", "Almendras", "Nueces", "Queso Cremoso"]
      },

      {
        nombre: "Jamon Cocido",
        fuentesProtes: ["Pechuga de Pollo", "Pechuga de Pavo", "Higado"],
        fuentesCh:[
            ["Arroz", "Tomate", "Fideos", "Pan Blanco", "Papas"],
            ["Banana", "Pera", "Higo", "Sandía", "Papas", 'Manzana' , 'Tomate']
       ],
        fuentesGrasas: ["Aceite de Oliva", "Palta", "Almendras", "Nueces", "Queso Cremoso"]
      },

      {
        nombre: "Pechuga de Pavo",
        fuentesProtes: ["Pechuga de Pollo", "Higado", "Jamon Cocido"],
        fuentesCh:[
            ["Arroz", "Tomate", "Fideos", "Pan Blanco", "Papas"],
            ["Banana", "Pera", "Higo", "Sandía", "Papas", 'Manzana' , 'Tomate']
       ],
        fuentesGrasas: ["Aceite de Oliva", "Palta", "Almendras", "Nueces", "Queso Cremoso"]
      },

      {
        nombre: "Whey Protein",
        fuentesProtes: ["Pechuga de Pollo", "Pechuga de Pavo", "Higado", "Jamon Cocido"],
        fuentesCh:[
            ["Arroz", "Tomate", "Fideos", "Pan Blanco", "Papas"],
            ["Banana", "Pera", "Higo", "Sandía", "Papas", 'Manzana' , 'Tomate']
       ],
        fuentesGrasas: ["Aceite de Oliva", "Palta", "Almendras", "Nueces", "Queso Cremoso"]
      },
    {
      nombre: "Pechuga de pollo",
      fuentesProtes: ["Pechuga de Pavo", "Higado", "Jamon Cocido", "Whey Protein"],
      fuentesCh:[
        ["Arroz", "Tomate", "Fideos", "Pan Blanco", "Papas"],
        ["Banana", "Pera", "Higo", "Sandía", "Papas", 'Manzana' , 'Tomate']
   ],
      fuentesGrasas: ["Palta", "Aceite de Oliva", "Almendras", "Nueces"]
    },
    {
      nombre: "Banana",
      fuentesProtes: ["Whey Protein", "Leche Descremada", "Queso Cremoso"],
      fuentesCh:[
        ["Arroz", "Tomate", "Fideos", "Pan Blanco", "Papas"],
        ["Banana", "Pera", "Higo", "Sandía", "Papas", 'Manzana' , 'Tomate']
   ],
      fuentesGrasas: ["Almendras", "Palta", "Nueces"]
    },
    {
      nombre: "Pan Blanco",
      fuentesProtes: ["Pechuga de Pollo", "Pechuga de Pavo", "Jamon Cocido"],
      fuentesCh: ["Banana", "Manzana", "Mermelada"],
      fuentesGrasas: ["Palta", "Queso Cremoso", "Aceite de Oliva"]
    },
    {
      nombre: "Queso Cremoso",
      fuentesProtes: ["Pechuga de Pollo", "Higado", "Whey Protein"],
      fuentesCh: ["Tomate", "Papas", "Pan Blanco"],
      fuentesGrasas: ["Nueces", "Almendras", "Palta"]
    },
    { 

      nombre: "Fideos",
      fuentesProtes: ["Pechuga de Pollo", "Pechuga de Pavo", "Higado"],
      fuentesCh: ["Banana", "Tomate", "Pan Blanco"],
      fuentesGrasas: ["Queso Cremoso", "Aceite de Oliva", "Palta"]
    }
  ];

  let alimentosProteicosSeleccionados = []
  let alimentosChSeleccionados = [] 
  let alimentosGrasasSeleccionados = [] 

  let combinacion = [];
  let proteinaTotal = 0;
  let carbohidratosTotal = 0;
  let grasasTotal = 0;
  let caloriasTotal = 0;


// Objetivo nutricional
const objetivo = {
    proteina: 40,
    carbohidratos: 80,
    grasas: 25,
    calorias: ""
  };
  function calcularCalorias(obj) {
    obj.calorias = obj.proteina * 4 + obj.carbohidratos * 4 + obj.grasas * 9;
  }
  calcularCalorias(objetivo);



function combinacionDameProteRandom(alimento) {
    const comida = combinacionesValidasDeComidas.find(comida => comida.nombre === alimento);
  
    if (!comida) {
      return `Alimento "${alimento}" no encontrado.`;
    }

    const fuentesProtes = comida.fuentesProtes;
    const proteinaRandom = fuentesProtes[Math.floor(Math.random() * fuentesProtes.length)];
  
  
    return proteinaRandom;
  }
  

  function combinacionDameCarbosPrincipalRandom(alimento) {
    const comida = combinacionesValidasDeComidas.find(comida => comida.nombre === alimento);
  
    if (!comida) {
      return `Alimento "${alimento}" no encontrado.`;
    }

    const fuentesCh = comida.fuentesCh[0];
    const carbosRandom = fuentesCh[Math.floor(Math.random() * fuentesCh.length)];

    carboADevolver = alimentos.find(alimen => 
        alimen.nombre.toLowerCase() === carbosRandom.toLowerCase()
      );
  
  
    return carboADevolver;
  }

  function combinacionDameCarbosSecundarioRandom(alimento) {
    const comida = combinacionesValidasDeComidas.find(comida => comida.nombre === alimento);
  
    if (!comida) {
      return `Alimento "${alimento}" no encontrado.`;
    }



    const fuentesCh = comida.fuentesCh[1];
    const carbosRandom = fuentesCh[Math.floor(Math.random() * fuentesCh.length)];

    carboADevolver = alimentos.find(alimen => 
        alimen.nombre.toLowerCase() === carbosRandom.toLowerCase()
      );
  
  
    return carboADevolver;
  
  }

let intentos = 0;


///Aca recibe un booleando, soloAlimentosPasados, el cual nos dice si usamos unicamente los alimentos que le pasamos en las listas.

function seleccionarComidaProteCarboGrasas(objetivo, soloAlimentosPasados, alimentosProteACuadrar, alimentosChACuadrar, alimentosGrACuadrar) {
if (intentos < 10) {
    console.log("SE EJECUTA LA PRIMERA FUNCION DE TODAS")

    combinacion = [];
    proteinaTotal = 0;
    carbohidratosTotal = 0;
    grasasTotal = 0;
    caloriasTotal = 0;
    alimentosProteicosSeleccionados = []
    alimentosChSeleccionados = [] 
    alimentosGrasasSeleccionados = [] 


    let alimentosProteicos = alimentos.filter(a => a.proteina > a.grasas && a.proteina > a.carbohidratos);

    // Seleccionar alimentos proteicos

    
    let cantidadAlimentosProteicos;

    let procesarAlimentosProteicos = true;

    while(procesarAlimentosProteicos) {
        console.log("???????????????????????????????????ARRANCAMOS PORCESANDOOOOO , LAS GRASAS SON " + grasasTotal)
        console.log("Filtramos los alimentos proteicos")

        if (alimentosProteACuadrar.length > 0 ) {
        cantidadAlimentosProteicos = alimentosProteACuadrar.length
        console.log("Tenemos la cantidad de " + cantidadAlimentosProteicos)
        }

        else if (objetivo.proteina < 30) {

            cantidadAlimentosProteicos = 1;
        } else {
      
            cantidadAlimentosProteicos = Math.floor(Math.random() * 2) + 1;  
            console.log("DIooo " , cantidadAlimentosProteicos)
        }
    
        if (cantidadAlimentosProteicos == 2) {
            // Si seleccionamos dos alimentos, dividimos la proteína total aleatoriamente entre ellos
            console.log("Hasta aca va bien eh")
            // Lógica para seleccionar dos alimentos proteicos aleatoriamente, asegurándonos de que sean diferentes
            let alimento1, alimento2;
            let porcentajeAlimento1 = Math.random(); // Genera un número aleatorio entre 0 y 1
            let porcentajeAlimento2 = 1 - porcentajeAlimento1; // El complemento de porcentajeAlimento1 para que sumen 1
        
            do {

                ///SI HAY SOLO UN ALIMENTO PROTEICO QUE LE MANDAMOS DEL FRONTT
                if(alimentosProteACuadrar.length == 1) {
                 console.log("Esta perfeecto , le pasamos solo un alimento proteico-------------------------------------------------")   
                alimento1 = alimentosProteicos.find(alim => alim.nombre === alimentosProteACuadrar[0].nombre); 
                alimento2 = combinacionDameProteRandom(alimento1.nombre)      
                }  

                //SI HAY DOS ALIMENTOS PROTEICOS QUE LE MANDAMOS DEL FRONT
                else if(alimentosProteACuadrar.length == 2) {
                console.log("Entra bien por aca")
                alimento1 = alimentosProteicos.find(alim => alim.nombre === alimentosProteACuadrar[0].nombre);    
                alimento2 = alimentosProteicos.find(alim => alim.nombre === alimentosProteACuadrar[1].nombre);      

                let primerAlimento = alimentosProteACuadrar[0];
                let segundoAlimento = alimentosProteACuadrar[1];
                let proteinasRestantes = (objetivo.proteina - proteinaTotal);

                
                if(primerAlimento.cantidad > 0) {
                    console.log("Objetivo proteina " + objetivo.proteina)
                    console.log("Proteina total" + proteinaTotal)
                 let alimento1proteinas = primerAlimento.cantidad * alimento1.proteina;
                 console.log("Las proteinas del primer alimento son " , alimento1proteinas)
                 let porcentajeRepresentado = (alimento1proteinas / proteinasRestantes) 
                 console.log("El porcentaje representado es de " , porcentajeRepresentado)

                 if(alimento1proteinas > proteinasRestantes) {
                 throw new Error("Volve a ingresar otra cantidad, hubo un error");
                 
                 }
       
             
                 let proporcionRepresentada = porcentajeRepresentado; // 0.38
                 let proporcionSegundoCarbo = 1 - proporcionRepresentada; // 0.62
                 console.log(`Porcentaje de calorías representadas por el primer alimento: ${proporcionRepresentada}`);
                 console.log(`Porcentaje de calorías restantes para el segundo alimento: ${proporcionSegundoCarbo}`);

                 if (Math.abs(proporcionRepresentada + proporcionSegundoCarbo - 1) > 0.0001) {
                     throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
                 }
             
                 primerAlimento.cantidad = proporcionRepresentada;
                 segundoAlimento.cantidad = proporcionSegundoCarbo;
                
                  porcentajeAlimento1 = primerAlimento.cantidad 
                  porcentajeAlimento2 = segundoAlimento.cantidad 

                 console.log("Porcentaje alimento 1 " + porcentajeAlimento1)
                 console.log("Porcentaje alimento 2 " + porcentajeAlimento2)
                }

                else if(segundoAlimento.cantidad > 0) {
                    let alimento2proteinas = segundoAlimento.cantidad * alimento2.proteina;
                    let porcentajeRepresentado = (alimento2proteinas / proteinasRestantes) 
                    
                 if(alimento2proteinas > proteinasRestantes) {
                    throw new Error("Volve a ingresar otra cantidad, hubo un error");
                    
                    }
 
                                 
                 let proporcionSegundaProte = porcentajeRepresentado; // 0.38
                 let proporcionPrimerProte = 1 - proporcionSegundaProte; // 0.62

                 if (Math.abs(proporcionSegundaProte + proporcionPrimerProte - 1) > 0.0001) {
                    throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
                }

                 porcentajeAlimento1 = proporcionPrimerProte
                 porcentajeAlimento2 = proporcionSegundaProte


                }

                }
                else if (alimentosProteACuadrar.length == 0) {
                 alimento1 = alimentosProteicos[Math.floor(Math.random() * alimentosProteicos.length)];
                 console.log("El alimento 1 es " , alimento1)
                 alimento2 = combinacionDameProteRandom(alimento1.nombre)
                 console.log("El nombre del alimento 2 es " , alimento2)
                 alimento2 = alimentos.find(alimen => 
                 alimen.nombre.toLowerCase() === alimento2.toLowerCase()
  
                 );
                  porcentajeAlimento1 = 0.5 + Math.random() * 0.5;
                  porcentajeAlimento2 = 1 - porcentajeAlimento1; 
                      
                 console.log("El objeto alimento 2 es " , alimento2)

                }
              

            } while (alimento1 === alimento2); // Asegura que los dos alimentos sean diferentes2

        console.log("Ahora hacemos los calculos con el porcentaje alimento" , porcentajeAlimento1)

            // Asignar proteína según los porcentajes aleatorios
            console.log("EL PORCENTAJE DEL PRIMER ALIMENTO ES DE " + porcentajeAlimento1)
            const proteinaAlimento1 = objetivo.proteina * porcentajeAlimento1;
            const proteinaAlimento2 = objetivo.proteina * porcentajeAlimento2;
        
            const cantidadNecesaria1 = (proteinaAlimento1 / alimento1.proteina );
            const cantidadNecesaria2 = (proteinaAlimento2 / alimento2.proteina );
        
            // Agregar los alimentos con la cantidad ajustada
            proteinaTotal += proteinaAlimento1 + proteinaAlimento2;
            carbohidratosTotal +=(alimento1.carbohidratos * cantidadNecesaria1+ alimento2.carbohidratos * cantidadNecesaria2) 
            grasasTotal += (alimento1.grasas * cantidadNecesaria1) + (alimento2.grasas * cantidadNecesaria2);
            caloriasTotal += (alimento1.calorias * cantidadNecesaria1) + (alimento2.calorias * cantidadNecesaria2);
            

            if(carbohidratosTotal <= objetivo.carbohidratos && grasasTotal <= objetivo.grasas) {
          
            procesarAlimentosProteicos = false;
            combinacion.push({ nombre: alimento1.nombre, cantidad: cantidadNecesaria1, proteina : alimento1.proteina * cantidadNecesaria1 , carbohidratos : alimento1.carbohidratos * cantidadNecesaria1, grasas : alimento1.grasas * cantidadNecesaria1 , calorias: alimento1.calorias * cantidadNecesaria1  });
            combinacion.push({ nombre: alimento2.nombre, cantidad: cantidadNecesaria2, proteina : alimento2.proteina * cantidadNecesaria2 , carbohidratos : alimento2.carbohidratos * cantidadNecesaria2, grasas : alimento2.grasas * cantidadNecesaria2 , calorias: alimento2.calorias * cantidadNecesaria2  });
            console.log("IMPRIMIMOS LA COMBINACION DE ALIMENTOS PROTEICOSSSSSSSSS : " , combinacion)
            
            console.log("LOS ALIMENTOS PROTEICOS ELEGIDOS SONNNNNN:")

            alimentosProteicosSeleccionados.push({ 
                nombre: alimento1.nombre, 
                cantidad: cantidadNecesaria1, 
                proteina: alimento1.proteina * cantidadNecesaria1, 
                carbohidratos: alimento1.carbohidratos * cantidadNecesaria1, 
                grasas: alimento1.grasas * cantidadNecesaria1, 
                calorias: alimento1.calorias * cantidadNecesaria1 ,
                unidadCalorica: alimento1.calorias,
                unidadProteica: alimento1.proteina,
                unidadCarbo : alimento1.carbohidratos,
                unidadGrasas: alimento1.grasas
                
              });
              
              alimentosProteicosSeleccionados.push({ 
                nombre: alimento2.nombre, 
                cantidad: cantidadNecesaria2, 
                proteina: alimento2.proteina * cantidadNecesaria2, 
                carbohidratos: alimento2.carbohidratos * cantidadNecesaria2, 
                grasas: alimento2.grasas * cantidadNecesaria2, 
                calorias: alimento2.calorias * cantidadNecesaria2 ,
                unidadCalorica: alimento2.calorias,
                unidadProteica: alimento2.proteina,
                unidadCarbo : alimento2.carbohidratos,
                unidadGrasas: alimento2.grasas
              });
              
            console.log(alimentosProteicosSeleccionados)
            }
            else {
                console.log("Vamos a intentar nuevamente")
                intentos++;
                procesarAlimentosProteicos = true;
                proteinaTotal = 0;
                carbohidratosTotal = 0;
                grasasTotal = 0;
                caloriasTotal = 0;
                combinacion = [];
                if(intentos > 10) {
                    throw new Error("No se pudo encontrar una combinación con el alimento seleccionado " ,alimento1);
                }

            }

       
        } else if( cantidadAlimentosProteicos == 3) {
         console.log("Hasta aca va bien eh")
         let alimento1, alimento2, alimento3;
         let porcentajeAlimento1 = Math.random(); // Genera un número entre 0 y 1
         let porcentajeAlimento2 = Math.random() * (1 - porcentajeAlimento1); // Entre 0 y (1 - porcentajeAlimento1)
         let porcentajeAlimento3 = 1 - (porcentajeAlimento1 + porcentajeAlimento2); // Resta para completar 1
     
         do {
             if(alimentosProteACuadrar.length == 1) {
              console.log("Esta perfeecto , le pasamos solo un alimento proteico-------------------------------------------------")   
             alimento1 = alimentosProteicos.find(alim => alim.nombre === alimentosProteACuadrar[0].nombre); 
             alimento2 = combinacionDameProteRandom(alimento1.nombre)      
             }  
             else if(alimentosProteACuadrar.length ==2) {
              /// nada por ahora
             } 
             else if(alimentosProteACuadrar.length == 3) {

             console.log("Entra bien por aca")
             alimento1 = alimentosProteicos.find(alim => alim.nombre === alimentosProteACuadrar[0].nombre);    
             alimento2 = alimentosProteicos.find(alim => alim.nombre === alimentosProteACuadrar[1].nombre);      
             alimento3 = alimentosProteicos.find(alim => alim.nombre === alimentosProteACuadrar[2].nombre);      

             let primerAlimento = alimentosProteACuadrar[0];
             let segundoAlimento = alimentosProteACuadrar[1];
             let tercerAlimento = alimentosProteACuadrar[2];
             let proteinasRestantes = (objetivo.proteina - proteinaTotal);

             ////Si el primer alimento a cuadrar tiene cantidad > 0              
             if(primerAlimento.cantidad > 0 && segundoAlimento.cantidad == 0 && tercerAlimento.cantidad == 0) {
                 console.log("Objetivo proteina " + objetivo.proteina)
                 console.log("Proteina total" + proteinaTotal)
              let alimento1proteinas = primerAlimento.cantidad * alimento1.proteina;
              console.log("Las proteinas del primer alimento son " , alimento1proteinas)
              let porcentajeRepresentado = (alimento1proteinas / proteinasRestantes) 
              console.log("El porcentaje representado es de " , porcentajeRepresentado)

              if(alimento1proteinas > proteinasRestantes) {
              throw new Error("Volve a ingresar otra cantidad, hubo un error");
              
              }
    
              let proporcionRepresentada = porcentajeRepresentado; // 0.38
              let proporcionSegundoCarbo = Math.random() * (1 - proporcionRepresentada);  // Genera un valor entre 0 y (1 - proporcionRepresentada)
              let proporcionTercerCarbo = 1 - (proporcionRepresentada + proporcionSegundoCarbo);  // Completa la suma a 1

              console.log(`Porcentaje de calorías representadas por el primer alimento: ${proporcionRepresentada}`);
              console.log(`Porcentaje de calorías restantes para el segundo alimento: ${proporcionSegundoCarbo}`);
              console.log("Proporción Tercer Carbo:", proporcionTercerCarbo.toFixed(3));

              if (Math.abs(proporcionRepresentada + proporcionSegundoCarbo + proporcionTercerCarbo - 1) > 0.0001) {
                  throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
              }
          
              primerAlimento.cantidad = proporcionRepresentada;
              segundoAlimento.cantidad = proporcionSegundoCarbo;
              tercerAlimento.cantidad = proporcionTercerCarbo
             
               porcentajeAlimento1 = primerAlimento.cantidad 
               porcentajeAlimento2 = segundoAlimento.cantidad 
               porcentajeAlimento3 = tercerAlimento.cantidad;

              console.log("Porcentaje alimento 1 " + porcentajeAlimento1)
              console.log("Porcentaje alimento 2 " + porcentajeAlimento2)
              console.log("Porcentaje alimento 3 " + porcentajeAlimento3)
             }

             else if (primerAlimento.cantidad == 0 && segundoAlimento.cantidad > 0 && tercerAlimento.cantidad == 0) {
              console.log("Objetivo proteína: " + objetivo.proteina);
              console.log("Proteína total: " + proteinaTotal);
          
              let alimento2proteinas = segundoAlimento.cantidad * alimento2.proteina;
              console.log("Las proteínas del segundo alimento son: ", alimento2proteinas);
          
              let porcentajeRepresentado = alimento2proteinas / proteinasRestantes;
              console.log("El porcentaje representado es de: ", porcentajeRepresentado);
          
              // Validación: la proteína del segundo alimento no debe exceder la restante
              if (alimento2proteinas > proteinasRestantes) {
                  throw new Error("Vuelve a ingresar otra cantidad, hubo un error.");
              }
          
              let proporcionSegundaProte = porcentajeRepresentado; // Porcentaje del segundo alimento
              let proporcionPrimerProte = Math.random() * (1 - proporcionSegundaProte); // Calcula una parte aleatoria del resto
              let proporcionTercerProte = 1 - (proporcionSegundaProte + proporcionPrimerProte); // Completa la suma a 1
          
              console.log(`Porcentaje de proteínas representadas por el segundo alimento: ${proporcionSegundaProte}`);
              console.log(`Porcentaje restante para el primer alimento: ${proporcionPrimerProte}`);
              console.log(`Proporción para el tercer alimento: ${proporcionTercerProte.toFixed(3)}`);
          
              // Verificación final de la suma de proporciones
              if (Math.abs(proporcionSegundaProte + proporcionPrimerProte + proporcionTercerProte - 1) > 0.0001) {
                  throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
              }
          
              // Asignar proporciones a los alimentos
              primerAlimento.cantidad = proporcionPrimerProte;
              segundoAlimento.cantidad = proporcionSegundaProte;
              tercerAlimento.cantidad = proporcionTercerProte;
          
              porcentajeAlimento1 = primerAlimento.cantidad;
              porcentajeAlimento2 = segundoAlimento.cantidad;
              porcentajeAlimento3 = tercerAlimento.cantidad;
          
              console.log("Porcentaje alimento 1: " + porcentajeAlimento1);
              console.log("Porcentaje alimento 2: " + porcentajeAlimento2);
              console.log("Porcentaje alimento 3: " + porcentajeAlimento3);
          }
          

          else if (primerAlimento.cantidad == 0 && segundoAlimento.cantidad == 0 && tercerAlimento.cantidad > 0) {
            // Calcular las proteínas del tercer alimento
            let alimento3proteinas = tercerAlimento.cantidad * alimento3.proteina;
            
            // Calcular el porcentaje representado por el tercer alimento
            let porcentajeRepresentado = (alimento3proteinas / proteinasRestantes);
        
            // Verificar que la cantidad no exceda las proteínas restantes
            if (alimento3proteinas > proteinasRestantes) {
                throw new Error("Vuelve a ingresar otra cantidad, hubo un error");
            }
        
            // Calcular las proporciones para el tercer alimento y los demás
            let proporcionTercerProte = porcentajeRepresentado; // Esto será el porcentaje del tercer alimento
            let proporcionPrimerProte = Math.random(); // Generar un valor aleatorio para el primer alimento
            let proporcionSegundoProte = 1 - proporcionTercerProte - proporcionPrimerProte; // El resto lo toma el segundo alimento
        
            // Verificar si la suma de las proporciones es igual a 1
            if (Math.abs(proporcionTercerProte + proporcionSegundoProte + proporcionPrimerProte - 1) > 0.0001) {
                throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
            }
        
            // Asignar las proporciones a los alimentos
            porcentajeAlimento1 = proporcionPrimerProte;
            porcentajeAlimento2 = proporcionSegundoProte;
            porcentajeAlimento3 = proporcionTercerProte;
        
            console.log("Porcentaje alimento 1 " + porcentajeAlimento1);
            console.log("Porcentaje alimento 2 " + porcentajeAlimento2);
            console.log("Porcentaje alimento 3 " + porcentajeAlimento3);
        }
        
        else if (primerAlimento.cantidad > 0 && segundoAlimento.cantidad > 0 && tercerAlimento.cantidad == 0) {
          // Calcular las proteínas representadas por el primer y segundo alimento
          let alimento1proteinas = primerAlimento.cantidad * alimento1.proteina;
          let alimento2proteinas = segundoAlimento.cantidad * alimento2.proteina;
          
          // Calcular el porcentaje representado por el primer y segundo alimento
          let porcentajeRepresentado1 = (alimento1proteinas / proteinasRestantes);
          let porcentajeRepresentado2 = (alimento2proteinas / proteinasRestantes);
          
          // Verificar que las proteínas no excedan las proteínas restantes
          if (alimento1proteinas + alimento2proteinas > proteinasRestantes) {
              throw new Error("La cantidad de proteínas no puede exceder las proteínas restantes. Vuelve a ingresar los valores.");
          }
          
          // Calcular las proporciones para el primer y segundo alimento
          let proporcionPrimerProte = porcentajeRepresentado1;  // Proporción del primer alimento
          let proporcionSegundoProte = porcentajeRepresentado2;  // Proporción del segundo alimento
          
          // Calcular la proporción del tercer alimento
          let proporcionTercerProte = 1 - (proporcionPrimerProte + proporcionSegundoProte);  // El resto es para el tercer alimento
          
          // Verificar que las proporciones sumen 1
          if (Math.abs(proporcionPrimerProte + proporcionSegundoProte + proporcionTercerProte - 1) > 0.0001) {
              throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
          }
          
          // Asignar las proporciones a los alimentos
          porcentajeAlimento1 = proporcionPrimerProte;
          porcentajeAlimento2 = proporcionSegundoProte;
          porcentajeAlimento3 = proporcionTercerProte;
          
          console.log("Porcentaje alimento 1: " + porcentajeAlimento1);
          console.log("Porcentaje alimento 2: " + porcentajeAlimento2);
          console.log("Porcentaje alimento 3: " + porcentajeAlimento3);
      }
      
      else if (primerAlimento.cantidad > 0 && segundoAlimento.cantidad == 0 && tercerAlimento.cantidad > 0) {
        // Calcular las proteínas del primer y tercer alimento
        let alimento1proteinas = primerAlimento.cantidad * alimento1.proteina;
        let alimento3proteinas = tercerAlimento.cantidad * alimento3.proteina;
        
        // Calcular el porcentaje representado por el primer y tercer alimento
        let porcentajeRepresentado1 = (alimento1proteinas / proteinasRestantes);
        let porcentajeRepresentado3 = (alimento3proteinas / proteinasRestantes);
        
        // Verificar que las proteínas no excedan las proteínas restantes
        if (alimento1proteinas + alimento3proteinas > proteinasRestantes) {
            throw new Error("La cantidad de proteínas no puede exceder las proteínas restantes. Vuelve a ingresar los valores.");
        }
        
        // Calcular las proporciones para el primer y tercer alimento
        let proporcionPrimerProte = porcentajeRepresentado1;  // Proporción del primer alimento
        let proporcionTercerProte = porcentajeRepresentado3;  // Proporción del tercer alimento
      
        let proporcionSegundoProte = 1 - (proporcionPrimerProte + proporcionTercerProte);  // El resto es para el tercer alimento
        
        // Verificar que las proporciones sumen 1
        if (Math.abs(proporcionPrimerProte + proporcionSegundoProte + proporcionTercerProte - 1) > 0.0001) {
            throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
        }
        
        // Asignar las proporciones a los alimentos
        porcentajeAlimento1 = proporcionPrimerProte;
        porcentajeAlimento2 = proporcionSegundoProte;
        porcentajeAlimento3 = proporcionTercerProte;
        
        console.log("Porcentaje alimento 1: " + porcentajeAlimento1);
        console.log("Porcentaje alimento 2: " + porcentajeAlimento2);
        console.log("Porcentaje alimento 3: " + porcentajeAlimento3);
    }
    
    else if (primerAlimento.cantidad == 0 && segundoAlimento.cantidad > 0 && tercerAlimento.cantidad > 0) {
      // Calcular las proteínas del segundo y tercer alimento
      let alimento2proteinas = segundoAlimento.cantidad * alimento2.proteina;
      let alimento3proteinas = tercerAlimento.cantidad * alimento3.proteina;
      
      // Calcular el porcentaje representado por el segundo y tercer alimento
      let porcentajeRepresentado2 = (alimento2proteinas / proteinasRestantes);
      let porcentajeRepresentado3 = (alimento3proteinas / proteinasRestantes);
      
      // Verificar que las proteínas no excedan las proteínas restantes
      if (alimento2proteinas + alimento3proteinas > proteinasRestantes) {
          throw new Error("La cantidad de proteínas no puede exceder las proteínas restantes. Vuelve a ingresar los valores.");
      }
      
      // Calcular las proporciones para el segundo y tercer alimento
      let proporcionSegundoProte = porcentajeRepresentado2;  // Proporción del segundo alimento
      let proporcionTercerProte = porcentajeRepresentado3;  // Proporción del tercer alimento
      
      let proporcionPrimerProte = 1 - (proporcionSegundoProte + proporcionTercerProte);  // El resto es para el tercer alimento
  
      
      // Verificar que las proporciones sumen 1
      if (Math.abs(proporcionPrimerProte + proporcionSegundoProte + proporcionTercerProte - 1) > 0.0001) {
          throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
      }
      
      // Asignar las proporciones a los alimentos
      porcentajeAlimento1 = proporcionPrimerProte;
      porcentajeAlimento2 = proporcionSegundoProte;
      porcentajeAlimento3 = proporcionTercerProte;
      
      console.log("Porcentaje alimento 1: " + porcentajeAlimento1);
      console.log("Porcentaje alimento 2: " + porcentajeAlimento2);
      console.log("Porcentaje alimento 3: " + porcentajeAlimento3);
  }
  

             }
             else if (alimentosProteACuadrar.length == 0) {
              alimento1 = alimentosProteicos[Math.floor(Math.random() * alimentosProteicos.length)];
              console.log("El alimento 1 es " , alimento1)
              alimento2 = combinacionDameProteRandom(alimento1.nombre)
              console.log("El nombre del alimento 2 es " , alimento2)
              alimento2 = alimentos.find(alimen => 
              alimen.nombre.toLowerCase() === alimento2.toLowerCase()

              );
       
                

             }
           

         } while (alimento1 === alimento2); // Asegura que los dos alimentos sean diferentes2

     console.log("Ahora hacemos los calculos con el porcentaje alimento" , porcentajeAlimento1)

         // Asignar proteína según los porcentajes aleatorios
         console.log("EL PORCENTAJE DEL PRIMER ALIMENTO ES DE " + porcentajeAlimento1)
         const proteinaAlimento1 = objetivo.proteina * porcentajeAlimento1;
         const proteinaAlimento2 = objetivo.proteina * porcentajeAlimento2;
         const proteinaAlimento3 = objetivo.proteina * porcentajeAlimento3;
     
         const cantidadNecesaria1 = (proteinaAlimento1 / alimento1.proteina);
         const cantidadNecesaria2 = (proteinaAlimento2 / alimento2.proteina);
         const cantidadNecesaria3 = (proteinaAlimento3 / alimento3.proteina);
         
         // Agregar los alimentos con la cantidad ajustada a las totales
         proteinaTotal += proteinaAlimento1 + proteinaAlimento2 + proteinaAlimento3;
         
         carbohidratosTotal += (alimento1.carbohidratos * cantidadNecesaria1) 
                             + (alimento2.carbohidratos * cantidadNecesaria2) 
                             + (alimento3.carbohidratos * cantidadNecesaria3);
         
         grasasTotal += (alimento1.grasas * cantidadNecesaria1) 
                      + (alimento2.grasas * cantidadNecesaria2) 
                      + (alimento3.grasas * cantidadNecesaria3);
         
         caloriasTotal += (alimento1.calorias * cantidadNecesaria1) 
                        + (alimento2.calorias * cantidadNecesaria2) 
                        + (alimento3.calorias * cantidadNecesaria3);
         

         if(carbohidratosTotal <= objetivo.carbohidratos && grasasTotal <= objetivo.grasas) {
       
         procesarAlimentosProteicos = false;
         combinacion.push({ 
          nombre: alimento1.nombre, 
          cantidad: cantidadNecesaria1, 
          proteina: alimento1.proteina * cantidadNecesaria1, 
          carbohidratos: alimento1.carbohidratos * cantidadNecesaria1, 
          grasas: alimento1.grasas * cantidadNecesaria1, 
          calorias: alimento1.calorias * cantidadNecesaria1  
        });
        
        combinacion.push({ 
          nombre: alimento2.nombre, 
          cantidad: cantidadNecesaria2, 
          proteina: alimento2.proteina * cantidadNecesaria2, 
          carbohidratos: alimento2.carbohidratos * cantidadNecesaria2, 
          grasas: alimento2.grasas * cantidadNecesaria2, 
          calorias: alimento2.calorias * cantidadNecesaria2  
        });
        
        // Agregar el tercer alimento a la combinación
        combinacion.push({ 
          nombre: alimento3.nombre, 
          cantidad: cantidadNecesaria3, 
          proteina: alimento3.proteina * cantidadNecesaria3, 
          carbohidratos: alimento3.carbohidratos * cantidadNecesaria3, 
          grasas: alimento3.grasas * cantidadNecesaria3, 
          calorias: alimento3.calorias * cantidadNecesaria3  
        });
        
        console.log("IMPRIMIMOS LA COMBINACIÓN DE ALIMENTOS PROTEICOSSSSSSSSS: ", combinacion);
        
        console.log("LOS ALIMENTOS PROTEICOS ELEGIDOS SONNNNNN:");
        
        // Agregar los alimentos a la lista de alimentos seleccionados
        alimentosProteicosSeleccionados.push({ 
          nombre: alimento1.nombre, 
          cantidad: cantidadNecesaria1, 
          proteina: alimento1.proteina * cantidadNecesaria1, 
          carbohidratos: alimento1.carbohidratos * cantidadNecesaria1, 
          grasas: alimento1.grasas * cantidadNecesaria1, 
          calorias: alimento1.calorias * cantidadNecesaria1,
          unidadCalorica: alimento1.calorias,
          unidadProteica: alimento1.proteina,
          unidadCarbo: alimento1.carbohidratos,
          unidadGrasas: alimento1.grasas
        });
        
        alimentosProteicosSeleccionados.push({ 
          nombre: alimento2.nombre, 
          cantidad: cantidadNecesaria2, 
          proteina: alimento2.proteina * cantidadNecesaria2, 
          carbohidratos: alimento2.carbohidratos * cantidadNecesaria2, 
          grasas: alimento2.grasas * cantidadNecesaria2, 
          calorias: alimento2.calorias * cantidadNecesaria2,
          unidadCalorica: alimento2.calorias,
          unidadProteica: alimento2.proteina,
          unidadCarbo: alimento2.carbohidratos,
          unidadGrasas: alimento2.grasas
        });
        
        // Agregar el tercer alimento a la lista de seleccionados
        alimentosProteicosSeleccionados.push({ 
          nombre: alimento3.nombre, 
          cantidad: cantidadNecesaria3, 
          proteina: alimento3.proteina * cantidadNecesaria3, 
          carbohidratos: alimento3.carbohidratos * cantidadNecesaria3, 
          grasas: alimento3.grasas * cantidadNecesaria3, 
          calorias: alimento3.calorias * cantidadNecesaria3,
          unidadCalorica: alimento3.calorias,
          unidadProteica: alimento3.proteina,
          unidadCarbo: alimento3.carbohidratos,
          unidadGrasas: alimento3.grasas
        });
        
         console.log(alimentosProteicosSeleccionados)
         }
         else {
             console.log("Vamos a intentar nuevamente")
             intentos++;
             procesarAlimentosProteicos = true;
             proteinaTotal = 0;
             carbohidratosTotal = 0;
             grasasTotal = 0;
             caloriasTotal = 0;
             combinacion = [];
             if(intentos > 10) {
                 throw new Error("No se pudo encontrar una combinación con los alimentos proteicos seleccionados, elegi otros alimentos " ,alimento1);
             }

         }   


        } else
        {
            // Si solo seleccionamos un alimento
            let alimento ;

            if(alimentosProteACuadrar.length == 1) {
                console.log("Hay un alimento proteico a cuadrar recibido")
                alimento = alimentosProteicos.find(alim=> alim.nombre == alimentosProteACuadrar[0].nombre)
                console.log("El alimento recibido es : " + alimento.nombre)
            }
            if(alimentosProteACuadrar.length == 0) {
                alimento = alimentosProteicos[Math.floor(Math.random() * alimentosProteicos.length)];
            }


            
            let cantidadNecesaria = (objetivo.proteina - proteinaTotal) / alimento.proteina;

            proteinaTotal += alimento.proteina * cantidadNecesaria;
            carbohidratosTotal += alimento.carbohidratos * cantidadNecesaria;
            grasasTotal += alimento.grasas * cantidadNecesaria;
            caloriasTotal += alimento.calorias * cantidadNecesaria;
            

            if(carbohidratosTotal <= objetivo.carbohidratos && grasasTotal <= objetivo.grasas) {
          
                procesarAlimentosProteicos = false;
                combinacion.push({ 
                    nombre: alimento.nombre, 
                    cantidad: cantidadNecesaria, 
                    proteina: alimento.proteina * cantidadNecesaria, 
                    carbohidratos: alimento.carbohidratos * cantidadNecesaria, 
                    grasas: alimento.grasas * cantidadNecesaria, 
                    calorias: alimento.calorias * cantidadNecesaria 

                  });
                  

                alimentosProteicosSeleccionados.push({
                    nombre: alimento.nombre, 
                    cantidad: cantidadNecesaria,  
                    proteina: alimento.proteina * cantidadNecesaria, 
                    carbohidratos: alimento.carbohidratos * cantidadNecesaria, 
                    grasas: alimento.grasas * cantidadNecesaria, 
                    calorias: alimento.calorias * cantidadNecesaria,
                    unidadCalorica: alimento.calorias,
                    unidadProteica: alimento.proteina,
                    unidadCarbo : alimento.carbohidratos,
                    unidadGrasas: alimento.grasas
                  });
                  
                  console.log(alimentosProteicosSeleccionados);
                  
        
                }
                else {

                  console.log("El alimento que pasamos tiene mucha grasa, procesamos nuevamente")
                  console.log("Las grasas totales son de " ,grasasTotal)
                  console.log("El objetivo de grasas era " ,objetivo.grasas)
                  intentos+= 1;
                  if ( intentos > 10 ) {
                    throw new Error("Se superó el número máximo de intentos permitidos.");
                  }
                    procesarAlimentosProteicos = true;
                    proteinaTotal = 0;
                    carbohidratosTotal = 0;
                    grasasTotal = 0;
                    caloriasTotal = 0;
                    combinacion = [];
                    
                }

        }



    }

    console.log("VAMOS A IMPRIMIR LOS ALIMENTOS PROTEICOS SELECCIONADOSSSSS----------------------------------------------------------");
    console.log(alimentosProteicosSeleccionados)
    console.log("Las calorias totales son :" + caloriasTotal)
    console.log("Las proteinas totales son :" + proteinaTotal)
    console.log("Los carbohidratos totales son :" + carbohidratosTotal)
    console.log("Las grasas totales son :" + grasasTotal)
    console.log("---------------------------------------------------------------------------------------------------------------------")


  // Ajuste para carbohidratos

  
  let carbohidratosRestantes = objetivo.carbohidratos - carbohidratosTotal;

  let procesarAlimentosCarbohidratos = true;

  let alimentoProteicoPrincipal = alimentosProteicosSeleccionados[0]

  let cantidadAlimentosCarbohidratos;


  function seleccionarCantidadAlimentos(carbohidratosRestantes) {
    const random = Math.random(); // Número entre 0 y 1
  
    if (carbohidratosRestantes > 70) {
      if (random < 0.5) return 2; // 50% probabilidad
      else if (random < 0.7) return 2; // 20% probabilidad
      else if (random < 0.9) return 1; // 20% probabilidad
      else return 1; // 10% probabilidad
    } else if (carbohidratosRestantes > 40) {
      if (random < 0.6) return 2; // 60% probabilidad
      else if (random < 0.9) return 2; // 30% probabilidad
      else return 1; // 10% probabilidad
    } else if (carbohidratosRestantes > 20) {
      if (random < 0.7) return 1; // 70% probabilidad
      else return 1; // 30% probabilidad
    } else {
      return 1; // Siempre 1 si los carbohidratos son bajos
    }
  }


  while(procesarAlimentosCarbohidratos) {
    console.log("###########################???????????????????????????????????ARRANCAMOS PROCESANDO CARBOSSSS , LAS GRASAS SON " + grasasTotal)
      
  
  cantidadAlimentosCarbohidratos = seleccionarCantidadAlimentos(carbohidratosRestantes);
  console.log("La cantidad de alimentos de carbos son " + cantidadAlimentosCarbohidratos)
  console.log(`Carbohidratos restantes: ${carbohidratosRestantes}`);


        if(alimentosChACuadrar.length == 2) {


            cantidadAlimentosCarbohidratos = 2;
        }
             /////SI LA CANTIDAD DE ALIMENTOS DE CARBOHIDRATOS ES 2 ...

        if (cantidadAlimentosCarbohidratos === 2) {
            console.log("Entramos al ifff")
            let porcentajeAlimento1 = 0.5 + Math.random() * 0.5;
            console.log(porcentajeAlimento1)
            let porcentajeAlimento2 = 1 - porcentajeAlimento1;
            console.log(porcentajeAlimento2)
        
            let alimento1, alimento2;
           


            do {

                if(alimentosChACuadrar.length == 1) {
                    console.log("HAY UN ALIMENTO FUENTE CH A CUADRARRRRR")
                console.log("Esta perfeecto , le pasamos solo un alimento proteico-------------------------------------------------")   
                   alimento1 = alimentos.filter(alim => alim.nombre === alimentosChACuadrar[0].nombre); 
                   alimento2 = combinacionDameCarbosSecundarioRandom(alimentoProteicoPrincipal.nombre)    
                   if(alimentosChACuadrar[0].cantidad > 0) {
                    porcentajeAlimento1 = alimentosChACuadrar[0].cantidad
                    porcentajeAlimento2 = 1 - porcentajeAlimento1;
                   }

                   }
                   else if(alimentosChACuadrar.length == 2) {

                   console.log("Hay dos alimentos fuentes para cuadrar")

                   let alimentosFuentesCarbos = alimentos.filter(a => a.carbohidratos > a.proteina && a.carbohidratos > a.grasas);
                   alimento1 = alimentosFuentesCarbos.find(alim => alim.nombre === alimentosChACuadrar[0].nombre);    
                   alimento2 = alimentosFuentesCarbos.find(alim => alim.nombre === alimentosChACuadrar[1].nombre);        
                   console.log(alimento1.nombre)
                   console.log(alimento2.nombre)
                   
                   let primerAlimento = alimentosChACuadrar[0];
                   let segundoAlimento = alimentosChACuadrar[1];
                   
                   if(primerAlimento.cantidad > 0) {

      
                    let carbohidratosRestantes = (objetivo.carbohidratos - carbohidratosTotal);
                    console.log("LOS CARBOHIDRATOS RESTANTES SONNN " , carbohidratosRestantes)
                    let alimento1carbohidratos = primerAlimento.cantidad * alimento1.carbohidratos;
                    console.log("LOS CARBOHIDRATOS DEL PRIMER ALIMENTO SON " , alimento1carbohidratos)
                    let porcentajeRepresentado = (alimento1carbohidratos / carbohidratosRestantes) 
                    console.log("EL PORCENTAJE DE CH DEL PRIMER ALIMENTO CON LOS CARBOHIDRATOS RESTANTES SON " , porcentajeRepresentado)

                    if(alimento1carbohidratos > carbohidratosRestantes) {
                    throw new Error("Volve a ingresar otra cantidad, hubo un error");
                    
                    }
          
                
                    let proporcionRepresentada = porcentajeRepresentado; // 0.7 (por ejemplo)
                    let proporcionSegundoCarbo = 1 - proporcionRepresentada; // 0.3 (por ejemplo)
                    console.log(`Porcentaje de calorías representadas por el primer alimento: ${proporcionRepresentada}`);
                    console.log(`Porcentaje de calorías restantes para el segundo alimento: ${proporcionSegundoCarbo}`);

                    if (Math.abs(proporcionRepresentada + proporcionSegundoCarbo - 1) > 0.0001) {
                        throw new Error("Error de cálculo en las proporciones. Revisa los valores ingresados.");
                    }
                
                   
                    porcentajeAlimento1 = proporcionRepresentada
                    porcentajeAlimento2 = proporcionSegundoCarbo;

                    console.log("Porcentaje alimento 1 " + porcentajeAlimento1)
                    console.log("Porcentaje alimento 2 " + porcentajeAlimento2)
                   }

                   }
                   else {
                    alimento1 = combinacionDameCarbosPrincipalRandom(alimentoProteicoPrincipal.nombre)
                    alimento2 = combinacionDameCarbosSecundarioRandom(alimentoProteicoPrincipal.nombre)
                         
                    console.log("El objeto alimento 2 es " , alimento2)
    
                   }

            } while (alimento1 === alimento2);
        
            console.log("Ahora hacemos las cuentassss deeee" + porcentajeAlimento1)
            console.log("Ahora hacemos las cuentassss deeee" + porcentajeAlimento1)
            
            let diferenciaCarbohidratos = objetivo.carbohidratos - carbohidratosTotal;

            const carboAlimento1 = diferenciaCarbohidratos * porcentajeAlimento1;
            const carboAlimento2 = diferenciaCarbohidratos * porcentajeAlimento2;

            const cantidadNecesaria1 = carboAlimento1 / alimento1.carbohidratos;
            const cantidadNecesaria2 = carboAlimento2 / alimento2.carbohidratos;

            console.log("La cantidad necesaria 1 es " ,cantidadNecesaria1)
            console.log("La cantidad necesaria 2 es " ,cantidadNecesaria2)
            
        

            proteinaTotal += (alimento1.proteina * cantidadNecesaria1) + (alimento2.proteina * cantidadNecesaria2);
            carbohidratosTotal += carboAlimento1 + carboAlimento2;
            grasasTotal += (alimento1.grasas * cantidadNecesaria1) + (alimento2.grasas * cantidadNecesaria2);
            caloriasTotal += (alimento1.calorias * cantidadNecesaria1) + (alimento2.calorias * cantidadNecesaria2);
            console.log("-------------------------------------LAS GRASAS QUE TENEMOS SONNNN ", grasasTotal)
            



            if(grasasTotal <= objetivo.grasas) {
                procesarAlimentosCarbohidratos = false;
                combinacion.push({ nombre: alimento1.nombre, cantidad: cantidadNecesaria1, proteina : alimento1.proteina * cantidadNecesaria1 , carbohidratos : alimento1.carbohidratos * cantidadNecesaria1, grasas : alimento1.grasas * cantidadNecesaria1 , calorias: alimento1.calorias * cantidadNecesaria1  });
                combinacion.push({ nombre: alimento2.nombre, cantidad: cantidadNecesaria2, proteina : alimento2.proteina * cantidadNecesaria2 , carbohidratos : alimento2.carbohidratos * cantidadNecesaria2, grasas : alimento2.grasas * cantidadNecesaria2 , calorias: alimento2.calorias * cantidadNecesaria2  });

                alimentosChSeleccionados.push({ 
                    nombre: alimento1.nombre, 
                    cantidad: cantidadNecesaria1, 
                    proteina: alimento1.proteina * cantidadNecesaria1, 
                    carbohidratos: alimento1.carbohidratos * cantidadNecesaria1, 
                    grasas: alimento1.grasas * cantidadNecesaria1, 
                    calorias: alimento1.calorias * cantidadNecesaria1 ,
                    unidadCalorica: alimento1.calorias,
                    unidadProteica: alimento1.proteina,
                    unidadCarbo : alimento1.carbohidratos,
                    unidadGrasas: alimento1.grasas
                  });
                  
                  alimentosChSeleccionados.push({ 
                    nombre: alimento2.nombre, 
                    cantidad: cantidadNecesaria2, 
                    proteina: alimento2.proteina * cantidadNecesaria2, 
                    carbohidratos: alimento2.carbohidratos * cantidadNecesaria2, 
                    grasas: alimento2.grasas * cantidadNecesaria2, 
                    calorias: alimento2.calorias * cantidadNecesaria2 ,
                    unidadCalorica: alimento2.calorias,
                    unidadProteica: alimento2.proteina,
                    unidadCarbo : alimento2.carbohidratos,
                    unidadGrasas: alimento2.grasas
                  });
                  
                console.log(alimentosProteicosSeleccionados)

                }

                ///Si las grasas totales pasan el objetivo que hay en grasas, hay que hacer otros calculos
                else {
                    console.log( ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Las grasas que tenemos son " + grasasTotal)
                    console.log( "Las grasas objetivo que tenemos son " + objetivo.grasas)
                    console.log("Seguimos procesando los alimentos de carbohidratos")
                    procesarAlimentosCarbohidratos = true;
                    intentos+=1 ;
                    proteinaTotal -= ((alimento1.proteina * cantidadNecesaria1) + (alimento2.proteina * cantidadNecesaria2));
                    carbohidratosTotal -= ((alimento1.carbohidratos * cantidadNecesaria1) + (alimento2.carbohidratos * cantidadNecesaria2));
                    grasasTotal -= ((alimento1.grasas * cantidadNecesaria1) + (alimento2.grasas * cantidadNecesaria2));
                    caloriasTotal -= ((alimento1.calorias * cantidadNecesaria1) + (alimento2.calorias * cantidadNecesaria2));
                    
                    
                        throw new Error("No se pudo encontrar una combinación con los alimentos seleccionados");
                    
                   
            
                }
  

        } 


       
        else if (cantidadAlimentosCarbohidratos == 1) {
            let alimento
            console.log("SOLO HAY UN ALIMENTO DE CARBOS")
           if(alimentosChACuadrar.length == 2) {

           alimento = alimentos.find(alim=> alim.nombre == alimentosChACuadrar[0].nombre)
           }
           else if(alimentosChACuadrar.length == 1) {
            alimento = alimentos.find(alim=> alim.nombre == alimentosChACuadrar[0].nombre)
           }
           else if(alimentosChACuadrar.length == 0) {
            alimento = combinacionDameCarbosPrincipalRandom(alimentoProteicoPrincipal.nombre)
           }
           
            console.log("Vemos al alimento --------------------------------------->" , alimento)
            
            let cantidadNecesaria = (carbohidratosRestantes / alimento.carbohidratos);
            proteinaTotal += (alimento.proteina * cantidadNecesaria);
            carbohidratosTotal += (alimento.carbohidratos * cantidadNecesaria);
            grasasTotal += (alimento.grasas * cantidadNecesaria);
            caloriasTotal += (alimento.calorias * cantidadNecesaria);
            console.log("-----------------------------------UN SOLO CARBOHIDRATO , LAS GRASAS QUE TENEMOS SON " , grasasTotal)
            



            if(grasasTotal <= objetivo.grasas) {
                console.log("La cosa va bien, asi que proseguimos a agregar el carbohidrato")
                procesarAlimentosCarbohidratos = false;
                combinacion.push({ nombre: alimento.nombre, cantidad: cantidadNecesaria, proteina: alimento.proteina * cantidadNecesaria, carbohidratos: alimento.carbohidratos * cantidadNecesaria, grasas: alimento.grasas * cantidadNecesaria, calorias: alimento.calorias * cantidadNecesaria});
                
                alimentosChSeleccionados.push({ 
                    nombre: alimento.nombre, 
                    cantidad: cantidadNecesaria, 
                    proteina: alimento.proteina * cantidadNecesaria, 
                    carbohidratos: alimento.carbohidratos * cantidadNecesaria, 
                    grasas: alimento.grasas * cantidadNecesaria, 
                    calorias: alimento.calorias * cantidadNecesaria,
                    unidadCalorica: alimento.calorias,
                    unidadProteica: alimento.proteina,
                    unidadCarbo : alimento.carbohidratos,
                    unidadGrasas: alimento.grasas
                  });


                  console.log(alimentosChSeleccionados)
       
                }
                else {
                    procesarAlimentosCarbohidratos = true;
                    proteinaTotal -= (alimento.proteina * cantidadNecesaria) 
                    carbohidratosTotal -= (alimento.carbohidratos * cantidadNecesaria)
                    grasasTotal -= (alimento.grasas * cantidadNecesaria) 
                    caloriasTotal -= (alimento.calorias * cantidadNecesaria)
        
                }
  
    }

  }

  console.log("LOS ALIMENTOS FUENTES EN CARBOS SELECCIONADOS SONNNNNNN --------------------------------------------------")
  console.log(alimentosChSeleccionados);
  console.log("El total de alimentos que tenemos sonnnnnn :")
  console.log(alimentosProteicosSeleccionados)
  console.log(alimentosChSeleccionados)
  console.log("Y las cantidades totales hasta ahora sonnnnnnnn ")
  console.log("Las calorias totales son :" + caloriasTotal)
  console.log("Las proteinas totales son :" + proteinaTotal)
  console.log("Los carbohidratos totales son :" + carbohidratosTotal)
  console.log("Las grasas totales son :" + grasasTotal)
  console.log("------------------------------------------------------------------------------------------------------------")


  // Ajuste para grasas
  let grasasRestantes = objetivo.grasas - grasasTotal;

  if ( grasasRestantes > 0) {

      let cantidadAlimentosGrasas;
      if(alimentosGrACuadrar.length > 0) {
        cantidadAlimentosGrasas = alimentosGrACuadrar.length;
      }
      else if (grasasRestantes < 30) {
          cantidadAlimentosGrasas = 1;
      } else {
          // Si el total de proteínas es mayor o igual a 30, seleccionamos entre 1 o 2 alimentos aleatoriamente
          cantidadAlimentosGrasas = Math.floor(Math.random() * 2) + 1; // Aleatorio entre 1 y 2
          
          console.log("DIooo " , cantidadAlimentosGrasas)
      }

      let alimentosConGrasas = alimentos.filter(a => a.grasas > a.proteina && a.grasas > a.carbohidratos);

      console.log("La cantidad de alimentos con grasas es de " , cantidadAlimentosGrasas)


  
      if (cantidadAlimentosGrasas == 2) {

          const porcentajeAlimento1 = Math.random();
          const porcentajeAlimento2 = 1 - porcentajeAlimento1;
      
          let alimento1, alimento2;
      
          do {
            if(alimentosGrACuadrar.length == 2) {
            alimento1 = alimentosConGrasas.find(alim => alim.nombre == alimentosGrACuadrar[0].nombre)
            alimento2 = alimentosConGrasas.find(alim => alim.nombre == alimentosGrACuadrar[1].nombre)

            }
            else if ( alimentosGrACuadrar.length == 0) {
                alimento1 = alimentosConGrasas[Math.floor(Math.random() * alimentosConGrasas.length)];
                alimento2 = alimentosConGrasas[Math.floor(Math.random() * alimentosConGrasas.length)];
            }

          } while (alimento1 === alimento2);


          const grasaAlimento1 = objetivo.grasas * porcentajeAlimento1;
          const grasaAlimento2 = objetivo.grasas * porcentajeAlimento2;

      
          const cantidadNecesaria1 = (grasaAlimento1 / alimento1.grasas);
          const cantidadNecesaria2 = (grasaAlimento2 / alimento2.grasas);
          
          proteinaTotal += (alimento1.proteina * cantidadNecesaria1) + (alimento2.proteina * cantidadNecesaria2);
          carbohidratosTotal += (alimento1.carbohidratos * cantidadNecesaria1) + (alimento2.carbohidratos * cantidadNecesaria2);
          grasasTotal += grasaAlimento1 + grasaAlimento2;
          caloriasTotal += (alimento1.calorias * cantidadNecesaria1) + (alimento2.calorias * cantidadNecesaria2);
          

          combinacion.push({ nombre: alimento1.nombre, cantidad: cantidadNecesaria1, proteina : alimento1.proteina * cantidadNecesaria1 , carbohidratos : alimento1.carbohidratos * cantidadNecesaria1, grasas : alimento1.grasas * cantidadNecesaria1 , calorias: alimento1.calorias * cantidadNecesaria1  });
          combinacion.push({ nombre: alimento2.nombre, cantidad: cantidadNecesaria2, proteina : alimento2.proteina * cantidadNecesaria2 , carbohidratos : alimento2.carbohidratos * cantidadNecesaria2, grasas : alimento2.grasas * cantidadNecesaria2 , calorias: alimento2.calorias * cantidadNecesaria2  });
          
          alimentosGrasasSeleccionados.push({ 
            nombre: alimento1.nombre, 
            cantidad: cantidadNecesaria1, 
            proteina: alimento1.proteina * cantidadNecesaria1, 
            carbohidratos: alimento1.carbohidratos * cantidadNecesaria1, 
            grasas: alimento1.grasas * cantidadNecesaria1,  
            calorias: alimento1.calorias * cantidadNecesaria1 ,
            unidadCalorica: alimento1.calorias,
            unidadProteica: alimento1.proteina,
            unidadCarbo : alimento1.carbohidratos,
            unidadGrasas: alimento1.grasas
          });
          
          alimentosGrasasSeleccionados.push({ 
            nombre: alimento2.nombre, 
            cantidad: cantidadNecesaria2, 
            proteina: alimento2.proteina * cantidadNecesaria2, 
            carbohidratos: alimento2.carbohidratos * cantidadNecesaria2, 
            grasas: alimento2.grasas * cantidadNecesaria2, 
            calorias: alimento2.calorias * cantidadNecesaria2 ,
            unidadCalorica: alimento2.calorias,
            unidadProteica: alimento2.proteina,
            unidadCarbo : alimento2.carbohidratos,
            unidadGrasas: alimento2.grasas
          });
          
        console.log(alimentosGrasasSeleccionados)

      
      
      
        } else if (cantidadAlimentosGrasas == 1)
             {

            
        let alimento;

            if(alimentosGrACuadrar.length == 2 || alimentosGrACuadrar.length == 1) {
            alimento = alimentosConGrasas.find(alim => alim.nombre == alimentosGrACuadrar[0].nombre)
 
            } 
            else if (alimentosGrACuadrar.length == 0) {
            alimento = alimentosConGrasas[Math.floor(Math.random() * alimentosConGrasas.length)];
            }
          
          let cantidadNecesaria = (grasasRestantes / alimento.grasas);

          proteinaTotal += (alimento.proteina * cantidadNecesaria);
          carbohidratosTotal += (alimento.carbohidratos * cantidadNecesaria);
          grasasTotal += (alimento.grasas * cantidadNecesaria);
          caloriasTotal += (alimento.calorias * cantidadNecesaria);
          

          combinacion.push({ nombre: alimento.nombre, cantidad: cantidadNecesaria, proteina: alimento.proteina * cantidadNecesaria, carbohidratos: alimento.carbohidratos * cantidadNecesaria, grasas: alimento.grasas * cantidadNecesaria, calorias: alimento.calorias * cantidadNecesaria});
      
          alimentosGrasasSeleccionados.push({ 
            nombre: alimento.nombre, 
            cantidad: cantidadNecesaria, 
            proteina: alimento.proteina * cantidadNecesaria, 
            carbohidratos: alimento.carbohidratos * cantidadNecesaria, 
            grasas: alimento.grasas * cantidadNecesaria, 
            calorias: alimento.calorias * cantidadNecesaria,
            unidadCalorica: alimento.calorias,
            unidadProteica: alimento.proteina,
            unidadCarbo : alimento.carbohidratos,
            unidadGrasas: alimento.grasas
          });
      
      
      
        }


        console.log("LOS ALIMENTOS FUENTES EN GRASAS SELECCIONADOS SONNNNNNN --------------------------------------------------")
        console.log(alimentosGrasasSeleccionados);
        console.log("El total de alimentos que tenemos sonnnnnn :")
        console.log("-------------->")
        console.log(alimentosProteicosSeleccionados)
        console.log(alimentosChSeleccionados)
        console.log(alimentosGrasasSeleccionados)
        console.log("Y las cantidades totales hasta ahora sonnnnnnnn ")
        console.log("Las calorias totales son :" + caloriasTotal)
        console.log("LA META DE CALORIAS SON son :" + objetivo.calorias)
        console.log("-------------->")


        console.log("Las proteinas totales son :" + proteinaTotal)
        console.log("LA META DE PROTEINAS SON son :" + objetivo.proteina)
        console.log("-------------->")
        console.log("Los carbohidratos totales son :" + carbohidratosTotal)
        console.log("LA META DE CARBOHIDRATOS SON son :" + objetivo.carbohidratos)
        console.log("-------------->")
        console.log("Las grasas totales son :" + grasasTotal)
        console.log("LA META DE GRASAS SON son :" + objetivo.grasas)
        console.log("------------------------------------------------------------------------------------------------------------")
        mejorarCalorias(alimentosProteACuadrar, alimentosChACuadrar);
        intentos+=1;


  }
  else {
    console.log("No se pudo encontrar una combinacion ")

  }


  

}

function imprimirComidaGenerada() {
    console.log("Comida generada:");
    console.log("Alimentos proteicos seleccionados:" , alimentosProteicosSeleccionados);
    console.log("Alimentos Carbohidratos seleccionados :" , alimentosChSeleccionados);
    console.log("Alimentos grasas seleccionados " , alimentosGrasasSeleccionados);


    console.log(`Proteína Total: ${proteinaTotal.toFixed(2)}g`);
    console.log("Proteinas objetivo" , objetivo.proteina)
    console.log(`Carbohidratos Total: ${carbohidratosTotal.toFixed(2)}g`);

    console.log("Carbos objetivo" , objetivo.carbohidratos)
    console.log(`Grasas Total: ${grasasTotal.toFixed(2)}g`);
    console.log("Grasas objetivo" , objetivo.grasas)
    console.log(`Calorías Total: ${caloriasTotal.toFixed(2)}kcal`);
    console.log(`Calorías objetivo: ${objetivo.calorias.toFixed(2)}kcal`);



}

function ajustarProteinas() {
    console.log("Como no llegamos a la meta de proteinas, hacemos unos calculitos")
    let diferenciaProteica = objetivo.proteina - proteinaTotal;
    let calorias = (diferenciaProteica * 1.10) * 4 ;
    let cantidadProteicaASumar = calorias / objetoAlimentoProteico.calorias;
    console.log("Vamos a sumar esta cantidad del alimento proteico " , cantidadProteicaASumar)
    console.log("Equivale a " , calorias)
    alimentosProteicosSeleccionados[0].cantidad += cantidadProteicaASumar
    alimentosProteicosSeleccionados[0].calorias += objetoAlimentoProteico.calorias * cantidadProteicaASumar;
    alimentosProteicosSeleccionados[0].proteina += objetoAlimentoProteico.proteina * cantidadProteicaASumar;
    alimentosProteicosSeleccionados[0].carbohidratos += objetoAlimentoProteico.carbohidratos * cantidadProteicaASumar;
    alimentosProteicosSeleccionados[0].grasas += objetoAlimentoProteico.grasas * cantidadProteicaASumar;
    console.log("*********************************************************************")

    if(alimentosChSeleccionados == 1) {
        let alimentoCh = alimentosChSeleccionados[0]
        let objetoAlimentoCh = alimentos.find(alim => alim.nombre === alimentoCh.nombre)
        let cantidadChARestar = calorias / objetoAlimentoCh.calorias;

        console.log("Vamos a restar esta cantidad del alimento de ch " , cantidadChARestar)
        console.log("Equivale a " , calorias)
        alimentoCh.cantidad -= cantidadChARestar
        alimentoCh.calorias -= objetoAlimentoCh.calorias * cantidadChARestar;
        alimentoCh.proteina -= objetoAlimentoCh.proteina * cantidadChARestar;
        alimentoCh.carbohidratos -= objetoAlimentoCh.carbohidratos * cantidadChARestar;
        alimentoCh.grasas -= objetoAlimentoCh.grasas * cantidadChARestar;
       
    }
    if(alimentosChSeleccionados == 2) {
        let alimentoCh = alimentosChSeleccionados[0]
        let objetoAlimentoCh = alimentos.find(alim => alim.nombre === alimentoCh.nombre)
        let cantidadChARestar = calorias / objetoAlimentoCh.calorias;

        console.log("Vamos a restar esta cantidad del alimento de ch " , cantidadChARestar)
        console.log("Equivale a " , calorias)
        alimentoCh.cantidad -= cantidadChARestar
        alimentoCh.calorias -= objetoAlimentoCh.calorias * cantidadChARestar;
        alimentoCh.proteina -= objetoAlimentoCh.proteina * cantidadChARestar;
        alimentoCh.carbohidratos -= objetoAlimentoCh.carbohidratos * cantidadChARestar;
        alimentoCh.grasas -= objetoAlimentoCh.grasas * cantidadChARestar;
    }
    console.log("*********************************************************************")
    console.log("Tengo la cantidad de  calorias" , caloriasTotal)
console.log("Tengo la cantidad de  proteinas" , proteinaTotal)
console.log("Tengo la cantidad de carbohidratos " , carbohidratosTotal)
console.log("Tengo la cantidad de grasas" , grasasTotal)
console.log("La multiplicacion calorica da " , proteinaTotal*4 + carbohidratosTotal*4 + grasasTotal*9)

console.log("*********************************************************************")

console.log("La meta de calorias era de , " , objetivo.calorias)
console.log("La meta de prote era de , " , objetivo.proteina)
console.log("La meta de ch era de , " , objetivo.carbohidratos)
console.log("La meta de grasas era de , " , objetivo.grasas)

console.log(combinacion)
console.log("*********************************************************************")


}



function ajustarProteinas1alimento() {}
function ajustarProteinas2alimento() {}



function mejorarCalorias (alimentosProteACuadrar, alimentosCarbosACuadrar) { 



let diferenciaCalorica = caloriasTotal - objetivo.calorias;
let diferenciaProteica = proteinaTotal - objetivo.proteina;


console.log("La diferencia proteica es de " , diferenciaProteica)


if(alimentosProteicosSeleccionados.length == 1) {
console.log(alimentosProteicosSeleccionados)
let alimentoProteicoARestar = alimentosProteicosSeleccionados[0];
console.log("Vamos a restarle cantidad a este alimento " , alimentoProteicoARestar.nombre)

let objetoAlimentoProteico = alimentos.find(alim => alim.nombre === alimentoProteicoARestar.nombre)
console.log("El objeto alimento proteico es " + objetoAlimentoProteico)
console.log("La diferencia calorica es de " , diferenciaCalorica)
console.log("Por lo tango dividimos las calorias", diferenciaCalorica, " con las calorias del objeto proteico" + objetoAlimentoProteico.calorias)

let cantidadAlimentoProteicoARestar = diferenciaCalorica / objetoAlimentoProteico.calorias;
console.log("La cantidad de alimento proteico a restar es de ", cantidadAlimentoProteicoARestar);
console.log("*********************************************************************")

console.log("Tenía la cantidad de ", alimentoProteicoARestar);
console.log("Tenia la cantidad de  calorias" , caloriasTotal)
console.log("Tenia la cantidad de  proteinas" , proteinaTotal)
console.log("Tenia la cantidad de grasas" , grasasTotal)
console.log("Tenia la cantidad de carbohidratos " , carbohidratosTotal)
alimentoProteicoARestar.cantidad -= cantidadAlimentoProteicoARestar;
console.log("*********************************************************************")

alimentoProteicoARestar.calorias -= objetoAlimentoProteico.calorias * cantidadAlimentoProteicoARestar;
alimentoProteicoARestar.proteina -= objetoAlimentoProteico.proteina * cantidadAlimentoProteicoARestar;
alimentoProteicoARestar.carbohidratos -= objetoAlimentoProteico.carbohidratos * cantidadAlimentoProteicoARestar;
alimentoProteicoARestar.grasas -= objetoAlimentoProteico.grasas * cantidadAlimentoProteicoARestar;

caloriasTotal -= objetoAlimentoProteico.calorias * cantidadAlimentoProteicoARestar;
proteinaTotal -= objetoAlimentoProteico.proteina * cantidadAlimentoProteicoARestar;
carbohidratosTotal -= objetoAlimentoProteico.carbohidratos * cantidadAlimentoProteicoARestar;
grasasTotal -= objetoAlimentoProteico.grasas * cantidadAlimentoProteicoARestar;

console.log("Tengo la cantidad de ", alimentoProteicoARestar);
console.log("*********************************************************************")
console.log("Tengo la cantidad de ", alimentoProteicoARestar);
console.log("Tengo la cantidad de  calorias" , caloriasTotal)
console.log("Tengo la cantidad de  proteinas" , proteinaTotal)
console.log("Tengo la cantidad de carbohidratos " , carbohidratosTotal)
console.log("Tengo la cantidad de grasas" , grasasTotal)
console.log("La multiplicacion calorica da " , proteinaTotal*4 + carbohidratosTotal*4 + grasasTotal*9)
console.log("*********************************************************************")
console.log("La meta de calorias era de , " , objetivo.calorias)
console.log("La meta de prote era de , " , objetivo.proteina)
console.log("La meta de ch era de , " , objetivo.carbohidratos)
console.log("La meta de grasas era de , " , objetivo.grasas)
console.log("*********************************************************************")
console.log("***************************************Aca termina************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")

if(proteinaTotal < objetivo.proteina) {
 // ajustarProteinas();  
}




}

if(alimentosProteicosSeleccionados.length == 2) {
    console.log("LOS ALIMENTOS PROTEICOS SELECCIONADOS SON UNO (1)")
    
    let alimentoProteicoARestar;


    console.log(alimentosProteicosSeleccionados)
    if(alimentosProteACuadrar.length > 0) {
        console.log("HAY AL MENOS UN ALIMENTO PROTEICO A CUADRARRRRRR")
        console.log("Los alimentos proteicos seleccionados son"  , alimentosProteicosSeleccionados)
        console.log(alimentosProteACuadrar)
    alimentoProteicoARestar = alimentosProteACuadrar.find(alim => alim.modificable == true)
    alimentoProteicoARestar = alimentosProteicosSeleccionados.find(alim => alim.nombre === alimentoProteicoARestar.nombre)

     console.log("Vamos a restarle cantidad a este alimento " , alimentoProteicoARestar.nombre)
    } else {
    alimentoProteicoARestar = alimentosProteicosSeleccionados[0]
    }
    
    let objetoAlimentoProteico = alimentos.find(alim => alim.nombre === alimentoProteicoARestar.nombre)

    console.log("El objeto alimento proteico es " , objetoAlimentoProteico)
    console.log("La diferencia calorica es de " , diferenciaCalorica)
    console.log("Por lo tango dividimos las calorias", diferenciaCalorica, " con las calorias por unidad del objeto proteico" + objetoAlimentoProteico.calorias)
     
    if(diferenciaCalorica > alimentoProteicoARestar.calorias) {
    run();    

    }

    let cantidadAlimentoProteicoARestar = diferenciaCalorica / objetoAlimentoProteico.calorias;
    console.log("La cantidad de alimento proteico a restar es de ", cantidadAlimentoProteicoARestar);
    console.log("*********************************************************************")
    
    console.log("Tenía la cantidad de ", alimentoProteicoARestar);
    console.log("Tenia la cantidad de  calorias" , caloriasTotal)
    console.log("Tenia la cantidad de  proteinas" , proteinaTotal)
    console.log("Tenia la cantidad de grasas" , grasasTotal)
    console.log("Tenia la cantidad de carbohidratos " , carbohidratosTotal)
    alimentoProteicoARestar.cantidad -= cantidadAlimentoProteicoARestar;
    console.log("*********************************************************************")
    
    alimentoProteicoARestar.calorias -= objetoAlimentoProteico.calorias * cantidadAlimentoProteicoARestar;
    alimentoProteicoARestar.proteina -= objetoAlimentoProteico.proteina * cantidadAlimentoProteicoARestar;
    alimentoProteicoARestar.carbohidratos -= objetoAlimentoProteico.carbohidratos * cantidadAlimentoProteicoARestar;
    alimentoProteicoARestar.grasas -= objetoAlimentoProteico.grasas * cantidadAlimentoProteicoARestar;
    
    caloriasTotal -= objetoAlimentoProteico.calorias * cantidadAlimentoProteicoARestar;
    proteinaTotal -= objetoAlimentoProteico.proteina * cantidadAlimentoProteicoARestar;
    carbohidratosTotal -= objetoAlimentoProteico.carbohidratos * cantidadAlimentoProteicoARestar;
    grasasTotal -= objetoAlimentoProteico.grasas * cantidadAlimentoProteicoARestar;

    console.log("Tengo la cantidad de ", alimentoProteicoARestar);
    console.log("*********************************************************************")
    console.log("Tengo la cantidad de ", alimentoProteicoARestar);

    console.log("*********************************************************************")
    console.log("La meta de calorias era de , " , objetivo.calorias)
    console.log("La meta de prote era de , " , objetivo.proteina)
    console.log("La meta de ch era de , " , objetivo.carbohidratos)
    console.log("La meta de grasas era de , " , objetivo.grasas)
    console.log("*********************************************************************")

    console.log("Las comidas son : ")
    console.log("Los alimentos proteicos son" , alimentosProteicosSeleccionados)
    console.log("Los alimentos de carbos son" ,alimentosChSeleccionados)
    console.log("Los alimentos de greasas son" ,alimentosGrasasSeleccionados)
    console.log("Tengo la cantidad de  calorias" , caloriasTotal)
    console.log("Tengo la cantidad de  proteinas" , proteinaTotal)
    console.log("Tengo la cantidad de carbohidratos " , carbohidratosTotal)
    console.log("Tengo la cantidad de grasas" , grasasTotal)
    console.log("La multiplicacion calorica da " , proteinaTotal*4 + carbohidratosTotal*4 + grasasTotal*9)
    console.log("*********************************************************************")
    
console.log("*********************************************************************")
console.log("***************************************Aca termina************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")
console.log("**************************************************************************************")

    
    }
    
    

    if((objetivo.calorias - 5) > caloriasTotal) {
        run();
    }



console.log("Los alimentos de proteina son" , alimentosProteicosSeleccionados)
console.log("Los alimentos de carbos son" , alimentosChSeleccionados)
console.log("Los alimentos de grasas son" , alimentosGrasasSeleccionados)


}

}

function run(){





function construirProteicosAMandar() {

let alimentosProteicos = [ { nombre : "Higado", cantidad : 20}]    


}
function construirCarbosAMandar(alimentosCarbos) {
    let totalCarbos = objetivo.carbohidratos;
    let caloriasCarbos = totalCarbos * 4;
    let primerAlimento = alimentosCarbos[0]
    let segundoAlimento = alimentosCarbos[1]

    if(alimentosCarbos.length == 2) {
    let alimento1 = alimentos.find(alim => alim.nombre == alimentosCarbos[0].nombre)
    let alimento2 = alimentos.find(alim => alim.nombre == alimentosCarbos[1].nombre) 

    if (alimentosCarbos[0].cantidad > 0) {
    let caloriasRepresentadas = primerAlimento.cantidad * alimento1.calorias;
    let caloriasParaSegundoCarbo = totalCarbos - caloriasRepresentadas;

    let proporcionRepresentada = caloriasRepresentadas / caloriasCarbos; // 0.7 (por ejemplo)
    let proporcionSegundoCarbo = caloriasParaSegundoCarbo / caloriasCarbos; // 0.3 (por ejemplo)

    console.log(`Porcentaje de calorías representadas por el primer alimento: ${proporcionRepresentada.toFixed(2)}%`);
    console.log(`Porcentaje de calorías restantes para el segundo alimento: ${proporcionSegundoCarbo.toFixed(2)}%`);

    primerAlimento.cantidad = proporcionRepresentada;
    segundoAlimento.cantidad = proporcionSegundoCarbo;
    return alimentosCarbos;

    }




    }
    if(alimentosCarbos.length == 3) {
        
    }
   


}


let soloAlimentosPasados = true;
let alimentosProteicos = [ {nombre: "Pechuga de Pavo" , cantidad: 0, modificable: true }]
let alimentosCarbos = [ {nombre: "Arroz" , cantidad: 0, modificable: true } , {nombre: "Tomate" , cantidad: 0, modificable: true }]
let alimentosGrasas =  [{nombre: "Queso Cremoso" , cantidad: 0, modificable: true }]

try {

    seleccionarComidaProteCarboGrasas(objetivo, soloAlimentosPasados, alimentosProteicos, alimentosCarbos, alimentosGrasas); 
  } catch (error) {
    console.error(error.message); // Muestra el mensaje de error en la consola
  }



    


 

}


run();


// Llamar la función para generar la comida



