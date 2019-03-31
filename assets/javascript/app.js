// create a variable for the panel where the questions will go 


var panel = $("#quiz-area");

// Ask shrek questions with an array 
var questions = [{
  question: "What is the best Shrek movie",
  answers: ["Shrek", "Shrek 2", "Shrek the Third", "Shrek Forever After"],
  correctAnswer: "Shrek Forever After"
}, 
{
  question: "What would Shrek say when it's time for everyone to go home",
  answers: ["This is the part where you run away!", "Get out of my swamp", "I like my privacy.", "I will eat you"],
  correctAnswer: "Get out of my swamp"
}, {
  question: "What does princess Fionna turn into at night",
  answers: ["monkey", "donkey", "ogre", "bigfoot"],
  correctAnswer: "ogre"
} ];


//  set Interval variable
var timer;

var game = {
	
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
	  
	  
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("You've ran out of time!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
	  
    $("#sub-wrapper").prepend("<h2>Time left: <span id='counter-number'>120</span> Seconds</h2>"); // display in HTML
    $("#start").remove();
	  
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
		
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
	
	// Increments 
	
	
	
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      
		
		
		else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
		
      else {
        game.incorrect++;
      }
    });
	  
	  
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
		
      else {
        game.incorrect++;
      }
    });

	  
	  

    this.result();
  },
	
	//come back to this part
  result: function() {
    clearInterval(timer);
	  
    $("#sub-wrapper h2").remove();
	  
    panel.html("<h2>You Are Done!</h2>"); // creating an h2 in html
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
	  
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
	  
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};



// Add your actual click events here e

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});