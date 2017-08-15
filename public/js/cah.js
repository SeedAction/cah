/****************************
* SOCKET SETUP (CLIENT SIDE)
*****************************/
var socket = io.connect('http://127.0.0.1:8080');

/****************************
* QUERY DOM
*****************************/
var createNewGameBtn = document.getElementById('createNewGame'),
    joinGameBtn = document.getElementById('joinGame'),
    myIdBtn = document.getElementById('myId');

/****************************
* EVENT HANDLING
*****************************/
createNewGameBtn.addEventListener('click', hostCreateNewGame);
joinGameBtn.addEventListener('click', playerRequestJoin);

/****************************
* HOST FUNCTIONS
*****************************/
function hostCreateNewGame() {
  alert("Creating new game...");
}

function hostPrepareGame(gameId) {
  // TODO
}

function hostStartGame(gameId) {
  // TODO
}

/****************************
* PLAYER FUNCTIONS
*****************************/
function playerRequestJoin() {
  alert("Joining game...");
}

/****************************
* GAME LOGIC
*****************************/
function drawBlackCard() {
  // TODO
}

var blackCardsPool = [
  "Les Etats-Unis ont débuté le parachutage de __________ aux enfants afghans.",
  "La guerre, c'est bien pour quoi ?",
  "Quand j'irai en prison, je cacherai __________ dans mes fesses pour faire de la contrebande.",
  "Qu'est ce qui se bonifie avec le temps ?",
  "Qu'ai-je rapporté du Mexique ?",
  "Pendant le sexe, j'aime penser à __________.",
  "La sortie scolaire a été totalement gâchée par __________."
]
var whiteCardsPool = [
  "Une mycose",
  "Chier dans la soupe",
  "La puberté",
  "Auschwitz",
  "Les enfants tenus en laisse",
  "Du sperme de baleine",
  "World of Warcraft"
]

/****************************
* MISC FUNCTIONS
*****************************/
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
