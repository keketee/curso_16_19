const botonColor = document.querySelector('#botonColor')

botonColor.addEventListener('click', function (evento) {
  console.log(evento)
  const container = document.querySelector('.container')
  const quedanElementosEnElContainer = container.children.length > 0

  console.log("inicia cambiarColorTextoAVerde")
  console.log("elementos del div container!", container.children)

  if (quedanElementosEnElContainer) {
    const elementoHijo = container.children[0]

    console.log('color actual de texto',elementoHijo.style.color)

    let color
    if (elementoHijo.style.color === "green") {
      color = "black"
    } else {
      color = "green"
    }

    elementoHijo.style.color = color
    console.log('color nuevo de texto',elementoHijo.style.color)
  } else {
    console.log("ya no quedan elementos a los que cambiar el color de texto!");
  }
  console.log("finaliza cambiarColorTextoAVerde")
})

// function cambiarColorTextoAVerde(evento) {
//   console.log(evento)
//   const container = document.querySelector('.container')

//   console.log("cambiarColorTextoAVerde")
//   console.log("elementos del div container!", container.children)

//   if (container.children.length > 0) {
//     const elementoHijo = container.children[0]
//     elementoHijo.style.color = "green"

//     console.log("color cambiado a elemento", elementoHijo)
//   } else {
//     console.log("ya no quedan elementos a los que cambiar el color de texto!");
//   }
// }

// botonColor.addEventListener('click', cambiarColorTextoAVerde)
