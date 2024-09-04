//========Imprimir en la consola==============
console.log("hola mundo"); // Esto imprimirá "hola mundo" en la consola del navegador o en el entorno de desarrollo.

//=======Variables================
// ¿Qué es una variable?
// Una variable es un contenedor que almacena un valor que puede cambiar durante la ejecución del programa.

// ¿Por qué no se ocupa 'var' actualmente?
// 'var' tiene alcance de función, lo que puede llevar a errores al sobrescribir o acceder a variables fuera de su contexto.
var nombre = "luciano";

// 'let' es el estándar:
// 'let' tiene alcance de bloque, lo que significa que la variable solo existe dentro del bloque de código donde fue declarada.
let nombre2 = "carlos";

if (true) {
  let nombre2 = "juan"; // Esta variable 'nombre2' solo existe dentro de este bloque.
  console.log(nombre2); // Imprime "juan".
}
console.log(nombre2); // Imprime "carlos", ya que la 'nombre2' original fuera del bloque no fue afectada.

// 'const': ¿Por qué no puede redefinirse?
const nombre3 = "Juan"; // 'const' se usa para variables cuyo valor no debe cambiar después de ser asignado.
// nombre3 = "Pedro"; // Esto generaría un error, ya que no se puede reasignar una variable declarada con 'const'.

// Tipos de Datos en JavaScript

// String: Cadena de texto
let texto = "Este es un string";

// Number: Números, enteros y decimales
let numero = 42;
let decimal = 3.14;

// Boolean: Verdadero o falso
let esVerdad = true;
let esFalso = false;

// objeto
let persona = {
  nombre: "Luciano",
  edad: 30,
};

// Acceso a los valores
console.log(persona.nombre); // Imprime "Luciano"
console.log(persona['edad']); // Imprime 30

// Asignación de nuevos valores
persona.nombre = "Carlos";
persona['edad'] = 31;

console.log(persona.nombre); // Imprime "Carlos"
console.log(persona['edad']); // Imprime 31


// Array: Listas de valores
let lista = [1, 2, 3, 4, 5];

// Undefined: Variable declarada pero no inicializada
let sinValor;
console.log(sinValor); // Imprimirá 'undefined' porque no se ha asignado ningún valor.

// Null: Ausencia intencional de valor
let vacio = null;


//=================== Operadores Aritméticos======================

// Suma (+)
let suma = 5 + 3; // Resultado: 8
// El operador '+' suma dos valores o también se usa para concatenar cadenas.

console.log(suma); // Imprime 8

// Resta (-)
let resta = 10 - 6; // Resultado: 4
// El operador '-' resta el segundo valor del primero.

console.log(resta); // Imprime 4

// Multiplicación (*)
let multiplicacion = 4 * 7; // Resultado: 28
// El operador '*' multiplica dos valores.

console.log(multiplicacion); // Imprime 28

// División (/)
let division = 20 / 4; // Resultado: 5
// El operador '/' divide el primer valor por el segundo.

console.log(division); // Imprime 5

// Módulo (%)
let modulo = 10 % 3; // Resultado: 1
// El operador '%' devuelve el resto de dividir el primer valor por el segundo.

console.log(modulo); // Imprime 1

// Incremento (++)
let incremento = 5;
incremento++; // Resultado: 6
// El operador '++' aumenta en 1 el valor de la variable.

console.log(incremento); // Imprime 6

// Decremento (--)
let decremento = 5;
decremento--; // Resultado: 4
// El operador '--' disminuye en 1 el valor de la variable.

console.log(decremento); // Imprime 4


//=============== Operadores Lógicos ===================

// AND lógico (&&)
let andLogico = (5 > 3 && 8 > 6); // Resultado: true
// El operador '&&' devuelve true si ambas expresiones son verdaderas.
console.log(andLogico); // Imprime true

// OR lógico (||)
let orLogico = (5 > 10 || 8 > 6); // Resultado: true
// El operador '||' devuelve true si al menos una de las expresiones es verdadera.
console.log(orLogico); // Imprime true

// NOT lógico (!)
let notLogico = !(5 > 3); // Resultado: false
// El operador '!' invierte el valor de la expresión, devolviendo true si es falsa y false si es verdadera.
console.log(notLogico); // Imprime false


// ===============Operadores de Comparación=================

// Igualdad (==)
let esIgual = (5 == "5"); // Resultado: true
// El operador '==' compara dos valores para ver si son iguales, sin importar el tipo (comparación no estricta).

console.log(esIgual); // Imprime true

// Igualdad estricta (===)
let esIgualEstricto = (5 === "5"); // Resultado: false
// El operador '===' compara dos valores para ver si son iguales y también verifica que sean del mismo tipo (comparación estricta).

console.log(esIgualEstricto); // Imprime false

