# 2024-06-03

## Coerción de tipos en JavaScript

1. **Definición**:
    La coerción de tipos es la conversión automática o implícita de valores de un tipo de dato a otro.

2. **Tipos de coerción**:

- **Coerción implícita**: Realizada automáticamente por el intérprete del lenguaje.
- **Coerción explícita**: Realizada manualmente por el programador usando funciones de conversión.

### Ejemplos prácticos con coerción de tipos

  **Ejemplo 1**: Coerción implícita en un bloque "if"

```javascript
// Aquí, el número 0 se considera false y cualquier otro número true
let x = 0;

if (x) {
    console.log("x es verdadero (true)");
} else {
    console.log("x es falso (false)");
}
```

**Explicación**:

- En JavaScript, el valor 0 se considera false en un contexto booleano. Por lo tanto, el bloque else se ejecutará.

**Ejemplo 2**: Coerción explícita en un bloque "if"

```javascript
// Forzamos la conversión de un string a entero
let numero = "10";

if (Number(numero) === 10) {
    console.log("El número es 10");
} else {
    console.log("El número no es 10");
}
```

**Explicación**:

- Aquí convertimos explícitamente el string "10" a un entero usando Number(numero). Como el resultado es 10, el bloque if se ejecutará.

**Ejemplo 3**: Coerción implícita y "else if"

```javascript

// Valores de diferentes tipos evaluados en un contexto booleano
let valor = "";

if (valor) {
    console.log("Valor no está vacío");
} else if (valor === "") {
    console.log("Valor es una cadena vacía");
} else {
    console.log("Valor es otra cosa");
}
```

**Explicación**:

- Una cadena vacía ("") se evalúa como false. El bloque else if se ejecutará porque la condición valor === "" es verdadera.

**Ejemplo 4**: Coerción de tipos en comparación

```javascript
// Comparación entre entero y string
let numero = 5;
let texto = "5";

if (numero == texto) {
    console.log("El número y el texto son iguales (==) después de la conversión implícita");
} else {
    console.log("El número y el texto no son iguales");
}

if (numero === Number(texto)) {
    console.log("El número y el texto son iguales (===) después de la conversión explícita");
} else {
    console.log("El número y el texto no son iguales");
}
```

**Explicación**:

- El operador == realiza una coerción implícita, por lo que numero == texto es true.
- El operador === no realiza coerción implícita, por lo que numero === texto es false.
- Convertimos explícitamente texto a un número con Number(texto) para que numero === Number(texto) sea true.

### Actividades prácticas

**Ejercicio 1**: Evaluación de diferentes tipos en un bloque "if"

- Crear variables de diferentes tipos (number, string, boolean, object) y evaluar su valor booleano en un bloque if.
- Discuta por qué ciertos valores se consideran true y otros false.

**Ejercicio 2**: Conversión explícita y comparación

- Pida a los estudiantes que escriban un programa donde comparen una entrada de usuario (string) con un número, convirtiendo el string a número explícitamente.
- Ejemplo: comparar una entrada de edad con la mayoría de edad (18).

**Ejercicio 3**: Uso de "else if" para validar entradas

- Crear un programa que valide la entrada de un usuario para diferentes rangos de valores y muestre mensajes específicos para cada rango.
- Ejemplo: Evaluar si una temperatura dada está en un rango bajo, medio o alto.

## Bucles 01

### Prerequisitos

Los bucles suelen utilizarse con `iterables` y `propiedades enumerables`

- Iterables como: arrays, strings, sets o maps
- Propiedades enumerables como: arrays, strings, sets o maps

### Definicion y tipos

1. Definición y propósito:

    - Los bucles permiten ejecutar un bloque de código repetidamente hasta que se cumpla una condición específica.

2. Tipos de bucles:

    - for
    - for...in
    - for...of

### Bucle `for`

1. Definición:

    - Se usa para ejecutar un bloque de código un número determinado de veces.
Sintaxis básica:

```javascript
for (inicialización; condición; incremento/decremento) {
    // código a ejecutar en cada iteración
}
```

3. Ejemplo básico:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Bucle `for...in`

1. Definición:

    - Se usa para iterar sobre las propiedades enumerables de un objeto.

2. Sintaxis básica:

```javascript
for (let propiedad in objeto) {
    // código a ejecutar para cada propiedad
}
```

3. Ejemplo básico:

```javascript
const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
```

### Bucle `for...of`

1. Definición:

    - Se usa para iterar sobre objetos iterables (como arrays, strings, mapas, sets, etc.).

2. Sintaxis básica:

```javascript
for (let valor of iterable) {
    // código a ejecutar para cada valor
}
```

3. Ejemplo básico:

```javascript
const numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
    console.log(numero);
}
```

### Comparación de los tipos de bucles `for`

| Bucle | Uso | Ejemplo |
|-|-|-|
| for | Iterar un número determinado de veces | for (let i = 0; i < 10; i++) { ... } |
| for...in | Iterar sobre las propiedades enumerables de un objeto | for (let prop in obj) { ... } |
| for...of | Iterar sobre valores de un objeto iterable | for (let val of arr) { ... } |

### Ejemplos avanzados y actividades

#### Ejemplo 1: Usar for para iterar sobre un array

```javascript
const frutas = ["manzana", "banana", "cereza"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

#### Ejemplo 2: Usar for...in para iterar sobre un objeto

```javascript
const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };

for (let propiedad in coche) {
    console.log(propiedad + ": " + coche[propiedad]);
}
```

#### Ejemplo 3: Usar for...of para iterar sobre un array

```javascript
const colores = ["rojo", "verde", "azul"];

for (let color of colores) {
    console.log(color);
}
```

### Actividades prácticas

1. Ejercicio 1: Usar for para calcular la suma de un array de números

    - Crear un array de números y usar un bucle for para calcular su suma.

2. Ejercicio 2: Usar for...in para mostrar las propiedades de un objeto

    - Crear un objeto con información personal y usar un bucle for...in para mostrar sus propiedades y valores.

3. Ejercicio 3: Usar for...of para iterar sobre un array y convertir sus valores a mayúsculas

    - Crear un array de strings y usar un bucle for...of para convertir cada string a mayúsculas.
