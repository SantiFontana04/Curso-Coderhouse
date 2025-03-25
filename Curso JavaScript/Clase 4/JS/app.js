const servicios = [
    "Diseño de sitios web profesionales",
    "Crea tu tienda"
];

const alumnosCoder = ["Agustín Romero", "Santiago Fontana", "Ariel Castillo"];

for (let i = 0; i < alumnosCoder.length; i++) {
    console.log("Todas las entregas: ",alumnosCoder[i]);
}

// Metodo push

const carritoShop = [];

const producto = prompt("Que producto queres agregar?");

function addCart(product) {
    carritoShop.push(product)
}

function showNumberCart(product) {
    return product.length;
}

function deleteProduct(i) {
    carritoShop.pop();
    carritoShop.shift();
}

addCart(producto);

console.log(carritoShop);

const nombres = ["Luis", "Ana", "Julia"];
console.log(nombres.join(", "));

const ciudadArgentina = ["cordoba", "buenos aires", "tucuman", "san luis"];
const ciudadUsuario = [];
const ciudadInput = "mendoza";

if(ciudadArgentina.includes(ciudadInput)) {
    console.log("Esta ciudad ya esta cargada");
} else {
    ciudadArgentina.push(ciudadInput);
}

console.log(ciudadArgentina);

const usuarioTinderLeandro = {
    nombre: "Leandro",
    edad: 30,
    ciudad: "Mendoza",
    hobbies: ["Treking", "Vino", "Parapente"],
    rangoEdad: [25,35]
};

const usuarioTinderAgustin = {
    nombre: "Agustin",
    edad: 21,
    ciudad: "Buenos Aires",
    hobbies: ["Cine", "Cerveza", "Futbol"],
    rangoEdad: [18,23]
};

const dataBaseUser = [];

class UsuarioTienda {
    constructor(img = [], nombre = "", edad = 18, ciudad = "" , preferencias = [], descripcion = "", altura = 0) {
        this.img = img,
        this.nombre = nombre,
        this.edad = edad,
        this.ciudad = ciudad,
        this.preferencias = preferencias,
        this.descripcion = descripcion,
        this.altura = altura
        dataBaseUser.push(this);
    }
    // sumarDataBase() {
    //     return this.img + this.nombre + this.edad + this.ciudad + this.preferencias + this.descripcion + this.altura;
    // }
};

const userSantiago = new UsuarioTienda(["Imagen 1", "Imagen 2"], "Santiago", 20, "Buenos Aires", ["Mujeres"],"Descripcion...",1.84);
const userCarlos = new UsuarioTienda(["Imagen 1", "Imagen 2"], "Santiago", 20, "Buenos Aires", ["Mujeres"],"Descripcion...",1.84);
const userCristian = new UsuarioTienda(["Imagen 1", "Imagen 2"], "Santiago", 20, "Buenos Aires", ["Mujeres"],"Descripcion...",1.84);

console.log(dataBaseUser);