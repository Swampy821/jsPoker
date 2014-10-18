var suit = (function() {
	function Suit(name, value) {
		this.name = name;
		this.value = value; 
	}

	return Suit;
})();


if(typeof module !== 'undefined' && module.exports) {
	module.exports = suit;
}