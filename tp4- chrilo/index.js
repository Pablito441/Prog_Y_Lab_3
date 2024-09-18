"use strict";
// Ejercicio 1: Instalaciones Necesarias
console.log("Ejercicio 1: Instalaciones Necesarias");
// Enunciado: Verifica que TypeScript esté instalado globalmente en tu sistema.
// Para instalar TypeScript globalmente, usa el siguiente comando en tu terminal:
// npm install -g typescript
// Ejercicio 2: Modo Observador
console.log("Ejercicio 2: corriendo desde typescript");
// Enunciado: Configura el modo observador de TypeScript para que la compilación se realice automáticamente cuando realices cambios en los archivos.
// Usa el siguiente comando en tu terminal para compilar automáticamente:
// tsc --watch
// Ejercicio 3: Tipos de Datos
console.log("Ejercicio 3: Tipos de Datos");
// Enunciado: Crea variables de diferentes tipos de datos (string, number, boolean, Date). Muestra sus valores en el HTML.
// Utiliza los siguientes tipos: string, number, boolean, Date
const texto = "Hola, TypeScript!";
const numero = 123;
const booleano = true;
const fecha = new Date();
const resultadosDiv = document.getElementById("resultados");
if (resultadosDiv) {
    resultadosDiv.innerHTML += `<h2>Tipos de Datos</h2>`;
    resultadosDiv.innerHTML += `<p>Texto: ${texto}</p>`;
    resultadosDiv.innerHTML += `<p>Número: ${numero}</p>`;
    resultadosDiv.innerHTML += `<p>Booleano: ${booleano}</p>`;
    resultadosDiv.innerHTML += `<p>Fecha: ${fecha.toLocaleDateString()}</p>`;
}
// Ejercicio 4: Datos Primitivos
console.log("Ejercicio 4: Datos Primitivos");
// Enunciado: Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML.
// La función debe recibir un número y devolver su representación en cadena.
function convertirAString(num) {
    return num.toString();
}
const numeroAConvertir = 456;
const numeroComoString = convertirAString(numeroAConvertir);
resultadosDiv.innerHTML += `<p>Número convertido a cadena: ${numeroComoString}</p>`;
// Ejercicio 5: Arrays
console.log("Ejercicio 5: Arrays");
// Enunciado: Crea un array de números y una función que sume todos los elementos del array. Muestra la suma en el HTML.
// La función debe recibir un array de números y devolver la suma de todos sus elementos.
const numeros = [1, 2, 3, 4, 5];
function sumarArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
const suma = sumarArray(numeros);
resultadosDiv.innerHTML += `<p>Suma del array: ${suma}</p>`;
// Ejercicio 6: Objetos Literales (Introducción)
console.log("Ejercicio 6: Objetos Literales (Introducción)");
// Enunciado: Crea un objeto literal que represente un estudiante con nombre, edad y curso. Muestra el estudiante en el HTML.
// El objeto debe tener propiedades para el nombre, edad y curso del estudiante.
const estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemáticas",
};
resultadosDiv.innerHTML += `<p>Estudiante: ${estudiante.nombre}</p>
<p>Edad: ${estudiante.edad}</p>
<p>Curso: ${estudiante.curso}</p>`;
// Ejercicio 7: Type Personalizado
console.log("Ejercicio 7: Type Personalizado");
const direccion = {
    calle: "Av. Principal",
    ciudad: "Ciudad",
    codigoPostal: "12345",
};
resultadosDiv.innerHTML += `<p>Dirección: Calle:${direccion.calle}, Ciudad:${direccion.ciudad}, CP:${direccion.codigoPostal}</p>`;
// Ejercicio 8: Interface
console.log("Ejercicio 8: Interface");
const usuario = {
    nombre: "Ana",
    correo: "ana@example.com",
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    },
};
resultadosDiv.innerHTML += `<p>${usuario.saludar()}</p>`;
// Ejercicio 9: Clases y POO
console.log("Ejercicio 9: Clases y POO");
// Enunciado: Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML.
// La clase debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
const persona = new Persona("Carlos", 30);
resultadosDiv.innerHTML += `<p>${persona.presentarse()}</p>`;
// Ejercicio 10: Encapsulamiento y Genéricos
console.log("Ejercicio 11: Encapsulamiento y Genéricos");
// Enunciado: Crea una clase genérica `Caja` que almacene un valor de tipo genérico. Implementa un método para obtener el valor y muestra los resultados en el HTML.
// La clase debe permitir almacenar y obtener un valor de cualquier tipo.
class Caja {
    constructor(contenido) {
        this.contenido = contenido;
    }
    obtenerContenido() {
        return this.contenido;
    }
}
const cajaDeTexto = new Caja("Mensaje secreto");
const cajaDeNumero = new Caja(42);
resultadosDiv.innerHTML += `<p>Contenido de cajaDeTexto: ${cajaDeTexto.obtenerContenido()}</p>`;
resultadosDiv.innerHTML += `<p>Contenido de cajaDeNumero: ${cajaDeNumero.obtenerContenido()}</p>`;
// Ejercicio 12: Encapsulamiento y Genéricos
console.log("Ejercicio 12: Funciones genericas");
// Enunciado: Crea una función genérica `identidad` que devuelva el mismo valor que recibe. Usa esta función para diferentes tipos y muestra los resultados en el HTML.
// La función debe aceptar un valor de cualquier tipo y devolverlo sin modificarlo.
function identidad(valor) {
    return valor;
}
const numeroIdentidad = identidad(123);
const textoIdentidad = identidad("texto");
resultadosDiv.innerHTML += `<p>Identidad del número: ${numeroIdentidad}</p>`;
resultadosDiv.innerHTML += `<p>Identidad del texto: ${textoIdentidad}</p>`;
// Ejercicio Adicional: Enumeraciones
console.log("Ejercicio 12: enums");
// Enunciado: Define una enumeración `Color` con valores para diferentes colores. Usa esta enumeración para asignar un color favorito y muéstralo en el HTML.
// La enumeración debe incluir al menos tres colores diferentes.
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
const colorFavorito = Color.Azul;
resultadosDiv.innerHTML += `<p>Color favorito: ${colorFavorito}</p>`;
