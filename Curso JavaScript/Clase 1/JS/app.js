console.log("Conectando...");

// Variables

let dolarBlueCompra = 1220;

const dolarBolsacompra = 1240;

// Tipos de datos

const nombre = "Santiago";

const edad = 20;

const sosMayor = true;

// null cuando la variable no tiene valor

// undefined cuando la variable no esta declarada

// Object cuando la variable es un objeto

const alumno = {
    nombre: "Santiago",
    apellido: "Fontana",
    edad: 20
}

// TYPE OF para saber el tipo de dato
console.log("Dame el tipo de dato de la variable nombre", typeof nombre)

// Concatenacion de variables
const cantidadBilletes = 10;
const resultado = cantidadBilletes * dolarBolsacompra;
console.log("El resultado es", resultado)

console.log(`Mi nombre es ${nombre} y tengo ${edad} años`)

// Prompt

const usuarioApellido = prompt("Decime tu apellido");

console.log(`El apellido es ${usuarioApellido}`)

// Alert

alert("Apellido guardado")

// Ejercicio 

sueldo = 2000000;
sueldoDolares = sueldo / dolarBlueCompra

console.log(sueldoDolares)