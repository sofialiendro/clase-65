const gatos = [
    {
      name: 'Rodolfo',
      shortDesc:
        'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg',
      colores: ['tricolor', 'negro', 'blanco', 'naranja', 'rayado'],
      sexo: 'm',
    },
  
    {
      name: 'Muzzarella',
      shortDesc:
        'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg',
      colores: ['gris'],
      sexo: 'f',
    },
  
    {
      name: 'Artilugia',
      shortDesc:
        'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg',
      colores: ['negro', 'blanco'],
      sexo: 'f',
    },
  
    {
      name: 'Wosito',
      shortDesc:
        'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s',
      colores: ['rayado'],
      sexo: 'm',
    },
  
    {
      name: 'Calamardo',
      shortDesc:
        'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
      colores: ['negro'],
      sexo: 'm',
    },

    { // puedo agregar todos los gatos extra q quiera y la logica ya esta para todos
        name: 'Calamardo2',
        shortDesc:
          'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
        longDesc:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
        img:
          'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
        colores: ['negro'],
        sexo: 'm',
      },
];


// const seccionPrincipal = document.querySelector(".adopt")

// const gato = {
//     name: 'Calamardo',
//     shortDesc:
//         'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
//     longDesc:
//         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
//     img:
//         'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
//     colores: ['negro'],
//     sexo: 'm',
// }

// seccionPrincipal.innerHTML = `
//     <div class="card">
//         <div class="card_img">
//             <img src="${gato.img}"/>
//         </div>
//         <div class="card_info">
//             <h3>${gato.name}</h3>
//             <p>${gato.shortDesc}</p>
//         </div>
//     </div>
// `

// const cont = document.querySelector(".adopt")

// cont.innerHTML = ``

// gatos.map(gato => {
//     cont.innerHTML += `<div class="card">
//     <div class="card_img">
//       <img src="${gato.img}" />
//     </div>
//     <div class="card_info">
//       <h3>${gato.name}</h3>
//       <p>
//         ${gato.shortDesc}
//       </p>
//       <button>Ver mas</button>
//     <i id="corazon" class="fa fa-heart"></i> <p id="likes">0<p>
//     </div>
//   </div>`;
// });


// const contExtra = document.querySelector(".adopt-extra");

// contExtra.innerHTML = `<div class="card">  
// <div class="card_img">
//     <img src="${gatos[0].img}"/>
// </div>
//     <div class="card_info">
//         <h3>${gatos[0].name}</h3>
//         <p>${gatos[0].shortDesc}</p>
//         <button>Ver más</button>
//         <i id="corazon" class="fa fa-heart"></i><p id="likes">0</p>
//     </div>
// </div>`


const contenedor = document.querySelector('.adopt');

const mostrarEnHTML = (array) => {
  contenedor.innerHTML = '';
  array.map(gato => {
    contenedor.innerHTML += `<div class="card" data-sexo="${gato.sexo}">
    <div class="card_img">
      <img src="${gato.img}" />
    </div>
    <div class="card_info">
      <h3>${gato.name}</h3>
      <p>
        ${gato.shortDesc}
      </p>
      <button data-name="${gato.name}" class="botonVerMas">Ver mas</button>
  
    <i id="corazon" class="fa fa-heart"></i> <p id="likes">0<p>
    </div>
  </div>`;
  });
};

// console.log(gatos)
mostrarEnHTML(gatos);


const corazones = document.querySelectorAll("#corazon")
const likes = document.querySelectorAll("#likes")


//forEach !!!!!!!!!!!

corazones.forEach((corazon, indiceCorazon) => {   // para ver a q corazon hicieron click corazones.forEach ((corazon, indice) => .... ) y poner console.log("me hicieron clic", indice) dentro del onclick
    corazon.onclick = () => {
        console.log("me hicieron click", indiceCorazon)

        // version corta:

        // let cantidadDeLikes = Number(likes[indiceCorazon].textContent);
        // cantidadDeLikes++
        // likes[indiceCorazon].textContent = cantidadDeLikes

        likes.forEach((like, indiceLike) => {
            if (indiceCorazon === indiceLike) {
                let cantidadDeLikes = Number(like.textContent);  // no likes porque es una lista, hay que poner el elemento de la lista
                cantidadDeLikes++
                like.textContent = cantidadDeLikes;
            }
        })
        
        
    };
});



// corazon.onclick = () => {
//     cantidadDeLikes++
//     likes.textContent = cantidadDeLikes
// }


const botones = document.querySelectorAll(".botonVerMas")
const modal = document.querySelector(".modal")
const modalContenido = document.querySelector(".modalContenido")
const cerrarModal = document.querySelector("#cerrarModal")


botones.forEach((boton, indiceBoton) => {
  boton.onclick = () => {
    modal.classList.remove("noMostrar")
    console.log(indiceBoton)

    modalContenido.innerHTML = `
    Nombre: ${gatos[indiceBoton].name}
    Descripcion: ${gatos[indiceBoton].longDesc}
    `
  }
})

