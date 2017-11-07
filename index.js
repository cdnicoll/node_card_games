var cards = require('@cdnicoll/cards');


//#region simple setup
var card1 = new cards.Card("2", "Heart");
var card2 = new cards.Card("3", "Diamond");


//console.log(card1.toString());
//console.log(card2.toString());

var deck = new cards.Deck();
deck.add(card1);
deck.add(card2);

//console.log(deck);
//#endregion

//#region demo2
var standardDeck = new cards.StandardDeck();
console.log(standardDeck);
standardDeck.shuffleAll();
console.log(standardDeck);
//#endregion