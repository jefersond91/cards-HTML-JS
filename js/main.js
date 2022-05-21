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
    email: 'jeferson@edu.co',
    social: [
      { name: 'facebook', url: 'facebook/jeferson' },
      { name: 'twitter', url: 'twitter/jeferson' },
    ],
    gender: 'Male',
  },
  {
    name: 'Daniela',
    age: 29,
    email: 'daniela@edu.co',
    social: [
      { name: 'facebook', url: 'facebook/daniela' },
      { name: 'twitter', url: 'twitter/daniela' },
    ],
    gender: 'Female',
  },
  {
    name: 'Oscar',
    age: 32,
    email: 'oscar@edu.co',
    social: [
      { name: 'facebook', url: 'facebook/oscar' },
      { name: 'twitter', url: 'twitter/oscar' },
    ],
    gender: 'Male',
  },
  {
    name: 'Andrea',
    age: 24,
    email: 'andrea@edu.co',
    social: [
      { name: 'facebook', url: 'facebook/andrea' },
      { name: 'twitter', url: 'twitter/andrea' },
    ],
    gender: 'Female',
  },
  {
    name: 'Juan',
    age: 38,
    email: 'juan@edu.co',
    social: [
      { name: 'facebook', url: 'facebook/juan' },
      { name: 'twitter', url: 'twitter/juan' },
    ],
    gender: 'Male',
  },
];

const container = document.getElementById('user-container');
// console.log(container);


/*// el for  realiza su ciclo y genera la cantidad de cards para cada miembro, en este caso de i=0 a i=5, pero solo genera los marcos de la tarjeta, aun no tiene los datos de cada uno, para ello se debe agregar las rutas para ingresar al array 
for(let i = 0; i < users.length; i++ ){
        // crear los elementos y agregar contenido a estos
        let card = document.createElement("div");
        card.className = "user-card";
        
        let name = document.createElement("h3");
        name.textContent = 'NOMBRE DE USUARIO ';

        let age = document.createElement("h4");
        age.textContent = 'EDAD: 00';

        let email = document.createElement("h4");
        email.textContent = 'EMAIL';

        let facebook = document.createElement("a");
        facebook.textContent = 'Facebook';
        facebook.href = "https://facebook";

        let twitter = document.createElement("a");
        twitter.textContent = 'Twitter';
        twitter.href = "https://twitter";

        //agregar los elementos o hijos a la card
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(email);
        card.appendChild(facebook);
        card.appendChild(twitter);

        //agregar la card al contenedor, quedando el div card dentro del div container
        //con este método se renderiza con cada cambio por lo que en grandes cantidades de datos no es muy eficiente
        container.appendChild(card)
}
*/
let fragment = new DocumentFragment();
for(let i = 0; i < users.length; i++ ){
    // crear los elementos y agregar contenido a estos
    let card = document.createElement("div");
    card.className = "user-card";
    
    let name = document.createElement("h3");
    name.textContent = `${users[i].name}`;

    let age = document.createElement("h4");
    age.textContent = `EDAD: ${users[i].age}`;

    let email = document.createElement("h4");
    email.textContent = `EMAIL: ${users[i].email}`;

    let facebook = document.createElement("a");
    facebook.textContent = `${users[i].social[0].name}`;
    facebook.href = `${users[i].social[0].url}`;

    let twitter = document.createElement("a");
    twitter.textContent = `${users[i].social[1].name}`;
    twitter.href = `${users[i].social[1].url}`;

    //agregar los elementos o hijos a la card
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(email);
    card.appendChild(facebook);
    card.appendChild(twitter);

    //agregar la card al contenedor, quedando el div card dentro del div container
    //con este método se renderiza o hay reflow con cada cambio por lo que en grandes cantidades de datos no es muy eficiente

    //container.appendChild(card)

    //agregar la card a un fragmento (frament) y luego ese fragmento se agregar al contenedor
    // con este método los cambios se agregan al fragmento y no hay renderización, por lo que en esencia cuando se agrega al contenedor es como si solo fuera un cambio

    fragment.appendChild(card)
}

container.appendChild(fragment)





/* <div class="user-card">
        <h3>NOMBRE DE USUARIO</h3>
        <h4>EDAD: 00</h4>
        <h4>EMAIL: email@email</h4>
        <a href="facebook.com">Facebook</a>
        <a href="twitter.com">Twitter</a>
    </div> */