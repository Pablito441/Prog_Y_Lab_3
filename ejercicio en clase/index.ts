// Ejercicio 1

class Coche{
    marca: String;
    modelo: String;
    velocidad: number;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }

    acelerar(incremento: number):void{
        this.velocidad += incremento;
        console.log(`El rayomaquin aceleró, Nueva velocidad: ${this.velocidad} km/h`);
    }
    frenar(decremento: number):void{
        this.velocidad-= decremento;
        if(this.velocidad <0){
            this.velocidad = 0
        }
        console.log(`El rayomaquin se detuvo, Nueva velocidad: ${this.velocidad} km/h`)
    }

    mostrarEstado():void{
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h`);

    }
}
console.log("hi")

// const miCoche = new Coche('Toyota', 'Corolla');
// miCoche.mostrarEstado(); 
// miCoche.acelerar(50); 
// miCoche.frenar(20);   
// miCoche.mostrarEstado();

// Ejercicio 2

interface Tarea {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function obtenerTareasCompletadas() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        if (!respuesta.ok) {
            throw new Error('Error en la petición');
        }

        // Convertimos la respuesta a formato JSON
        const tareas: Tarea[] = await respuesta.json();

        // Filtramos las tareas que están completadas
        const tareasCompletadas = tareas.filter(tarea => tarea.completed);

        // Mostramos las tareas completadas en la consola
        console.log('Tareas completadas:', tareasCompletadas);
    } catch (error) {
        // En caso de error, lo mostramos en la consola
        console.error('Error al obtener las tareas:', error);
    }
}

obtenerTareasCompletadas();

// Ejercicio 2
class cubo{
    private areaMovimientoElement: HTMLElement;
    private cuboElement: HTMLElement;
    private velocidadDeMovimiento: number;

    constructor()

}

