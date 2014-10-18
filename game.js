
var game = (function() {
	function game() {
		/*track states*/
		this.players = [];
		this.turn = 0;
		this.score = 0;
		this.history = [];
	}

	game.prototype.addPlayer = function(name) {
		this.players.push({
			name:name,
			hand:{},
			score:0
		});
		return this.players.length - 1;
	};

	game.prototype.next = function() {
		if(this.turn < this.players.length-1) {
			this.turn++;
		}else{
			this.turn = 0;
		}
	}

	return game;
})();

if(typeof module !== 'undefined' && module.exports) {
	module.exports = game;
}
