//F 1
// lorsque l'utilisateur va cliquer sur le footer 
// (portant le tag <footer>), tu vas afficher le mot "clique" en console.

let footer = document.getElementsByTagName("footer")[0]
footer.addEventListener("click", function () { console.log("clique") } )

//F 1-bis
//tu vas afficher en console "clic numéro x" 
// avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
let clicks = 0
footer.addEventListener("click", function () { console.log(`clique numéro ${clicks+=1}`) })


//Fonctionnalité 2 : Id navbarHeader perde sa classe collapse

let navbarHeader = document.getElementById("navbarHeader")
const hamburgerMenu = document.getElementsByClassName('navbar-toggler')[0];
hamburgerMenu.addEventListener('click', function () {navbarHeader.classList.toggle("collapse")})

// Fonctionnalité 3 :
//  clique sur le bouton "Edit" de la première card, 
//  le texte de la card va se mettre en rouge
//   de façon irréversible(sauf si on recharge la page).
const firstCard = document.querySelector('div.col-md-4')
const editFirstCard = document.querySelector('div.col-md-4 button.btn-outline-secondary');
editFirstCard.addEventListener('click',function (){firstCard.style.color='red'})

// Fonctionnalité 4 :
// si on clique sur le bouton "Edit" de la deuxième card, 
// le texte de la card va se mettre en vert.
// Si on re - clique dessus, il redevient comme avant!
const secondCard = document.querySelectorAll('div.col-md-4')[1]
const editSecondCard = document.querySelectorAll('button.btn-outline-secondary')[1];

editSecondCard.addEventListener('click', function () 
{
  if (secondCard.style.color == 'black') 
    {secondCard.style.color = 'green' }
    else 
    { secondCard.style.color = 'black';
}})


//Fonctionnalité 5 :
// si un utilisateur double clique sur la navbar en haut, 
//tout Bootstrap disparaît 
let navbar = document.getElementsByClassName('navbar')[0]
const main = document.querySelector('main');

navbar.addEventListener('dblclick', function(){
    document.querySelector('link[href$="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"').remove()}
)
  
main.addEventListener('dblclick', function () {
  console.log("lol")
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  document.getElementsByTagName('HEAD')[0].appendChild(link);}
)

