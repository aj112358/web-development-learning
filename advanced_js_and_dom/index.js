function handleClick() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    console.log(this);
    // this.setAttribute("style", "color: white;");
    this.style.color = "white";
}


var buttons = document.querySelectorAll(".drum");
for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}