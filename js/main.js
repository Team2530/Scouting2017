var highHits = 0;
var lowHits = 0;
var highMisses = 0;
var lowMisses = 0;
$("#high+").click(function () {
	highHits++;
	$("#highHits").innerHTML = highHits;
});
$("#high-").click(function () {
	highMisses++;
	$("#highMisses").innerHTML = highMisses;
});
$("#low+").click(function () {
	lowHits++;
	$("#lowHits").innerHTML = lowHits;
});
$("#low-").click(function(){
	lowMisses++;
	$("#lowMisses").innerHTML = lowMisses;
});
