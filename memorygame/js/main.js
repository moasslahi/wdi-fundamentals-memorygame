
console.log("Up and running!");

var cards = [
{
rank: 'queen',
suit: 'heart',
cardImage: "images/queen-of-hearts.png"
},

{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},

{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},

{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
}

];

var cardsInPlay = []


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard() {
cardId = this.getAttribute("data-id");
console.log("user fliphped" + " " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

cardsInPlay.push(cards[cardId].rank);


cardsInPlay.length === 2;

}

function createBoard() {
	for (var i = 0; i <cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.textContent = "queen-of-diamonds";
cardElement.textContent = "queen-of-hearts";
cardElement.textContent = "king-of-diamonds";
cardElement.textContent = "king-of-hearts";

cardElement.setAttribute('src', '"images/back.png"');
cardElement.setAttribute('data-id', i);

cardElement.addEventListener('click', flipCard);
document.getElementByIdName('#game-board').appendChild(cardElement);

}

}

createBoard();


















