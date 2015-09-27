$(document).ready(function(){
    var userScore = 0;
    var compScore = 0;
    $("button").on("click",function(){
        var pickPool = ['rock', 'paper', 'scissors'];
        var userPick = $(this).attr("id");
        var compPick = pickPool[Math.floor(Math.random() * pickPool.length)];
        if (userPick == "rock" && compPick == "scissors") {
            $("#status").html("<p>Computer picked " + compPick + " You win! :)</p>");
            userScore += 1;
            $("#humanScore").html(userScore)
        } else if (userPick == "paper" && compPick == "rock") {
            $("#status").html("<p>Computer picked " + compPick + " You win! :)</p>");
            userScore += 1;
            $("#humanScore").html(userScore)
        }     else if (userPick == "scissors" && compPick == "paper") {
            $("#status").html("<p>Computer picked " + compPick + " You win! :)</p>");
            userScore += 1;
            $("#humanScore").html(userScore)
        } else if (userPick == compPick) {
            $("#status").html("<p>Computer picked " + compPick + " You TIED! :)</p>");
        } else {
            $("#status").html("<p>Computer picked " + compPick +  " You LOST! :)</p>");    
            compScore += 1;
            $("#computerScore").html(compScore)    
        }

    });

});