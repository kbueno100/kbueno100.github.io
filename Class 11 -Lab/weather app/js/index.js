// var total = 0;
//celsius temp

var celsius = 0;

//farenheit temp

var farenheit = 0;
$('#convert').click(convert);

function convert() {
	var entry = $('#enter-temp').val();
	var tempType = $('#temp-type').val();

	if (tempType == 'F'){
		$('#far-temp').html(entry + '&deg;' + 'F');
		var cel = entry - 32;
		cel = cel * 5;
		cel = cel / 9;
		cel = cel.toFixed(0);
		$('#cel-temp').html(cel + '&deg;' + 'C');
	} else {
		$('#cel-temp').html(entry + '&deg;' + 'C');
		var far = entry * 1.8;
		far = far + 32;
		far = far.toFixed(0);
		$('#far-temp').html(far + '&deg;' + 'F');

	}
	// $('#enter-temp').val('');
}


