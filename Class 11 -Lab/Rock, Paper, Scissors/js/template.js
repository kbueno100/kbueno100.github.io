var player = 0;
var computer = 0; 

var choices = ['rock', 'paper', 'scissors'];
var choice = choices[Math.floor(Math.random() * choices.length)];
var computerInput = var choice; 

$('#rock').click(playRock);
$('#paper').click(playPaper);
$('#scissors').click(playScissors);

var playerInput = $('#humanScore').val();


function playRock('rock') {
    if playerInput == choices(0)
    return computerInput;
}

function playPaper() {
    return computerInput;
}

function playScissors() {
    return computerInput;
}

function 