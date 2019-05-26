
console.log("Up and running!");

var cards = ["queen","queen","king","king"]
var cardInPlay = []

var cardOne = cards[0]
cardInPlay.push(cardOne)

var cardTwo = cards[2]
cardInPlay.push(cardTwo)



console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

cardInPlay.length === 4;

if (cardInPlay[0] === cardInPlay[1]) {
  alert("You found a match!");
} else {
    alert("sorry, try again.");

}
