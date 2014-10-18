var game = require('./game.js');
var Deck = require('./Deck/deck.js');
var Hand = require('./Deck/hand.js');
var Game = new game();
var deck = new Deck(2);
deck.shuffle();
var player1 = Game.addPlayer('player1');
Game.players[player1].hand = new Hand();

Game.players[player1].hand.addCards(deck.draw(4));

console.log(JSON.stringify(Game.players[player1].hand));