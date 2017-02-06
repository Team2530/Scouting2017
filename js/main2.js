var highHits = 0;
var lowHits = 0;
var highMisses = 0;
var lowMisses = 0;
$(document).ready(function () {
	$("#highPlus").on("click", function () {
		highHits+=1;
		$("#highHits").html(function (i, val) {
			return val*1+1;
		});
	});
	$("#highMinus").on("click",function () {
		highMisses+=1;

		$("#highMisses").html(function (i, val) {
			return val*1+1;
		});
	});
	$("#lowPlus").on("click",function () {
		lowHits+=1;

		$("#lowHits").html(function (i, val) {
			return val*1+1;
		});
	});
	$("#lowMinus").on("click",function(){
		lowMisses+=1;

		$("#lowMisses").html(function (i, val) {
			return val*1+1;
		});
	});

});
