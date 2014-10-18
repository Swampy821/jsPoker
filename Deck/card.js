var card = (function() {
	function Card(suit, value) {
		this.suit = suit;
		this.value = value;
	}

	return Card;
})();


if(typeof module !== 'undefined' && module.exports) {
	module.exports = card;
}