// Desigualdad (!=)
let esDiferente = (5 != "5"); // Resultado: false
// El operador '!=' compara dos valores para ver si son diferentes, sin importar el tipo.

console.log(esDiferente); // Imprime false

// Desigualdad estricta (!==)
let esDiferenteEstricto = (5 !== "5"); // Resultado: true
// El operador '!==' compara dos valores para ver si son diferentes y también verifica que sean de diferentes tipos.

console.log(esDiferenteEstricto); // Imprime true

// Mayor que (>)
let esMayor = (10 > 5); // Resultado: true
// El operador '>' verifica si el primer valor es mayor que el segundo.

console.log(esMayor); // Imprime true

// Mayor o igual que (>=)
let esMayorIgual = (10 >= 10); // Resultado: true
// El operador '>=' verifica si el primer valor es mayor o igual que el segundo.

console.log(esMayorIgual); // Imprime true

// Menor que (<)
let esMenor = (3 < 7); // Resultado: true
// El operador '<' verifica si el primer valor es menor que el segundo.

console.log(esMenor); // Imprime true

// Menor o igual que (<=)
let esMenorIgual = (3 <= 3); // Resultado: true
// El operador '<=' verifica si el primer valor es menor o igual que el segundo.

console.log(esMenorIgual); // Imprime true


// =======================Condicionales==========================

// if
let edad = 18;
if (edad >= 18) {
    // Si la condición (edad >= 18) es verdadera
    console.log("Eres mayor de edad."); // Imprime "Eres mayor de edad."
} else {
    // Si la condición es falsa
    console.log("No eres mayor de edad."); // Imprime "No eres mayor de edad."
}

// if-else if-else
let puntuacion = 85;
if (puntuacion >= 90) {
    console.log("Excelente"); // Imprime "Excelente" si la puntuación es 90 o más.
} else if (puntuacion >= 70) {
    console.log("Bien"); // Imprime "Bien" si la puntuación está entre 70 y 89.
} else {
    console.log("Necesita mejorar"); // Imprime "Necesita mejorar" si la puntuación es menor a 70.
}

// switch
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes"); // Imprime "Lunes" si dia es 1.
        break;
    case 2:
        console.log("Martes"); // Imprime "Martes" si dia es 2.
        break;
    case 3:
        console.log("Miércoles"); // Imprime "Miércoles" si dia es 3.
        break;
    default:
        console.log("Día inválido"); // Imprime "Día inválido" si dia no es 1, 2, o 3.
        break;
}

// Operador ternario
let edad2 = 16;
let mensaje = (edad2 >= 18) ? "Eres adulto" : "Eres menor de edad";
// El operador ternario es una forma corta de un condicional if-else. 
// Si la condición (edad2 >= 18) es verdadera, se asigna "Eres adulto" a mensaje. 
// De lo contrario, se asigna "Eres menor de edad".
console.log(mensaje); // Imprime "Eres menor de edad"

//==================== Bucles en JavaScript====================

// 1. Bucles for
for (let i = 0; i < 5; i++) {
    // Se ejecuta 5 veces, con i tomando valores de 0 a 4
    console.log(i); // Imprime 0, 1, 2, 3, 4
}

// 2. Bucles for...of
const numeros = [10, 20, 30, 40, 50];
for (const numero of numeros) {
    // Itera sobre cada elemento del array 'numeros'
    console.log(numero); // Imprime 10, 20, 30, 40, 50
}

// 3. Bucles for...in
const objeto = { a: 1, b: 2, c: 3 };
for (const clave in objeto) {
    // Itera sobre cada clave del objeto
    console.log(clave, objeto[clave]); // Imprime "a 1", "b 2", "c 3"
}

// 4. Bucles while
let contador = 0;
while (contador < 5) {
    // Se ejecuta mientras la condición (contador < 5) sea verdadera
    console.log(contador); // Imprime 0, 1, 2, 3, 4
    contador++;
}

// 5. Bucles do...while
let contador2 = 0;
do {
    // Se ejecuta al menos una vez, y luego mientras la condición (contador2 < 5) sea verdadera
    console.log(contador2); // Imprime 0, 1, 2, 3, 4
    contador2++;
} while (contador2 < 5);


// ====================Funciones en JavaScript======================

// 1. Función Declarada
function saludar(nombre) {
    // Esta es una función declarada
    // La función puede ser llamada antes o después de su declaración
    return `Hola, ${nombre}!`;
}

console.log(saludar("Luciano")); // Imprime "Hola, Luciano!"

// 2. Función Expresada
const sumar = function(a, b) {
    // Esta es una función expresada
    // La función es asignada a una variable, por lo que debe ser llamada después de su declaración
    return a + b;
}

console.log(sumar(5, 3)); // Imprime 8

// 3. Función Flecha (Arrow Function)
const multiplicar = (x, y) => {
    // Esta es una función flecha
    // Las funciones flecha tienen una sintaxis más corta y no tienen su propio 'this'
    return x * y;
}

