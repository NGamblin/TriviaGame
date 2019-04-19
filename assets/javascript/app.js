//======Click start button calls begin function in game object and starts the timer//
countdown = 45;
$("#start").on("click", function () {
    game.begin();
});

$("form#quizForm").on("submit", function (event) {
    console.log("Sumbitted")
    event.preventDefault();
    // console.log(event.target.Q0.value);
    // console.log(event.target.Q1.value);
    // console.log(event.target.Q2.value);
    // console.log(event.target.Q3.value);
    // console.log(event.target.Q4.value);
    game.gameOver(); 
});

$("#takeAgain").on("click", function () {
    game.begin();
});

//==========Game object with score variables, on click begin function, 

var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
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

            }  
        }, 1000);
    },
        gameOver: function(){
        // end timer
        clearInterval(game.timerId)
        //Evaluate answers
        if (event.target.Q0.value == qAndA[0].correctChoice){
            game.correct++; 
        } else if (event.target.Q0.value !== qAndA[0].correctChoice){
            game.incorrect++;
        } else {
            game.unanswered++;
    }
        if (event.target.Q1.value == qAndA[1].correctChoice){
            game.correct++; 
        } else if (event.target.Q1.value !== qAndA[1].correctChoice){
            game.incorrect++;
        } else {
            game.unanswered++;               
    }
        if (event.target.Q2.value == qAndA[2].correctChoice){
            game.correct++; 
        } else if (event.target.Q2.value !== qAndA[2].correctChoice){
            game.incorrect++;
        } else {
            game.unanswered++;
    }
        if (event.target.Q3.value == qAndA[3].correctChoice){
            game.correct++; 
        } else if (event.target.Q3.value !== qAndA[3].correctChoice){
            game.incorrect++;
        } else {
            game.unanswered++;
    }
        if (event.target.Q4.value == qAndA[4].correctChoice){
            game.correct++; 
        } else if (event.target.Q4.value !== qAndA[4].correctChoice && event.target.Q4.value !== null){
            game.incorrect++;
        } else {
            game.unanswered++;
    }
        console.log(game.correct)
        console.log(game.incorrect)
        console.log(game.unanswered)
        $("#quizForm").empty()
        $("#quizForm").append("<p id='displayCorrect'>"+game.correct+" answered correctly</p>");
        $("#quizForm").append("<p id='displayIncorrect'>"+game.incorrect+" answered incorrectly</p>");
        $("#quizForm").append("<p id='displayUnswered'>"+game.unanswered+" unanswered</p>");
        // $("#quizForm").append("<button type ='button' id='takeAgain'>Take it again!</button>");

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