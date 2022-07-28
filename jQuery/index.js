// $(document).ready(function() {$("button").css("color", "blue");});

// $("h1").css("color", "red");


$("button").css("color", "green");

$("h1").addClass("big-title margin-50");

// $("button").text("sup");
// $("button").html("<em>CLICK</em>");

$("h1").click(function() {
    $("h1").css("color", "blue");
});


$("button").click(function() {
    $("h1").css("color", "red");
});

$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "black");
});

$("h1").before("<button>New</button>")

$(".btn").on("click", function() {
    $("h1").toggle();
});

$(".transparent").on("click", function() {
    $("h1").animate({opacity: 0.3});
});
