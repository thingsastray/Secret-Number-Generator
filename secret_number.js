

'use strict';
module.exports = function() {
	var max = 1000000;
var min = 0;
	var number = Math.random() * (max - min) + min;
	var secretNumber = function(max, min){
		return number;
	};	
	return secretNumber;
};