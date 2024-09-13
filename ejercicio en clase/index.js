"use strict";
// Ejercicio 1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    acelerar(incremento) {
        this.velocidad += incremento;
        console.log(`El rayomaquin aceleró, Nueva velocidad: ${this.velocidad} km/h`);
    }
    frenar(decremento) {
        this.velocidad -= decremento;
        if (this.velocidad < 0) {
            this.velocidad = 0;
        }
        console.log(`El rayomaquin se detuvo, Nueva velocidad: ${this.velocidad} km/h`);
    }
    mostrarEstado() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h`);
    }
}
console.log("hi");
function obtenerTareasCompletadas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respuesta = yield fetch('https://jsonplaceholder.typicode.com/todos');
            if (!respuesta.ok) {
                throw new Error('Error en la petición');
            }
            // Convertimos la respuesta a formato JSON
            const tareas = yield respuesta.json();
            // Filtramos las tareas que están completadas
            const tareasCompletadas = tareas.filter(tarea => tarea.completed);
            // Mostramos las tareas completadas en la consola
            console.log('Tareas completadas:', tareasCompletadas);
        }
        catch (error) {
            // En caso de error, lo mostramos en la consola
            console.error('Error al obtener las tareas:', error);
        }
    });
}
obtenerTareasCompletadas();
// Ejercicio 2
class cubo {
}
