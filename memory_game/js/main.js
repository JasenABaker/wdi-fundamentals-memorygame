console.log("Up and running!");

var cards = [	
{ 
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function() {
	var score = 0;
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		score += 1;
		alert("You found a match!" + " " + "Your Score is " + score);
		if (score === 5){
			alert("You win! You score is " + score)
		}
		} else {
			alert("Sorry, try again.")
		}
	}

}


var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage)
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	 checkForMatch();
	
	
}


var cardElement;

var createBoard = function(){
	for ( var i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i),
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)[i];
	}
};

var clearBoard = function (){
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute('src', "images/back.png");
	}
		cardsInPlay =[];
	}


createBoard();


document.getElementsByTagName('button')[0].addEventListener('click', clearBoard);


