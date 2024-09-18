"use strict";
//Ejercicio 2
console.log("Ejercicio 2: corriendo desde typescript");
//Ejercicio 3
let textoTS = "Juan Pérez";
let numeroTS = 25;
let booleanTS = true;
let fechaTS = new Date();
let textoElem = document.getElementById("textoTS");
let numeroELem = document.getElementById("numeroTS");
let booleanElem = document.getElementById("booleanTS");
let fechaElem = document.getElementById("fechaTS");
if (textoElem && numeroELem && booleanElem && fechaElem) {
    textoElem.innerText = textoTS;
    numeroELem.innerText = numeroTS.toString();
    booleanElem.innerText = booleanTS.toString();
    fechaElem.innerText = fechaTS.toLocaleString();
}
// Ejercicio 4
function numeroATexto(numero) {
    return numero.toString();
}
let numeroConvertido = numeroATexto(411);
let numeroConvertidoElem = document.getElementById("numConvertido");
if (numeroConvertidoElem) {
    numeroConvertidoElem.innerText = numeroConvertido;
}
// Ejercicio 5
let numeros = [10, 20, 30, 40, 50];
function sumarArray(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}
let sumaArrayTotal = sumarArray(numeros);
let sumaElement = document.getElementById("sumArray");
if (sumaElement) {
    sumaElement.innerText = sumaArrayTotal.toString();
}
// Ejercicio 6
let estudiante = {
    nombre: "Pablo Cáceres",
    edad: 22,
    curso: "LISUM"
};
let nombreEstudianteElement = document.getElementById("nombreEstudiante");
let edadEstudianteElement = document.getElementById("edadEstudiante");
let cursoEstudianteElement = document.getElementById("cursoEstudiante");
if (nombreEstudianteElement && edadEstudianteElement && cursoEstudianteElement) {
    nombreEstudianteElement.innerText = estudiante.nombre;
    edadEstudianteElement.innerText = estudiante.edad.toString();
    cursoEstudianteElement.innerText = estudiante.curso;
}
let direccion = {
    calle: "25 de Mayo",
    ciudad: "Mendoza",
    codigoPostal: "5015"
};
let direccionElement = document.getElementById("direccion");
let direccionFormateada = `Dirección: Calle: ${direccion.calle}, Ciudad: ${direccion.ciudad}, CP: ${direccion.codigoPostal}`;
if (direccionElement) {
    direccionElement.innerText = direccionFormateada;
}
let usuario = {
    nombre: "Pablo",
    correo: "pppppp@email.com",
    saludar: function () {
        return `Hola, mi nombre es ${this.nombre}. ¡niceee to meet you bro!`;
    }
};
let saludoElement = document.getElementById("saludo");
if (saludoElement) {
    saludoElement.innerText = usuario.saludar();
}
// Ejercicio 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
let persona = new Persona("Pablo Escobar", 99);
let presentacionElement = document.getElementById("presentacion");
if (presentacionElement) {
    presentacionElement.innerText = persona.presentarse();
}
// Ejercicio 10
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
let cajaString = new Caja("La tierra es plana");
let cajaNumero = new Caja(8364628395);
let valorStringElement = document.getElementById("valorString");
let valorNumeroElement = document.getElementById("valorNumero");
if (valorStringElement && valorNumeroElement) {
    valorStringElement.innerText = `Contenido de cajaString: ${cajaString.obtenerValor()}`;
    valorNumeroElement.innerText = `Contenido de cajaNumero: ${cajaNumero.obtenerValor()}`;
}
// Ejercicio 11
function identidad(valor) {
    return valor;
}
let valorString = identidad("Texto de prueba");
let valorNumero = identidad(42);
let valorBooleano = identidad(true);
let valorStringElem = document.getElementById("valorString2");
let valorNumeroElem = document.getElementById("valorNumero2");
let valorBooleanoElem = document.getElementById("valorBooleano2");
if (valorStringElem && valorNumeroElem && valorBooleanoElem) {
    valorStringElem.innerText = `Valor de tipo string: ${valorString}`;
    valorNumeroElem.innerText = `Valor de tipo número: ${valorNumero}`;
    valorBooleanoElem.innerText = `Valor de tipo booleano: ${valorBooleano}`;
}
// Ejercicio 12
// Definir la enumeración Color
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
let colorFavorito = Color.Verde;
let colorFavoritoElem = document.getElementById("colorFavorito");
if (colorFavoritoElem) {
    colorFavoritoElem.innerText = `Color favorito: ${colorFavorito}`;
}
