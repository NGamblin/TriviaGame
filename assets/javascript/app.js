//======Click start button calls begin function in game object and starts the timer//
countdown = 10;
$("#start").on("click", function () {
    game.begin();
});

$("form#quizForm").on("submit", function (event) {
    event.preventDefault();
    // console.log(event.target.Q1.value);
    game.gameOver(); 
});

//==========declares var for #correct/incorrect and begin function that appends quiz to DOM

var game = {
    correct: 0,
    incorrect: 0,
    timerId: null,
    begin: function () {
        console.log("Start!");
        $("#start").remove();
        console.log("begin" + countdown);
        $("#quizForm").append("<div id='countdownDiv'>Countdown: " + countdown + "</div>");
        for (var i = 0; i < qAndA.length; i++) {
            $("#quizForm").append("<br>" + "<h4 class='qHeading'>" + qAndA[i].question + "</h4>" + "<br>");
            for (var j = 0; j < qAndA[i].answerChoices.length; j++) {
                $("#quizForm").append("<input type='radio' name='" +"Q"+ i + "' value='" + qAndA[i].answerChoices[j] + "'>" + qAndA[i].answerChoices[j] + "<br>")

            }
        }
        $("#quizForm").append("<button type ='submit' id='submitAnswers'>Submit!</button>");
            game.timerId = setInterval(function () {
            var now = countdown--;
            console.log(now)
            document.getElementById("countdownDiv").innerHTML = "Countdown: " + now;
            if (now <= 0) {
                console.log("now is <" + now)
                document.getElementById("countdownDiv").innerHTML = now;
                game.gameOver();
                // run a function to calc scores, clearInterval(ger rid of one above), clear quizForm div, and display scores to DOM     
            }
        }, 1000);
    },
    gameOver: function(){
        clearInterval(game.timerId)
    }

}

//=======Object defining questions, answer choices, and the correct answers 

var qAndA = [{
    question: "What is the capital of France?",
    answerChoices: ["Lisbon", "Buenos Aires", "Abu Dhabi", "Paris"],
    correctChoice: "Paris",
}, {
    question: "What is the capital of England?",
    answerChoices: ["Lisbon", "London", "Abu Dhabi", "Paris"],
    correctChoice: "London",
}, {
    question: "What is the capital of Portugal?",
    answerChoices: ["Lisbon", "Buenos Aires", "Abu Dhabi", "Paris"],
    correctChoice: "Lisbon",
}, {
    question: "What is the capital of Argentina?",
    answerChoices: ["Lisbon", "Buenos Aires", "Abu Dhabi", "Paris"],
    correctChoice: "Buenos Aires",
}, {
    question: "What is the capital of UAE?",
    answerChoices: ["Lisbon", "Buenos Aires", "Abu Dhabi", "Paris"],
    correctChoice: "Abu Dhabi",
}];