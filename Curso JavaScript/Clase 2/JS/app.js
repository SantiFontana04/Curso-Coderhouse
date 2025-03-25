// ACTIVIDAD "Find the bug 1"

let cantidad = prompt("Ingrese una cantidad de repeticiones");
let texto = prompt("Ingrese texto a repetir");

for (let i = 0; i < cantidad; i++) {
    console.log(texto);
}

// ACTIVIDAD "Find the bug 2"

let lados = prompt("Ingrese cantidad de lados");

for (let i = 0; i < lados; i++) {
    if (lados > 3) {
        console.log("Tiene mas de 3 lados")
    }
    alert("lado")
}

// ACTIVIDAD 01

let numeroUsuario = prompt("Ingresa un numero");

if (numeroUsuario % 2 === 0) {
    console.log("El numero es par")
} else {
    console.log("El numero es impar")
};

// ACTIVIDAD PETSHOP

const opcionUsuario = prompt("Me confirmas el turno el dia jueves?")

if (opcionUsuario === "si") {
    console.log("Genial! Los esperamos")
} else {
    const preguntaUser = prompt("Queres reprogramarlo?");
    if (preguntaUser === "si") {
        console.log("Perfecto, tengo estos turnos: a) 09-09-2025, b) 22-04-2025, c) 26-05-2025 ")
    } else {
        console.log("Muchas gracias, volve pronto")
    }
}

// Registrar nombre con mayusculas o minusculas

const nombreUsuario = prompt("Ingrese su nombre").toLowerCase();

if(nombreUsuario === "santiago") {
    console.log("Bienvenido");
} else {
    console.log("no te conozco")
}

// ACTIVIDAD 02