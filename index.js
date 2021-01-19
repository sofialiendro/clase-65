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


const seccionPrincipal = document.querySelector(".adopt")

const gato = {
    name: 'Calamardo',
    shortDesc:
        'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
        'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
}

seccionPrincipal.innerHTML = `
    <div class="card">
        <div class="card_img">
            <img src="${gato.img}"/>
        </div>
        <div class="card_info">
            <h3>${gato.name}</h3>
            <p>${gato.shortDesc}</p>
        </div>
    </div>
`

const cont = document.querySelector(".adopt")

cont.innerHTML = ``

gatos.map(gato => {
    cont.innerHTML += `<div class="card">
    <div class="card_img">
      <img src="${gato.img}" />
    </div>
    <div class="card_info">
      <h3>${gato.name}</h3>
      <p>
        ${gato.shortDesc}
      </p>
      <button>Ver mas</button>
    <i id="corazon" class="fa fa-heart"></i> <p id="likes">0<p>
    </div>
  </div>`;
});


const contExtra = document.querySelector(".adopt-extra");

contExtra.innerHTML = `<div class="card">  
<div class="card_img">
    <img src="${gatos[0].img}"/>
</div>
    <div class="card_info">
        <h3>${gatos[0].name}</h3>
        <p>${gatos[0].shortDesc}</p>
        <button>Ver más</button>
        <i id="corazon" class="fa fa-heart"></i><p id="likes">0</p>
    </div>
</div>`

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