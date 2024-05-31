# 2024-05-31

## Condicionales

### Que es una condicion?

Una condición, en el contexto de la programación, es una expresión que evalúa si cierta afirmación es verdadera o falsa. En términos más técnicos, es una expresión booleana que determina si se cumple cierta situación o criterio en un programa.

Las condiciones son fundamentales en la lógica de control de flujo de un programa, ya que permiten tomar decisiones y ejecutar diferentes bloques de código según el resultado de la evaluación de la condición.

En muchos lenguajes de programación, incluido JavaScript, las condiciones suelen involucrar operadores de comparación (como mayor que `(>)`, menor que `(<)`, igual a `(===)`, etc.), operadores lógicos (como AND `(&&)`, OR `(||)`, NOT `(!)`), y variables o valores cuyo estado se está evaluando.

### Evaluando de bloques de control

  ```javascript
  if (condición) {
    // código a ejecutar si la condición es verdadera
  } else {
    // ejecuta este otro código si la condición es falsa
  }
  ```

  ```javascript
  if (condición) {
    // código a ejecutar si la condición es verdadera
  }
  ```

  ```javascript
  if (condición 1) {
    // código a ejecutar si la condición 1 es verdadera
  } else if (condición 2) {
    // código a ejecutar si la condición 2 es verdadera
  } else {
    // ejecuta este otro código si las condiciones son falsas
  }
  ```

  ```javascript
  if (condición A) {
    // código a ejecutar si la condición A es verdadera
  } else {
    // sub condicion anidada
    if (condición B) {
      // código a ejecutar si la condición B es verdadera
    }
    // ejecuta este otro código si la condición A es falsa
  }
  ```

#### Ejemplos

<details>
<summary>1.  Básico de if</summary>

```javascript
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}
```

</details>

<details>
<summary>2.  con if y else</summary>

```javascript

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
```

</details>

<details>
<summary>3.  con if, else if y else</summary>

```javascript
let edad = 15;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else if (edad >= 13) {
    console.log("Eres adolescente.");
} else {
    console.log("Eres un niño.");
}
```

</details>

<details>
<summary>4.  con Múltiples Condiciones en if y else if
</summary>

```javascript
let hora = 10;

if (hora < 12) {
    console.log("Buenos días.");
} else if (hora < 18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}
```

</details>

<details>
<summary>5.  de Combinación de Condiciones con Operadores Lógicos</summary>

```javascript
let temperatura = 25;
let estaLloviendo = false;

if (temperatura > 30 && !estaLloviendo) {
    console.log("Hace calor y no está lloviendo.");
} else if (temperatura <= 30 && estaLloviendo) {
    console.log("Hace menos de 30 grados y está lloviendo.");
} else {
    console.log("Condiciones no específicas.");
}
```

</details>

<details>
<summary>6.  de Uso de Condiciones Anidadas</summary>

```javascript
let nota = 85;

if (nota >= 90) {
    console.log("Sobresaliente.");
} else {
    if (nota >= 75) {
        console.log("Notable.");
    } else {
        if (nota >= 60) {
            console.log("Aprobado.");
        } else {
            console.log("Reprobado.");
        }
    }
}
```

</details>

<details>
<summary>7.  con Comparaciones de Cadenas</summary>

```javascript
let color = "rojo";

if (color === "rojo") {
    console.log("El color es rojo.");
} else if (color === "azul") {
    console.log("El color es azul.");
} else {
    console.log("El color es desconocido.");
}
```

</details>

<details>
<summary>8.  con Comparaciones de Booleans</summary>

```javascript
let esAdulto = true;

if (esAdulto) {
    console.log("Es un adulto.");
} else {
    console.log("No es un adulto.");
}
```

</details>

### Operador Ternario

El operador ternario en JavaScript es una forma concisa de escribir una declaración condicional if-else. Se llama "ternario" porque opera con tres operandos: una condición, una expresión a ejecutar si la condición es verdadera y una expresión a ejecutar si la condición es falsa.

La sintaxis del operador ternario es la siguiente:

```javascript
condición ? expresiónSiVerdadera : expresiónSiFalsa;
```

Asignación de valores basados en una condición:

```javascript
let edad = 20;
let mensaje = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
console.log(mensaje); // Imprime "Eres mayor de edad."
```

#### Consideraciones de uso

- Legibilidad: Aunque el operador ternario puede hacer que el código sea más conciso, puede afectar la legibilidad si se usa en exceso o de manera anidada. En estos casos, es mejor usar declaraciones if-else tradicionales.

- Simpleza: Úsalo para condiciones simples. Si la lógica es compleja, es preferible usar if-else para mantener la claridad del código.

Ejemplo anidado:

```javascript
let puntuacion = 85;
let calificacion = puntuacion >= 90 ? "A" :
                   puntuacion >= 80 ? "B" :
                   puntuacion >= 70 ? "C" :
                   puntuacion >= 60 ? "D" : "F";
console.log(calificacion); // Imprime "B"
```
