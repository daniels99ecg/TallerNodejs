const { MongoClient }=require('mongodb');// Se establece la conexion con la dependencia de mongodb
const {faker}= require('@faker-js/faker');// Se establece la conexion con la dependencia de faker


// Se ingresa la uri del mongo atlas a la constante de (uri) para establecer la conexion

const uri='mongodb+srv://decruz82:admin@cluster0.bmv0nsj.mongodb.net/?retryWrites=true&w=majority';


// async function actualizarPropiedad(nombrePropiedad, campoActualizar){// Se crea una funcion asincronica con un paso de parametros donde se ingresaran los datos
//         const client = new MongoClient(uri); // Se instancia en una variable el MongoClient con la uri 
    
//         try { //Por si ocurre un error 
//             await client.connect(); //Conectar al mongo atlas 


//         //Se ingresan el nombre de la base de datos con la coleccion que deseamos usar, tambien pasamos lo que queremos realizar en nuestas coleccion 

//             const result = await client.db('sample_airbnb').collection('PubligrafitNode').
//             updateOne({firstName: nombrePropiedad}, {$set: {age: campoActualizar}})
            
//             //Mostrar si los documento se actualizar de forma correcta 1 para exito y 0 para no exito

//             console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
//             console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
      
//         } catch (e) {//capturar el error
//             console.error(e);//mostrar en pantalla el error capturado 
//         }finally{
    
//         await client.close();// Finalizar el proceso de mongodb
//         }
//     }
    
//     actualizarPropiedad("Sterling", 20); //Llamar a la funcion y pasarle los datos para actualizar


//UpdateMany

    async function actualizarPropiedad(nombrePropiedad, campoActualizar){// Se crea una funcion asincronica con un paso de parametros donde se ingresaran los datos
        const client = new MongoClient(uri); // Se instancia en una variable el MongoClient con la uri 
    
        try { //Por si ocurre un error 
            await client.connect(); //Conectar al mongo atlas 


        //Se ingresan el nombre de la base de datos con la coleccion que deseamos usar, tambien pasamos lo que queremos realizar en nuestas coleccion 

            const result = await client.db('sample_airbnb').collection('PubligrafitNode').
            updateMany({age: {$gt: nombrePropiedad}}, {$set: {activo: campoActualizar}})
            //Con la funcion de UpdateMany podemos actualizar muchos campos al mismo tiempo
            //Mostrar si los documento se actualizan de forma correcta 1 para exito y 0 para no exito

            console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
            console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
      
        } catch (e) {//capturar el error
            console.error(e);//mostrar en pantalla el error capturado 
        }finally{
    
        await client.close();// Finalizar el proceso de mongodb
        }
    }
    
    actualizarPropiedad(15, true); 