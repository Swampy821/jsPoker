if(typeof module !== 'undefined' && module.exports) {
	var Card = require('./card.js');
	var Suit = require('./suit.js');
}
var deck = (function theDeck() {
	function buildDeck() {
		var d = [];
		for(var i=1; i<14;i++) {
			d.push(new Card(new Suit('Heart',0), i));
			d.push(new Card(new Suit('Spade',1), i));
			d.push(new Card(new Suit('Club',2), i));
			d.push(new Card(new Suit('Diamond',3), i));
		}
		return d;
	}


	function Deck(numberOfDecks) {
		this.cards = [];
		this.init(numberOfDecks);
	}

	Deck.prototype.init = function(numberOfDecks) {
		if(typeof numberOfDecks === 'number' && numberOfDecks>0) {
			for(var i=0; i<numberOfDecks; i++) {
				this.cards = this.cards.concat(buildDeck());
			}
		}
	};

	Deck.prototype.draw = function(howMany) {
		if(typeof howMany !== 'number') { return; }
		var drawnCards = this.cards.splice(this.cards.length-howMany, howMany);
		return drawnCards;
	};

	Deck.prototype.shuffle = function() {
		this.cards.sort(function() {
			return .5 - Math.random();
		});
	};


	return Deck;
})();



if(typeof module !== 'undefined' && module.exports) {
	module.exports = deck;
}