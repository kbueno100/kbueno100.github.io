var a;
var b;
var comparison;

function compare() {
	a = $("#a").val();
	b = $("#b").val();
	a = parseInt(a);
	b = parseInt(b);

	if (a < b) {
		comparison = '<';
	} else if (a > b) {
		comparison = '>';
	} else if (a === b) {
		comparison = '=';
	} else {
		comparison = "N/A";
	}
	
	$("#comparison").html(comparison);
}
//on console, type "a" and double click enter to show result 
$("#submit").click(compare);