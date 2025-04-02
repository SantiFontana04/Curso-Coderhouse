
const alumnoCoder = {}; // objeto
const coches = [] // array

const santiagoCoder = {
    nombre: "Santiago",
    edad: 20,
    altura: 1.84,
    mascotas: false,
    pareja: false,
    hobbies: ["videojuegos", "futbol"]
};

console.log(santiagoCoder);

class usuario {
    constructor(nombre = "", edad = 0, ciudad = "", imagenes = [], preferencia = "", edadPreferencia = [], hobbies = [], descripcion = "") {
        this.nombre = nombre,
        this.edad = Number(edad),
        this.ciudad = ciudad,
        this.imagenes = imagenes,
        this.preferencia=preferencia,
        this.edadPreferencia = edadPreferencia,
        this.hobbies = hobbies,
        this.descripcion = descripcion
    };
};

const usuario1 = new usuario
("Santiago", 20, "Caseros", ["img1","img2","img3"], "F", [18,23], ["videojuegos", "ver futbol"],"Descripcion...");

console.log(usuario1)

const usuario = [];


// localStorage

const mensaje = JSON.parse(localStorage.getItem("lenguaje")) || ""; // programación defensiva
if (mensaje){
    alert("Ey ven a terminar la compra!");
}

localStorage.setItem("lenguaje", "en");
const idioma = localStorage.getItem("lenguaje");

if (idioma === "es") {
    console.log("Tu app se muestra en español");
} else if (idioma === "en") {
    console.log("Tu app se muestra en inglés");
} else if (idioma === "pt") {
    console.log("Tu app se muestra en portugués");
};

console.log(idioma);

// eliminar datos
localStorage.removeItem(idioma)
localStorage.clear()

// Actividad

function solicitarDatosUsuario() {
    const nombreUsuario = prompt("username");
    localStorage.setItem("nombreUser", nombreUsuario);
};

function inicioSesion() {
    const nombreUsuarioLS = localStorage.getItem("nombreUser");
    if (nombreUsuarioLS) {
        solicitarDatosUsuario();
    } else {
        alert(`Hola ${nombreUsuarioLS}`)
    }
}