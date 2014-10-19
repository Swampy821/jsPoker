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
function der() {
	deck = new Deck(1);
	poker = new poke();
	deck.shuffle();
	deck.shuffle();
	deck.shuffle();

	var player1 = Game.addPlayer('player1');
	Game.players[player1].hand = new Hand();

	Game.players[player1].hand.addCards(deck.draw(5));
	poker.identify(Game.players[player1].hand);
	//console.log(JSON.stringify(Game.players[player1].hand));
	if(poker.pair()===1) { pair++;}
	if(poker.pair()===2) { twoPair++;}
	if(poker.threeOfaKind()>0) { three++;}
	if(poker.fourOfaKind()>0) { four++;}
	if(poker.fullHouse()===true) { fhouse++;}
	if(poker.flush()>0) { flush++;}
	if(poker.straight()===true) { straight++;}
	handCount++;
	console.log('----------');
	console.log('----------');
	console.log('---hands--' + handCount);
	console.log('---pair---' + pair);
	console.log('---two Pair--' + twoPair)
	console.log('---three of a kind--' + three);
	console.log('---four of a kind---' + four);
	console.log('---full house---' + fhouse);
	console.log('---flush---' + flush);
	console.log('---straight---' + straight);
	setTimeout(function() {
		der();
	});
}
der();
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



