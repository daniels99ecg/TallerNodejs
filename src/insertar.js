const { MongoClient }=require('mongodb');
const {faker}= require('@faker-js/faker');



const uri='mongodb+srv://decruz82:admin@cluster0.bmv0nsj.mongodb.net/?retryWrites=true&w=majority';



async function crearPropiedad(nuevaPropiedad){
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const result=await client.db('sample_airbnb').collection('rol').insertMany(nuevaPropiedad);

        console.log(`El resultado de es ${result.insertId}`);

    } catch (e) {
        console.log(e)
    }finally{
        await client.close();
    }
}

for(let i=0; i<100; i++){
crearPropiedad([

    {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },  {
        "nameRol": faker.person.prefix(),
        "fecha":faker.date.anytime(),
        "descripcion":faker.lorem.text(),
        "id_rol":faker.number.int({min:1, max:2000})

    },
])
}

// crearPropiedad([
//     {
//             "firstName":faker.person.firstName(),
//             "lastName":faker.person.lastName(),
//             "age": faker.number.int({min:1, max:80}),
//             "address":faker.location.direction(),
//             "idPerson":faker.number.int({min:1, max:2000}),
//             "sizes":["Daniel", "Emilio", "Cruz", "Garcia"]
//         }
// ])



// for(let i=0; i<100;i++){

// crearPropiedad([
//     {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})
// },
// {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})
// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// },    {
//     "firstName":faker.person.firstName(),
//     "lastName":faker.person.lastName(),
//     "age": faker.number.int({min:1, max:80}),
//     "address":faker.location.direction(),
//     "idPerson":faker.number.int({min:1, max:2000})

// }
// ])
// 
 


    