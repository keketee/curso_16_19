# 2024-06-04

## Bucles 02

1. Definición y propósito:

    - Los bucles permiten ejecutar un bloque de código repetidamente hasta que se cumpla una condición específica.

2. Tipos de bucles:

    - while
    - do...while

### Bucle `while`

1. Definición:

    - Se usa para ejecutar un bloque de código siempre que una condición especificada sea verdadera.

2. Sintaxis básica:

```javascript
while (condición) {
    // código a ejecutar mientras la condición sea verdadera
}
```

3. Ejemplo básico:

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

### Bucle `do...while`

1. Definición:

    - Similar al while, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de la ejecución del bloque.

2. Sintaxis básica:

```javascript
do {
    // código a ejecutar al menos una vez y luego mientras la condición sea verdadera
} while (condición);
```

3. Ejemplo básico:

```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

### Comparación de los tipos de bucles `while`

| Bucle | Uso | Ejemplo |
|-|-|-|
| while | Iterar mientras una condición sea verdadera | while (cond) { ... } |
| do...while | Iterar al menos una vez y luego mientras una condición sea verdadera | do { ... } while (cond) |

### Ejemplos avanzados y actividades

#### Ejemplo 1: Usar while para repetir una acción hasta que se cumpla una condición

```javascript
let contador = 0;

while (contador < 3) {
    console.log("El contador es: " + contador);
    contador++;
}
```

#### Ejemplo 2: Usar do...while para asegurar que un código se ejecute al menos una vez

```javascript
let numero;

do {
    numero = prompt("Introduce un número mayor que 10:");
} while (numero <= 10);

console.log("El número introducido es mayor que 10: " + numero);
```

### Actividades prácticas

1. Ejercicio 1: Usar while para repetir una acción hasta que se cumpla una condición

    - Crear un bucle while que repita una acción hasta que una variable alcance un valor específico.

2. Ejercicio 2: Usar do...while para asegurar que un código se ejecute al menos una vez

    - Crear un bucle do...while que pida al usuario un número mayor que 10 y repita la solicitud hasta que se cumpla la condición.
