const { MongoClient }=require('mongodb');
const {faker}= require('@faker-js/faker');



const uri='mongodb+srv://decruz82:admin@cluster0.bmv0nsj.mongodb.net/?retryWrites=true&w=majority';


async function actualizarPropiedad(nombrePropiedad,  lastName, age ,address, idPerson, sizes){
        const client = new MongoClient(uri);
    
        try {
            await client.connect();

            const result = await client.db('sample_airbnb').collection('PubligrafitNodeArray').
            updateOne({firstName: nombrePropiedad}, {$set: {lastName:lastName, age:age ,address:address, idPerson:idPerson, sizes:sizes}},{upsert:true})
            
            console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
            console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
      
        } catch (e) {
            console.error(e);
        }finally{
    
        await client.close();
        }
    }
    
actualizarPropiedad("Alicia", "Garcia", 100, "Medellin", 200, "[algo1,algo2]");


