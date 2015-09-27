//wait for the DOM elements to load before executing
$(document).ready(function() {

	//Get user input on click 
	$('#submit-btn').click(function(e) {

		//prevent the submit button from refreshing the page
		event.preventDefault();

		//get the value of the #city-type input
		var city = $('#city-type').val();
		$('#city-type').val('');
		city = city.toLowerCase().trim();

		//if the user inputs the New York City/NYc/NewYork changes the CSS class to 'nyc'
		if (city === 'new york' || city === 'new york city' || city === 'nyc') {
			$('body').attr('class', 'nyc');
		}

		//if the user inputs SF/San Francisco/Bay Area change the css class to 'sf'
		if (city === 'sf' || city === 'San Francisco' || city === 'bay area') {
			$('body').attr('class', 'sf');

		//if the user inputs Austin/ATX change the CSS class to 'austin'
		if (city === 'Austin' || city === 'atx') {
			$('body').attr('class', 'austin');

		// if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
		if (city === 'los angeles' || city === 'LA' || city === 'LAX') {
			$('body').attr('class', 'la');

		//if the user inputs Sydney/SYD change the CSS class to 'Sydney'
		if (city === 'Sydney' || city === 'SYD') {
			$('body').attr('class', 'sydney');


	});
});