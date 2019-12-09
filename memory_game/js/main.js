console.log("Up and runnning!");
/*
console.log("User flipped" + cardOne);
console.log("User flipped" + cardThree);
*/
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2]
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo)

if (cardsInPlay.length === 2)/* Note sure what the lesson is asking for */
	if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You Found A Match");
}
else {
alert("Sorry, Try Again");
}
