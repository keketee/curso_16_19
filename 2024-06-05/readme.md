# 2024-06-05

## Interactuando con el DOM

Introducción a la Manipulación del DOM en el Navegador

## Objetivos

1. Comprender qué es el DOM y su importancia en el desarrollo web.
2. Aprender a seleccionar elementos del DOM.
3. Explorar métodos para manipular y modificar elementos del DOM.
4. Eventos del DOM.
5. Practicar con los ejercicios de manipulación del DOM y eventos.

## Contenido de la clase

### 1. Introducción al DOM

- Definición y concepto básico del DOM.

      Es una representación programática de la estructura de un documento HTML (o XML) que se carga en un navegador web. Esencialmente, el DOM es una interfaz de programación que permite a los programas y scripts acceder y manipular dinámicamente los elementos, atributos y contenido de una página web.

- Diferencias entre el DOM y el HTML estático.
  - HTML estático:

        Es simplemente el código HTML que se escribe en un archivo y se entrega al navegador web sin cambios. Es estático en el sentido de que no cambia ni responde a las interacciones del usuario o a eventos dinámicos.
  - DOM:

        Es una representación dinámica del HTML en la memoria del navegador. Se crea automáticamente cuando el navegador carga una página web y se actualiza en tiempo real a medida que los usuarios interactúan con la página. Por lo tanto, el DOM refleja el estado actual y la estructura de la página, que puede cambiar dinámicamente mediante scripts o eventos del usuario.

### 2. Seleccionando Elementos del DOM

- Con el siguiente HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .newClass {
      border: 1px solid red;
      background-color: white;
    }
  </style>
</head>
<body>
  <div id="myElementId" class="myClass"></div>
  <div class="myClass"></div>
</body>
</html>
```

- Uso de métodos como getElementById, getElementsByClassName, getElementsByTagName, querySelector, y querySelectorAll.

- Obtener elemento por ID.

```javascript
// Ejemplo de selección de elementos del DOM
// Obtener elemento por ID
const myElement = document.getElementById('myElementId');
```

- Obtener elementos por clase.

```javascript
// Ejemplo de selección de elementos del DOM
// Obtener elementos por clase
const elementsByClass = document.getElementsByClassName('myClass');
```

- Obtener elementos por etiqueta.

```javascript
// Ejemplo de selección de elementos del DOM

// Obtener elementos por etiqueta
const elementsByTag = document.getElementsByTagName('div');
```

- Obtener elementos con querySelector.

```javascript
// Ejemplo de selección de elementos del DOM

// Obtener elementos con querySelector
const element = document.querySelector('.myClass');
```

- Obtener elementos con querySelectorAll.

```javascript
// Ejemplo de selección de elementos del DOM
// Obtener elementos con querySelectorAll
const elements = document.querySelectorAll('.myClass');
```

### 3. Manipulando Elementos del DOM

- Cambiando el contenido de un elemento.

```javascript
// Ejemplo de manipulación del DOM
// Cambiar contenido de un elemento
myElement.innerHTML = 'Nuevo contenido';
```

- Modificando estilos CSS.

```javascript
// Ejemplo de manipulación del DOM
// Modificar estilos CSS
myElement.style.color = 'red';
```

- Añadiendo y eliminando clases.

```javascript
// Ejemplo de manipulación del DOM

// Añadir clase
myElement.classList.add('newClass');

// Eliminar clase
myElement.classList.remove('newClass');
```

- Manipulando atributos.

```javascript
// Ejemplo de manipulación del DOM
// Manipular atributos
myElement.setAttribute('data-custom', 'value');
```

- Insertando y eliminando elementos.

```javascript
// Ejemplo de manipulación del DOM
// Insertar elemento
const newElement = document.createElement('div');
myElement.appendChild(newElement);

// Eliminar elemento
myElement.removeChild(newElement);
```

### 4. Eventos del DOM

- Introducción a eventos del DOM como click.
- Vinculando eventos a elementos del DOM.

```javascript
// Ejemplo de manejo de eventos del DOM
// Agregar evento click a un botón
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    console.log('Botón clickeado');
});
```

### 5. Practicar con los ejercicios de manipulación del DOM y eventos
