var total = 0;
var currency;

$('#entry').submit(function (e) {
	e.preventDefault();

	var entry = $('#newEntry').val();

	var entry = parseFloat(entry);
	currency = currencyFormat(entry);
	$('#entries').append("<tr><td>" + currency + "</td></tr>");

// line 8 is a short cut to write: total = total + entry;
	total += entry;

	$('#total').html(currencyFormat(total));

	$('#newEntry').val("");


});

function currencyFormat(number) {
	var currency = parseFloat (number);
	currency = currency.toFixed(2);
	currency = '$' + currency;
	return currency;
}