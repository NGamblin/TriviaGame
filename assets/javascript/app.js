
$("#start").on("click", function(){
    myVar = setTimeout(alertFunc, 5000);
    function alertFunc() {
        alert("Hello!");
    }
    console.log("Start!")
    $("#start").remove();
    for ( var i=0; i<qAndA.length; i++) {
        $("#quizForm").append("<br>"+"<h4 class='qHeading'>"+qAndA[i].question+"</h4>"+"<br>");
        for (var j=0; j<qAndA[i].answerChoices.length; j++) {
            $("#quizForm").append("<input type='radio' name='question"+i+"' value='" +qAndA[i].answerChoices[j]+"'>"+qAndA[i].answerChoices[j]+"<br>")
        }       
    }
        $("#quizForm").append("<button id='submitAnswers'>Submit!</button>");
});

  

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


// function quizStarts() {

// }





// "what is the capital of Argentina?", "What is the capital of UAE?"