///otra opcion para lo anterior:

// botones.forEach((boton, indiceBoton) => {
//   boton.onclick = () => {
//     gatos.map((gato) => {
//       if (gato.name === boton.dataset.name) {
//         modalContenido.innerHTML = `
//         Nombre: ${gato.name}
//         Descripcion: ${gato.longDesc}
//         `
//       }
//     })
//     modal.classList.remove("noMostrar")    
//   }
// })

cerrarModal.onclick = () => {
  modal.classList.add("noMostrar")
}

// filtro por sexo

const form = document.querySelector('form');

form.onsubmit = e => {
  e.preventDefault();

  const radios = document.querySelectorAll('input[type=radio]');

  const baneadas = ['Marian', 'Angie', 'Euge', 'Agus'];

  radios.forEach(radio => {
    if (radio.checked) {
      contenedor.innerHTML = '';

      if (radio.value === 'i') {
        return mostrarEnHTML(gatos);
      }

      const gatosFiltrados = gatos.filter(gato => {
        return gato.sexo === radio.value;
      });

      mostrarEnHTML(gatosFiltrados);
    }
  });
};


// LECCION DE ESTA CLASE:
// primero dejo la data en javascript tal como la quiero
// luego la paso a html 


// DEFINICION:  funciones puras y funciones impuras

// mala definicion: una funcion pura trabaja solo con informacion contenida dentro de si,
// sin modificar nada fuera de su scope. Son imposibles de testear las impuras, los efectos secundarios son lo peor qe tienen 
//(que son cambios q estan fuera del scope de la funcion que no podemos ver a primera vista)

// buena: dados los mismos parametros de entrada, tendremos la misma info de salida
// no tiene efectos secundarios (o efectos colaterales)siempre tratamos trabajar con funciones puras. Son las que se usan para testear


let numero = 18


const funcionImpura = () => {
  numero++
}

funcionImpura()
console.log(numero)
funcionImpura()
console.log(numero)

const funcionPura = (numeroParam) => {  // recibe parametro
  numeroParam++
  return numeroParam
}

const primero = funcionPura(numero)
const segundo = funcionPura(numero)

console.log(primero)
console.log(segundo)


// NO USAR FUNCIONES QUE MODIFIQUEN INFO MÁS ALLA DE SU SCOPE, POR ESO mejor usar siempre funciones PURAS

// METODOS IMPUROS Q MODIFICAN EL ARRAY ORIGINAL: push, pop, unshift, shift !!!!!










// SIEMPRE mantener una copia de la info original:

const baneadas = ["marian", "angie", "euge", "agus"]
const baneadas2 = ["hola", "chau"]

// const baneadasMasLargo = [... baneadas]  ES UNA MANERA

const baneadasMasLargo = baneadas.map((baneada) => {
  return baneada + 1
})   // ES OTRA MANERA

baneadasMasLargo.push("Sol")

console.log(baneadas)
console.log(baneadasMasLargo)









// OPERACIONES INMUTABLES

const masBaneadas = baneadas

masBaneadas.push(baneadas)

console.log(baneadas)
console.log(masBaneadas)

const persona = {
  nombre: "Ana", 
  edad: 28,
  apodo: "La NO dictadora"
}

const persona2 = {
  nombre: "Ana2", 
  edad: 282,
  apodo: "La NO dictadora2"
}

const masPersona = persona

masPersona.edad = 28

console.log(persona)
console.log(masPersona)


// COPIAS DE SEGURIDAD :

// // ARRAYS 

const copiaArray = [...baneadas]

// // OBJETOS 

const copiaObjeto = {...persona}


// UNIR ARRAYS con seguridad sin modificar array original, o sea SIN PUSH

const dosArraysUnidos = [...baneadas, ...baneadas2]


// UNIR OBJETOS con seguridad sin modificar obj original, o sea SIN PUSH

const dosObjetosUnidos = {...persona, ...persona2}


console.log(dosArraysUnidos)

console.log(dosObjetosUnidos)


// AGREGAR ELEMENTO A ARRAY ORIGINAL, sin modificar array original

const baneadasMasSol = [...baneadas, "Sol"]

// AGREGAR PROPIEDAD A OBJETO ORIGINAL, sin modificar objeto original

const personaConMasPropiedades = {...persona, hijos: 2}

// ELIMINAR PROPIEDAD A OBJETO ORIGINAL, sin modificar objeto original

const {edad, ...masDatos} = persona

console.log(masDatos) // hacemos copia de persona en MasDatos sin edad

// MODIFICAR ELEMENTO A OBJETO ORIGINAL, sin modificar objeto original

const personaActualizada = {...persona, apodo: "Nani"} // modificamos el apodo

// Lo mismo para arrays



