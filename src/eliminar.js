const { MongoClient }=require('mongodb');
const {faker}= require('@faker-js/faker');

const uri='mongodb+srv://decruz82:admin@cluster0.bmv0nsj.mongodb.net/?retryWrites=true&w=majority';

async function eliminarPropiedad(nombrePropiedad){
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const result = await client.db('sample_airbnb').collection('PubligrafitNodePerson').deleteOne({firstName:nombrePropiedad})

        console.log(`${result.deletedCount} propiedad(es) fue(ron) eliminida(s)`)

    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }
}

eliminarPropiedad("Walker");