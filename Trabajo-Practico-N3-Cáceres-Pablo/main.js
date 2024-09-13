//                    Introduccion a Java Script
//                           Ejercicio 2

// let a = 1;
// let b = 2;
// let c = a+b;
// console.log("La suma del primer número '",a,"' y el segundo número '",b,"' es igual a ",c);

//                             Ejericio 3

// let nombre = prompt("¿Cuál es tu nombre?");

// if(nombre !== null && nombre.trim() !== ""){
//   console.log("hola, ",nombre,"!");
// }else{    
//   console.log("No ingresaste un nombre valido");
// }1

//                  Operadores lógicos y condicionales
//                             Ejercicio 1

// let num1 = prompt("Ingrese el primer número:");
// let num2 = prompt("Ingrese el segundo número:");
// let num3 = prompt("Ingrese el tercer número:");

// let mayor = (num1 > num2 && num1 > num3) ? num1 : (num2 > num1 && num2 > num3) ? num2 : num3;
// console.log("el mayor de los 3 números ingre9sados es ", mayor, ".");

//                           Ejercicio 2

// let numero = prompt("Ingrese un número: ");

// if(!isNaN(numero)){
//   if(numero % 2 === 0){
//     console.log("El número " + numero + " es par.");
//   }else{
//     console.log("El número " + numero + " es impar.");
//   }
// }else{
//   console.log("No se ingreso un número válido.")
// }

//                  Operadores de asignación y bucles
//                            Ejercicio 1 

// let num10 = 10;

// while(num10 != 0){
//   console.log(num10);
//   num10 -= 1;
// }
// //                            Ejercicio 2
// let mayor100;
// do{
//   mayor100 = prompt("Ingrese un número mayor a 100");
// }while(mayor100 <= 100 || isNaN(mayor100));
// console.log("Ingresaste un número mayor a 100: ",mayor100);

//                     Funciones de JavaScript
//                            Ejercicio 1 

// function esPar(numX){
//   return numX % 2 === 0;
// }
// console.log("El número 4 es par? ",esPar(4));    
// console.log("El número 7 es par? ",esPar(7));    
// console.log("El número 0 es par? ",esPar(0));    
// console.log("El número -2 es par? ",esPar(-2));   
// console.log("El número -3 es par? ",esPar(-3));
// //                            Ejercicio 2 

// function convertirCelsiusAFahrenheit(celsius){
//   return celsius * 1.8 + 32;
// }
// let celsius = prompt("Ingrese un valor en grados Celsius para convertirlo en Fahrenheit")
// console.log(celsius, " grados C son equivalentes a ",convertirCelsiusAFahrenheit(celsius), " grados F")

//                       Objetos en JavaScript
//                            Ejercicio 1

// let persona = {
//   nombre: "Pablo",
//   edad:22,
//   ciudad: "Madrid",

//   cambiarCiudad: function(nuevaCiudad){
//     this.ciudad = nuevaCiudad
// }}

// console.log("Antes de cambiar la ciudad:");
// console.log("Nombre: " + persona.nombre);
// console.log("Edad: " + persona.edad);
// console.log("Ciudad: " + persona.ciudad);

// persona.cambiarCiudad("Mendoza");

// console.log("Después de cambiar la ciudad:");
// console.log("Nombre: " + persona.nombre);
// console.log("Edad: " + persona.edad);
// console.log("Ciudad: " + persona.ciudad);

//                            Ejercicio 2
// let libro = {
//   titulo: "Hola(éxito en ventas)",
//   autor: "yo",
//   anio: 2024,

//   esAntiguo: function(){
//     let anioActual = new Date().getFullYear();
//     let edad = anioActual - this.anio;
//     if(edad > 10){
//       return true
//     }else{
//       return false
//     }
//   }

// }
// console.log("El libro \"" , libro.titulo , "\" es antiguo? ",libro.esAntiguo());

//                              Arrays
//                            Ejercicio 1


// let numeros = [1,2,3,4,5,6,7,8,9,10];
// let dobles = [];

// for(let i = 0; i<numeros.length; i++){
//     dobles.push(numeros[i]*2);
// }

// console.log("Números originales: " + numeros.join(',') + ".");
// console.log("Números multiplicados por 2: " + dobles.join(',') + ".");

// //                            Ejercicio 2

// let pares = [];
// for(let i = 2; pares.length < 10 ;i += 2){
//     pares.push(i);
// }
// console.log("Primeros 10 números pares: " + pares.join(",") + ".")l

//                        Introducción al DOM
//                            Ejercicio 1

document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('cambiar-color');
    
    boton.addEventListener('click', function() {
        let parrafos = document.querySelectorAll('p');

        parrafos.forEach(function(parrafo) {
            parrafo.style.color = "blue";
        });

        // for (let i = 0; i < parrafos.length; i++) {
        //     parrafos[i].style.color = "blue";
        // }
    });
});
//                            Ejercicio 2
document.addEventListener('DOMContentLoaded', function() {
    const botonAlerta = document.getElementById('miBoton');
    const campoTexto = document.getElementById('campoTexto');
    
    botonAlerta.addEventListener('click', function() {
        const valorIngresado = campoTexto.value; 
        alert("Has ingresado: " + valorIngresado); 
    });
});

//                          Eventos en DOM
//                            Ejercicio 1

document.addEventListener("DOMContentLoaded",function(){
    let elementos = document.querySelectorAll("li");

    elementos.forEach(function(elemento){
        elemento.addEventListener("click",function(){
            console.log(elemento.textContent);
        })
    })

})

//                            Ejercicio 1

document.addEventListener("DOMContentLoaded", function() {

    const campoTexto2 = document.getElementById('campoTexto2');
    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    
    boton1.addEventListener('click', function() {
        campoTexto2.disabled = true; 
    });
    boton2.addEventListener('click', function() {
        campoTexto2.disabled = false; 
    });
})

//                           Local Storage
//                            Ejercicio 1

document.addEventListener('DOMContentLoaded', function() {
    const formulario3 = document.getElementById('miFormulario3');
    const emailInput = document.getElementById('email');
    const correoGuardadoDiv = document.getElementById('correoGuardado');
    const eliminarCorreoBtn = document.getElementById('eliminarCorreo');

    
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        correoGuardadoDiv.textContent = `Correo guardado: ${correoGuardado}`;
        eliminarCorreoBtn.style.display = 'block'; 
    }

    
    formulario3.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const email = emailInput.value;
        localStorage.setItem('correo', email); 
        correoGuardadoDiv.textContent = `Correo guardado: ${email}`; 
        eliminarCorreoBtn.style.display = 'block'; 
        emailInput.value = ''; 
    });

    
    eliminarCorreoBtn.addEventListener('click', function() {
        localStorage.removeItem('correo'); 
        correoGuardadoDiv.textContent = ''; 
        eliminarCorreoBtn.style.display = 'none'; 
    });
});



