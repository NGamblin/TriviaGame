//======Click start button calls begin function in Logic object and starts the timer//
countdown = 30;
$("#start").on("click", function(){
    logic.begin();
    timer = setInterval(function() {
        var now = countdown--;
        console.log(now)
        document.getElementById("countdownDiv").innerHTML ="Countdown: " + now;
                if (now <= 0) {
                    console.log("now is <"+now)
                    document.getElementById("countdownDiv").innerHTML = now;
                    clearInterval(timer);     
        }      
    }, 1000);
});

$("#submit").on("click", function(){
    
}

//==========declares var for #correct/incorrect and begin function that appends quiz to DOM

var logic = {
    correct: 0,
    incorrect: 0,
    begin: function(){
        console.log("Start!");
        $("#start").remove();
        console.log("begin"+countdown);
        $("#quizForm").append("<div id='countdownDiv'>Countdown: "+countdown+"</div>");
        for ( var i=0; i<qAndA.length; i++) {
            $("#quizForm").append("<br>"+"<h4 class='qHeading'>"+qAndA[i].question+"</h4>"+"<br>");
            for (var j=0; j<qAndA[i].answerChoices.length; j++) {
                $("#quizForm").append("<input type='radio' name='question"+i+"' value='" +qAndA[i].answerChoices[j]+"'>"+qAndA[i].answerChoices[j]+"<br>")
            }       
        }
            $("#quizForm").append("<button id='submitAnswers'>Submit!</button>");
    },

}

//=======Object defining questions, answer choices, and the correct answers 

var qAndA = [{  
    question: "What is the capital of France?",
    answerChoices:["Lisbon", "Buenos Aires", "Abu Dhabi", "Paris"],
    correctChoice:"Paris",
},  {
    question: "What is the capital of England?",
    answerChoices:["Lisbon", "London", "Abu Dhabi", "Paris"],
    correctChoice:"London", 
},  {
    question: "What is the capital of Portugal?",
    answerChoices:["Lisbon", "Buenos Aires", "Abu Dhabi", "Paris"],
    correctChoice:"Lisbon",
},  {
    question: "What is the capital of Argentina?",
    answerChoices:["Lisbon", "Buenos Aires", "Abu Dhabi", "Paris"],
    correctChoice:"Buenos Aires", 
},   {
    question: "What is the capital of UAE?",
    answerChoices:["Lisbon", "Buenos Aires", "Abu Dhabi", "Paris"],
    correctChoice:"Abu Dhabi", 
}];