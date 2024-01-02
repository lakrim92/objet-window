/*const button = document.getElementById("bouton");

button.addEventListener('click', () => {
  const destination = window.open("destination.html", 'destination', 'width=500, height=500, left=200, top=200');
  
  destination.addEventListener('load', () => {
    const button2 = destination.document.getElementById('bouton2');
    
    window.alert("Bonjour et bienvenue sur mon site!");
    
    button2.addEventListener('click', () => {
      destination.close();
    });
  });
});*/


/*window.addEventListener('load', function() {
  alert("Bonjour, bienvenue sur mon site !");
});*/

/*let nom = prompt("Quel est votre nom ?");
console.log("Bienvenue " + nom);
window.alert("Bienvenue " + nom + " !");*/

/*let button = document.createElement('button');

button.innerHTML = "button";

document.body.appendChild(button);

//code
button.addEventListener('click', () => {
  window.open("https://www.google.com", 'google', 'width=500, height=500, left=200, top=200');
});*/

/*let close = document.createElement('button');

close.innerHTML = "close";

document.body.appendChild(close);

// code
close.addEventListener('click', () => {
  window.close();
});*/

/*let open = document.createElement('button');

open.innerHTML = "open";

document.body.appendChild(open);

// code
let url = prompt("Entrez votre URL :");

open.addEventListener('click', () => {
  window.open(url);
});*/

/*console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);

//Affichage de propriétés de window.location (le mot window est facultatif)

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.pathname);
window.location.assign('destination.html');
window.location.assign('destination.html');
window.location.assign('destination.html');*/

const destination = document.getElementById('destination');

const forward = document.getElementById('forward');

destination.addEventListener('click', () => {
  const destination = window.location.assign('destination.html');
});

forward.addEventListener('click', () => {
window.history.forward();
});

// Création d'un objet Date pour créer une date d'expiration :

const dateExp = new Date();

dateExp.setMonth(dateExp.getMonth() + 1); // Nous ajoutons un mois à la date

// Nous interrogeons l'utilisateur sur son username et son mdp avec window.prompt

const username = prompt("Username");

const mdp = prompt("Mot de passe");

// Création des cookies

document.cookie = `username=${username} ; expires=${dateExp.toUTCString()}`;

document.cookie = `mdp=${mdp} ; expires=${dateExp.toUTCString()}`;