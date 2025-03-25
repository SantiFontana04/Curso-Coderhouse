// Funciones
// para crear funciones se usa la palabra reservada "function"
// para llamarla tengo que usar el nombre de la función seguido de "()"


function redirectInstagram() {
    window.location.href = "https://www.instagram.com/"
}

function redirectFacebook() {
    window.location.href = "https://www.facebook.com/"
}

function redirectPinterest() {
    window.location.href = "https://www.pinterest.com/"
}

// redirectFacebook();
// redirectInstagram();
//redirectPinterest();

// Parámetros
// -Información que le pasamos a la función para darle escalabilidad

function redirectSocialMedia(redes) {
    console.log("Esta es la red", redes)
    // window.location.href = `https://www.${redes}.com/`
};

redirectSocialMedia("Pinterest");

// Cuantos parámetros puedo pasarle: n10, promedio entre 1 y 7

function devolverLibro(titulo, diasRetraso = 0) {
    const multa = diasRetraso * 0.50;
    const mensaje = diasRetraso > 0 
        ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
        : "Devuelto a tiempo. No hay multa.";
    console.log(`Libro "${titulo}": ${mensaje}`);
}

devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.

// Función anonima SocialMedia
const facebook = function (redes = ``) {
    console.log("Esta es la red", redes)
};
facebook("instagram");

// Función flecha

const instagram = (redes = ``) => {
    console.log("Esta es la red", redes)
}

function redirectSocialMedia(redes = ``) {
    switch(redes) {
        case `facebook`:
            // window.location.href = `https://www.${redes}.com/`
        break;
        case `instagram`:
            // window.location.href = `https://www.${redes}.com/`
        break;
        case `x`:
            // window.location.href = `https://www.${redes}.com/`
        break;
        default: "Te quedas aca"
    }
};

//Registrarse

const usuarioAppNew = prompt("Cual es tu user");
const passwordAppNew = parseInt(prompt(`Cual es tu password`));
const validatePasswordAppNew = parseInt(prompt(`Repeti tu password`));

const validarPassword = () => {
    if (passwordAppNew === validatePasswordAppNew) {
        alert(`Bienvenido!! ${usuarioAppNew}`)
    }
};

validarPassword();

// Login

const login = () => {
    const nombreDatabase = "Santiago";
    const userInput = prompt("Usuarios");
    if (nombreDatabase === userInput) {
        alert(`Bienvenido!! ${userInput}`)
    }
}

