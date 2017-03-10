var questions=[

  {question:"What does HTML stand for?",
  options:["Hyper Text Mark-up Language","Home Tool Mark-up Language","HyperLinks and Text Mark-up Language"],
  answer:"Hyper Text Mark-up Language"
},

{question:"Who is making Web standards for HTML?",
options:["Microsoft","Google","The World Wide Consortium","Mozilla"],
answer:"The World Wide Consortium"
},

{question:"Choose the correct HTML tag for Largest Heading.",
options:["h1","h6","head","Heading"],
answer:"h1"
},

{question:"What is the correct HTML for inserting the line Break?",
options:["lb","br","break"],
answer:"br"
},

{question:"Choose the right character to indicate the end tag.",
options:["/","*","<","^"],
answer:"/"
}
];
var i=0, score=0;

$(function(){
  startQuiz(questions);
});

function renderQuestion(question) {
  var questionHTML = "";
  var currentScore=parseInt(score);
  var incorrectScore=i-parseInt(score);
  questionHTML+='<div class="js-question-container">'+
  '<p>Current Score: '+currentScore+' Correct,  '+incorrectScore+' Incorrect</p>'+
  '<p>'+parseInt(i+1)+'/5 '+question.question+'</p>'+
  '<form class="js-options">'+getOptions(question)+'</form>'+
  '<button class="js-start"  type="button">Start Over</button>'+
  '<button  class="js-next" type="button">Submit</button>'+
  '</div>';
  $('.js-question').html(questionHTML);
}

function getOptions(question){
  var optionsHTML='';
  for(var j=0;j<question.options.length;j++)
  optionsHTML+='<input type="radio" name="option"  value="'+question.options[j]+'">'+question.options[j]+'<br>';
  return optionsHTML;
}

function startQuiz(questions){
  $('.js-question').on('click','.begin',function(event){
    event.preventDefault();
    renderQuestion(questions[i]);
    handleClicks();
  });
}

function handleClicks(){
  $('.js-question').on('click','.js-next',function(){
    if(!$('input').is(':checked'))
    alert("Please select one of the options!");
    else
    keepScore($('input:checked').val());
  });

  $('.js-question').on('click','.js-start',function(){
    i=0;
    score=0;
    renderQuestion(questions[i]);
  });

  $('.js-question').on('click','.js-eval',function(){
    i++;
    renderQuestion(questions[i]);
  });

}

function keepScore(answer){
  var scoreHtml='';
  var endHtml='';
  if(i<4)
  {
    if(answer===questions[i].answer)
    {
      score++;
      scoreHtml='<div class="js-question-container"><p>You are Right!</p>'+
      '<button class="js-eval" type="button">Next</button>'+
      '</div>';
    }
    else
    {
      scoreHtml='<div class="js-question-container"><p>You are Wrong!</p>'+
      '<p>Correct Answer is: '+questions[i].answer+'</p>'+
      '<button class="js-eval" type="button">Next</button>'+
      '</div>';
    }
    $('.js-question').html(scoreHtml);

  }

  else
  {
    if(answer===questions[i].answer)
    {
      score++;
      endHtml='<div class="js-question-container">'+
      '<p>You are Right!</p>'+
      '<p>You Total Score is: '+score+'</p>'+
      '<button class="js-start" type="button">Start Over</button>'+
      '</div>';
    }
    else
    {
      endHtml='<div class="js-question-container">'+
      '<p>You are wrong! Correct Answer is: '+questions[i].answer+'</p>'+
      '<p>You Total Score is: '+score+'</p>'+
      '<button class="js-start" type="button">Start Over</button>'+
      '</div>';
    }
    $('.js-question').html(endHtml);

  }
}
