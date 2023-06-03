const { MongoClient }=require('mongodb'); // Se establece la conexion con la dependencia de mongodb
const {faker}= require('@faker-js/faker'); // Se establece la conexion con la dependencia de faker


// Se ingresa la uri del mongo atlas a la constante de (uri) para establecer la conexion
const uri='mongodb+srv://decruz82:admin@cluster0.bmv0nsj.mongodb.net/?retryWrites=true&w=majority';



async function crearPropiedad(nuevaPropiedad){ // Se crea una funcion asincronica con un paso de parametros donde se ingresaran los datos
    const client = new MongoClient(uri);// Se instancia en una variable el MongoClient con la uri 

    try {//Por si ocurre un error 
        await client.connect(); //Conectar al mongo atlas 

        //Se ingresan el nombre de la base de datos con la coleccion que deseamos usar, tambien pasamos lo que queremos realizar en nuestas coleccion 
        const result=await client.db('sample_airbnb').collection('PubligrafitNodeArray').insertMany(nuevaPropiedad);

        //Mostrar el resultado de lo que ingreso por medio del id del documento
        console.log(`El resultado de es ${result.insertId}`);

    } catch (e) {//capturar el error
        console.log(e) //mostrar en pantalla el error capturado 
    }finally{
        await client.close();// Finalizar el proceso de mongodb 
    }
}

//Insertar los datos de la colleccion de Rol
//Hacer el recodido del objeto 100 veces para insertar los datos



//Insertar los datos de la coleccion de PubligrafitNodeArray

crearPropiedad([
    {
            "firstName":faker.person.firstName(),
            "lastName":faker.person.lastName(),
            "age": faker.number.int({min:1, max:80}),
            "address":faker.location.direction(),
            "idPerson":faker.number.int({min:1, max:2000}),
            "sizes":["Daniel", "Emilio", "Cruz", "Garcia"]
        }
])



 


    