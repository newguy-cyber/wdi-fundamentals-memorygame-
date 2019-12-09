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


function checkformatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You Found A Match");
}
else {
alert("Sorry, Try Again");
};
};

function flipCard() {
	var cardId = this.getattribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setattribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkformatch();
	};
};


function createboard(){
	for (var i = 0; i < cards.length; i++){
		var cardelement = document.createelement('img');
		cardelement.setattribute('src', 'images/back.png');
		cardelement.setattribute('data-id', i);
		cardelement.addeventlistener('click', flipcard);
		cardtable.appendchild(cardelement);
	}
	};
