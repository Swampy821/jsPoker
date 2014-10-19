var pokerIdentifier = (function() {
	var searchArray = [];

	function p() {

	}
	p.prototype.identify = function(hand) {
		this.cards = hand.cards; 
	};
	p.prototype.isInArray = function(num, arr) {
		for(var i=0; i<arr.length; i++) {
			if(arr[i].number === num) {
				return i;
			}
		}
	}
	p.prototype.pair = function(three, four) {
		if(three===undefined || three===false) { three=0;}else{three=1;}
		if(four===undefined || four===false) { four=0;}else{four=2;}
		var pairCount = 0;
		var tempArr = [];
		var cardInd;
		for(var i=0; i<this.cards.length;i++) {
			cardInd = this.isInArray(this.cards[i].value, tempArr);
			if(cardInd) {
				tempArr[cardInd].count++;
			}else{
				tempArr.push({
					count:1,
					number:this.cards[i].value
				});
			}
		}
		for(var i=0; i<tempArr.length; i++) {
			if(tempArr[i].count===(2+three+four)) {
				pairCount++;
			}
		}
		return pairCount;
	};
	p.prototype.threeOfaKind = function() {
		return this.pair(true);
	};
	p.prototype.fourOfaKind = function() {
		return this.pair(false,true);
	};

	p.prototype.fullHouse = function() {
		if(this.pair() === 1 && this.pair(true)===1) {
			return true;
		}else{
			return false;
		}
	}

	p.prototype.flush = function() {
		var flushCount = 0;
		var tempArr = [];
		var cardInd;
		for(var i=0; i<this.cards.length;i++) {
			cardInd = this.isInArray(this.cards[i].suit.name, tempArr);
			if(cardInd) {
				tempArr[cardInd].count++;
			}else{
				tempArr.push({
					count:1,
					number:this.cards[i].suit.name
				}); 
			}
		}
		for(var i=0; i<tempArr.length; i++) {
			if(tempArr[i].count===5) {
				flushCount++;
			}
		}
		return flushCount;
	};

	p.prototype.straight = function() {
		var tempArr = [];
		tempArr = tempArr.concat(this.cards);

		tempArr.sort(function(a, b) {
			return a.value - b.value
		});
		var last;
		for(var i=0; i<tempArr.length; i++) {
			if(tempArr[i].value === last) {
				tempArr.slice(i, 1);
			}
			last = tempArr.value;
		}
		var inRowCount=0;
		var last;
		for(var i=0; i<tempArr.length; i++) {
			if(tempArr[i].value === (last+1)) {
				inRowCount++;
				if(inRowCount===5) {
					return true;
				}
			}
			last = tempArr[i].value;
		}


		return false;
	};



	return p;

})();

if(typeof module !== 'undefined' && module.exports) {
	module.exports = pokerIdentifier;
}