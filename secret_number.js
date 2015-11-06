var max = 1000000;
var min = 0;
var number;

'use strict';
module.exports = function() {
	var number = Math.random() * (max - min) + min;
	var secretNumber = function(max, min){
		return number;
	};	
	return secretNumber;
};