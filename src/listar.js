const { MongoClient }=require('mongodb');
const {faker}= require('@faker-js/faker');



const uri='mongodb+srv://decruz82:admin@cluster0.bmv0nsj.mongodb.net/?retryWrites=true&w=majority';


//Listar una sola propiedad
// async function listarPropiedad(listarNuevaPropiedad){
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         const result=await client.db('sample_airbnb').collection('PubligrafitNode').findOne({firstName: listarNuevaPropiedad});


//         if(result){
//             console.log(`El resultado de la busqueda es  ${listarNuevaPropiedad}`);
//             console.log(result);
//         }

//     } catch (e) {
//         console.log(e)
//     }finally{
//         await client.close();
//     }
// }

// listarPropiedad('Sterling')



//listar todas las propiedades

// async function listarPropiedad(listarNuevaPropiedad){
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         const result=await client.db('sample_airbnb').collection('PubligrafitNode').find();

//         const mostarTodo = await result.toArray();
        
//         console.log(mostarTodo);
        
//     } catch (e) {
//         console.log(e)
//     }finally{
//         await client.close();
//     }
// }

// listarPropiedad()   

//Listar propiedades con el limit

// async function listarPropiedad(listarNuevaPropiedad){
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         const result=await client.db('sample_airbnb').collection('PubligrafitNode').find({age:{$gte:20}}).limit(2);

//         const curso = await result.toArray();
        
//             console.log(curso);
        
//     } catch (e) {
//         console.log(e)
//     }finally{
//         await client.close();
//     }
// }

// listarPropiedad()   



//Listar propiedades con el sort 

async function listarPropiedad(listarNuevaPropiedad){
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const result=await client.db('sample_airbnb').collection('PubligrafitNode').find({age:{$gte:20}}).sort({'address':-1});

        const curso = await result.toArray();
        
            console.log(curso);
        
    } catch (e) {
        console.log(e)
    }finally{
        await client.close();
    }
}

listarPropiedad()   
