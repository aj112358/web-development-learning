function handleClick() {
    var imageLetter = this.textContent;
    playSound(imageLetter);
    playAnimation(imageLetter);
}

var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", function(event) {
    playSound(event.key);
    playAnimation(event.key);
});

function playSound(letter) {
    switch (letter) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var kickBase = new Audio("sounds/kick-bass.mp3");
            kickBase.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(letter);
    }
}

function playAnimation(letter) {
    var activeButton = document.querySelector("." + letter);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

    
}