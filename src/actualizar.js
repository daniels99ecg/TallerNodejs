const { MongoClient }=require('mongodb');
const {faker}= require('@faker-js/faker');



const uri='mongodb+srv://decruz82:admin@cluster0.bmv0nsj.mongodb.net/?retryWrites=true&w=majority';


async function actualizarPropiedad(nombrePropiedad, campoActualizar){
        const client = new MongoClient(uri);
    
        try {
            await client.connect();

            const result = await client.db('sample_airbnb').collection('PubligrafitNode').
            updateOne({firstName: nombrePropiedad}, {$set: {age: campoActualizar}})
            
            console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
            console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
      
        } catch (e) {
            console.error(e);
        }finally{
    
        await client.close();
        }
    }
    
    actualizarPropiedad("Sterling", 20);
    