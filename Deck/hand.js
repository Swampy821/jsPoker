var Hand = (function() {
	function hand() {
		this.cards = [];
	}

	hand.prototype.addCards = function(cardArray) {
		this.cards = this.cards.concat(cardArray);
	};

	hand.prototype.playCard = function(cardIndex) {
		return this.cards.splice(cardIndex, 1);
	};

	return hand;
})();


if(typeof module !== 'undefined' && module.exports) {
	module.exports = Hand;
}