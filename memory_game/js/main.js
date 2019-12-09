console.log("Up and runnning!");
var cards = [
{
	rank : "queen",
	suit : "hearts",
	cardImage: "imgaes/queen-of-hearts.png",

},
{
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"

},
{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png",
},
{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamomds.png"
}
];

var cardsInPlay = [];

function flipCard() {
	console.log("User flipped") + cards[cardId].rank;
	cardsInPlay.push(cards[cardId].rank);
}
console.log(cards[cardId].suit)
/*
	if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You Found A Match");
}
else {
alert("Sorry, Try Again");
}
*/