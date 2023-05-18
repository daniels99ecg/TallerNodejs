const {faker}= require('@faker-js/faker');

const firstName=faker.person.firstName();

 
const lastName=faker.person.lastName();


const animal=faker.animal.rabbit();


const colors=faker.color.human();

const number=faker.number.int({min:1 , max:100});

const job=faker.person.jobTitle();

const productos=faker.commerce.product(); //Producto

console.log(`El nombre de la persona es: ${firstName} ${lastName}`);

console.log(`El nombre del conejo es: ${animal}`);

console.log(`El color es: ${colors}`);

console.log(`El numero es : ${number}`);

console.log(`El nombre del trabajo es: ${job}`);

console.log(`El producto es : ${productos}`);




