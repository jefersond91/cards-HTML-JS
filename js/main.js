// let body = document.querySelector("body");
// let title = document.createElement("h1");
/* A template literal. */

/* Setting the id of the title element to "title". */
// title.id = "title";
// title.className = "title-class";
// title.textContent = "ESTE ES UN TITULO DINAMICO"
// body.appendChild( title);

// let span = document.createElement("span");
// span.textContent = " esto es un span"
// title.appendChild( span);

// let img = document.createElement("img");

// img.src = "https://picsum.photos/seed/picsum/200/300"
// body.prepend( img );

// let p = document.querySelector("p")
// p.classList.add("main-p");
// p.innerHTML += `<h2> SOY EL OTRO TITULO</h2>
// <img src="https://picsum.photos/100/100" alt="">`;

// // eliminar o remover un elemento del dom
// let paragraph = document.getElementsByTagName("p")[0];
// paragraph.remove()
const users = [
  {
    name: 'Jeferson',
    age: 28,
    email: 'jeferson@uaq.mx',
    social: [
      { name: 'facebook', url: 'facebook/jeferson' },
      { name: 'twitter', url: 'twitter/jeferson' },
    ],
    gender: 'Male',
  },
  {
    name: 'Daniela',
    age: 29,
    email: 'daniela@uaq.mx',
    social: [
      { name: 'facebook', url: 'facebook/daniela' },
      { name: 'twitter', url: 'twitter/daniela' },
    ],
    gender: 'Female',
  },
  {
    name: 'Oscar',
    age: 32,
    email: 'oscar@uaq.mx',
    social: [
      { name: 'facebook', url: 'facebook/oscar' },
      { name: 'twitter', url: 'twitter/oscar' },
    ],
    gender: 'Male',
  },
  {
    name: 'Andrea',
    age: 24,
    email: 'andrea@uaq.mx',
    social: [
      { name: 'facebook', url: 'facebook/andrea' },
      { name: 'twitter', url: 'twitter/andrea' },
    ],
    gender: 'Female',
  },
  {
    name: 'Juan',
    age: 38,
    email: 'juan@uaq.mx',
    social: [
      { name: 'facebook', url: 'facebook/juan' },
      { name: 'twitter', url: 'twitter/juan' },
    ],
    gender: 'Male',
  },
];

const container = document.getElementById("user-container");
// console.log(container);
let fragmentFake = ``
for(let i = 0; i < users.length; i++ ){
    // crear los elementos y agregar contenido a estos
    fragmentFake += `
        <div class="user-card">
            <h3>${users[i].name}</h3>
            <h4>EDAD: ${users[i].age}</h4>
            <h4>EMAIL: ${users[i].email}</h4>
            <a href="facebook.com">${users[i].social[0].name}</a>
            <a href="twitter.com">${users[i].social[1].name}</a>
        </div>
    `
}

container.innerHTML = fragmentFake