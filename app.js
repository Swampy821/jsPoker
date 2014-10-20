var game = require('./game.js');
var Deck = require('./Deck/deck.js');
var Hand = require('./Deck/hand.js');
var poke = require('./Deck/pokerIdentifier.js');
var Game = new game();
var deck;
var poker;
var pair = 0;
var three = 0;
var four = 0;
var fhouse = 0;
var flush = 0;
var handCount = 0;
var straight = 0;
var twoPair = 0;
var stop = false;
function der() {
	deck = new Deck(1);
	poker = new poke();
	deck.shuffle();
	deck.shuffle();
	deck.shuffle();

	var player1 = Game.addPlayer('player1');
	Game.players[player1].hand = new Hand();

	Game.players[player1].hand.addCards(deck.draw(9));
	poker.identify(Game.players[player1].hand);
	//console.log(JSON.stringify(Game.players[player1].hand));
	if(poker.pair()===1) { pair++;}
	if(poker.pair()===2) { twoPair++;}
	if(poker.threeOfaKind()>0) { three++;}
	if(poker.fourOfaKind()>0) { four++;}
	if(poker.fullHouse()===true) { fhouse++;}
	if(poker.flush(poker.cards)>0) { flush++;}
	/*if(flush>0) {
		console.log(poker.flush(poker.cards,true));
		console.log(handCount);
		stop=true;
	}*/
	if(poker.straight(poker.cards)===true) { straight++;}
	if(poker.straightFlush(poker.cards)!==false) {
		console.log(poker.straightFlush(poker.cards));
		console.log(handCount);
		stop=true;
	}

	handCount++;
	/*console.log('----------');
	console.log('----------');
	console.log('---hands--' + handCount);
	console.log('---pair---' + pair);
	console.log('---two Pair--' + twoPair)
	console.log('---three of a kind--' + three);
	console.log('---four of a kind---' + four);
	console.log('---full house---' + fhouse);
	console.log('---flush---' + flush);
	console.log('---straight---' + straight);
	*/
	setTimeout(function() {
		if(stop===false) { der(); }
	});
}
der();

function report() {
	console.log(handCount);
	setTimeout(function() {
		if(stop===false) {report();}
	},10000);
}
report();
/*
deck = new Deck(1);
	poker = new poke();
	deck.shuffle();
	deck.shuffle();
	deck.shuffle();

	var player1 = Game.addPlayer('player1');
	Game.players[player1].hand = new Hand();

	Game.players[player1].hand.addCards(deck.draw(7));
	poker.identify(Game.players[player1].hand);
poker.straight();
*/




