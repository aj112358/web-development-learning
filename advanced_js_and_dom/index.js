function handleClick() {
    alert("Clicked!");
}


var buttons = document.querySelectorAll(".drum");
for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}