$('.gray').click(switchGray);
$('.white').click(switchWhite);
$('.blue').click(switchBlue);
$('.yellow').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}


// refractored Solution to above (cleaned-up)

//function switchTheme() {
//	var theme = $(this).attr('class');
//	$('body').attr('class', theme);
// }

//$(document).ready(function() {
//	$("#switcher li").click(switchTheme);
// });

// $("#") is the selector (function)
// $("#").attr('class', 'yellow') is the argument
//so you must specify class and the name 