console.log(multiplicar(4, 5)); // Imprime 20

// Función flecha con retorno implícito
const dividir = (x, y) => x / y;
// Si la función solo tiene una expresión, puedes omitir las llaves y la palabra 'return'

console.log(dividir(20, 4)); // Imprime 5


// diferencia con el this

// Ejemplo con una función normal
const objeto1 = {
    nombre: 'Objeto 1',
    saludar: function() {
        // En una función normal, 'this' se refiere al objeto que llama a la función
        console.log('Hola desde', this.nombre);
    }
};

objeto1.saludar(); // Imprime: "Hola desde Objeto 1"

// Ejemplo con una función flecha
const objeto2 = {
    nombre: 'Objeto 2',
    saludar: () => {
        // En una función flecha, 'this' no tiene su propio contexto, sino que toma el contexto del lugar donde se definió
        console.log('Hola desde', this.nombre);
    }
};

objeto2.saludar(); // Imprime: "Hola desde undefined"


//METODOS ARRAYS Y STRINGS

// Métodos de Arreglos

// push() - Agrega uno o más elementos al final del arreglo
let frutas = ['manzana', 'banana'];
frutas.push('cereza');
console.log(frutas); // ['manzana', 'banana', 'cereza']

// pop() - Elimina el último elemento del arreglo y lo devuelve
let ultimo = frutas.pop();
console.log(ultimo); // 'cereza'
console.log(frutas); // ['manzana', 'banana']

// shift() - Elimina el primer elemento del arreglo y lo devuelve
let primero = frutas.shift();
console.log(primero); // 'manzana'
console.log(frutas); // ['banana']

// unshift() - Agrega uno o más elementos al principio del arreglo
frutas.unshift('mango');
console.log(frutas); // ['mango', 'banana']

// splice() - Cambia el contenido del arreglo eliminando, reemplazando o agregando elementos
frutas.splice(1, 1, 'kiwi', 'papaya');
console.log(frutas); // ['mango', 'kiwi', 'papaya']

// slice() - Crea una copia superficial de una porción del arreglo
let nuevasFrutas = frutas.slice(1, 3);
console.log(nuevasFrutas); // ['kiwi', 'papaya']

// forEach() - Ejecuta una función para cada elemento del arreglo
frutas.forEach(fruta => console.log(fruta));
// 'mango'
// 'kiwi'
// 'papaya'

// map() - Crea un nuevo arreglo con los resultados de la función aplicada a cada elemento
let frutasEnMayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEnMayusculas); // ['MANGO', 'KIWI', 'PAPAYA']

// filter() - Crea un nuevo arreglo con los elementos que pasan la prueba de la función
let frutasConP = frutas.filter(fruta => fruta.includes('p'));
console.log(frutasConP); // ['papaya']

// find() - Devuelve el primer elemento que cumple con la condición dada
let frutaEncontrada = frutas.find(fruta => fruta.startsWith('k'));
console.log(frutaEncontrada); // 'kiwi'

// sort() - Ordena los elementos del arreglo
let frutasOrdenadas = frutas.sort();
console.log(frutasOrdenadas); // ['kiwi', 'mango', 'papaya']

// reverse() - Invierte el orden de los elementos del arreglo
let frutasRevertidas = frutas.reverse();
console.log(frutasRevertidas); // ['papaya', 'mango', 'kiwi']


// Métodos de Strings

// charAt() - Devuelve el carácter en la posición especificada
let saludo = 'Hola';
console.log(saludo.charAt(1)); // 'o'

// concat() - Combina dos o más cadenas de texto
let saludoCompleto = saludo.concat(' Mundo');
console.log(saludoCompleto); // 'Hola Mundo'

// includes() - Verifica si la cadena contiene el valor especificado
console.log(saludo.includes('la')); // true

// indexOf() - Devuelve la primera posición en la que se encuentra el valor especificado
console.log(saludo.indexOf('a')); // 3

// slice() - Extrae una parte de la cadena y devuelve una nueva cadena
console.log(saludo.slice(1, 4)); // 'ola'

// split() - Divide una cadena en un arreglo de subcadenas
let palabras = saludo.split(' ');
console.log(palabras); // ['Hola']

// toLowerCase() - Convierte la cadena a minúsculas
console.log(saludo.toLowerCase()); // 'hola'

// toUpperCase() - Convierte la cadena a mayúsculas
console.log(saludo.toUpperCase()); // 'HOLA'

// trim() - Elimina los espacios en blanco al inicio y al final de la cadena
let textoConEspacios = '  hola  ';
console.log(textoConEspacios.trim()); // 'hola'

// replace() - Reemplaza una parte de la cadena con otra cadena
let saludoModificado = saludo.replace('Hola', 'Hello');
console.log(saludoModificado); // 'Hello'
