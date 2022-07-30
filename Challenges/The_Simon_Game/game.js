var gameStarted = false;
var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);


    $("#"+randomChosenColor).fadeOut().fadeIn();
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);
    
}

// function userChoice() {
    $(".btn").click(function(event) {
        // console.log(this.id);
        var userChosenColor = event.target.id;
        // var userChosenColor = $(".btn").attr("id");
        // console.log(userChosenColor);
        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor);
        animatePress(userChosenColor);

        if (userClickedPattern.length === level) {
            checkAnswer(level);
        }
        
    })
// }

// userChoice();

function playSound(name) {
    var audioObject = new Audio("sounds/"+name+".mp3");
    audioObject.play();
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed")
    }, 100);
}

$(document).keypress(function() {
    if (!gameStarted) {
        nextSequence();
        gameStarted = true;
        // $("h1").text("Level 0");
    }
});

function checkAnswer(currentLevel) {
    for (var i = 0; i < gamePattern.length; i++) {
        if (userClickedPattern[i] !== gamePattern[i]) {
            playSound("wrong");
            $("#level-title").text("Game over! Press any key to restart.");
            $("body").addClass("game-over");
            setTimeout(function (){
                $("body").removeClass("game-over")
            }, 200);

            level = 0;
            userClickedPattern = [];
            gamePattern = [];
            gameStarted = false;
        }
    }
    userClickedPattern = [];
    if (gameStarted) {
        setTimeout(nextSequence, 1000);
    }
}

function startOver() {
    
}