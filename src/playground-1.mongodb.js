use('sample_airbnb');

//Crear las validaciones
// db.createCollection("PubligrafitNode", {
//     validator: {
//        $jsonSchema: {
          
//           required: [ "firstName", "lastName", "age", "address" ],
//           properties: {
//              firstName: {
//                 bsonType: "string",
//                 description: "'firstName' Es un campo requerido"
//              },
//              lastName: {
//                 bsonType: "string",
//                 description: "'lastName' Es un campo requerido"
//              },
//              age: {
//                 bsonType: "int",
//                 minimum: 1,
//                 maximum: 80,
//                 description: "'age' Es un campo requerido"
//              },
//              address:{
//                 bsonType: "string",
//                 description: "'address' Es un campo requerido"
//              }
//           }
//        }
//     }
//  } )

//Validacion para los roles
// db.createCollection("rol", {
//     validator: {
//        $jsonSchema: {
          
//           required: [ "nameRol", "fecha", "descripcion", "id_rol" ],
//           properties: {
//              nameRol: {
//                 bsonType: "string",
//                 description: "'firstName' Es un campo requerido"
//              },
//              fecha: {
//                 bsonType: "date",
//                 description: "'lastName' Es un campo requerido"
//              },
//              description: {
//                 bsonType: "string",
//                 description: "'age' Es un campo requerido"
//              },
//              address:{
//                 bsonType: "int",
//                 minimum:1,
//                 maxmanum:2000,
//                 description: "'address' Es un campo requerido"
//              }
//           }
//        }
//     }
//  } )











 // Unir las collection

//  db.PubligrafitNode.aggregate([
//    {
//       $lookup: {
//         from: "PubligrafitNodePerson",
//         localField: "'id'",
//         foreignField: "'idPerson'",
//         as: "ComentariosPersonas"
//       }
//    },
//    {
//       $project: {
//          firstName:true, ComentariosPersonas:true
//       }
//    }
//  ])

//unwind


// db.PubligrafitNodeArray.aggregate( [ 
//    { $unwind : "$sizes" } 
// ] )

// db.PubligrafitNode.aggregate([
//    {
//       $lookup: {
//         from: "rol",
//         localField: "'_id'",
//         foreignField: "'id_rol'",
//         as: "asignacion"
//       }
//    },
//    {
//       $project: {
//          "_id":false,
//          "firstName": true,
//          "lastName":true, 
//          "age": true,
//          "address":true ,
//          asignacion:true
//       }
//    }
// ])


//Pipeline


// db.PubligrafitNode.aggregate([
//    {
//       $match: {
//         age:{$eq:22}
//       }
//    },
//    {
//       $project: {
//         "firstName":true,
//         "age":true
//       }
//    },
//    {
//       $limit: 5
//    }
// ])

