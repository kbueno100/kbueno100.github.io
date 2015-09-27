//Implement the red light using jQuery. 
//Don't forget to add the script tags.

$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);


function illuminateRed() {
  $('#stopLight').css({'background-color': 'red'});
  $('#slowLight').css({'background-color': 'black'});
  $('#goLight').css({'background-color': 'black'});
}

function illuminateYellow() {
 $('#slowLight').css({'background-color': 'yellow'});
 $('#stopLight').css({'background-color': 'black'});
 $('#goLight').css({'background-color': 'black'});
}

function illuminateGreen() {
 $('#goLight').css({'background-color': 'green'});
   $('#slowLight').css({'background-color': 'black'});
  $('#stopLight').css({'background-color': 'black'});
}

