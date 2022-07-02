


var buttonColours=["red","blue","green","yellow"];

var gamePattern= [];
var userClickedPattern=[];
var started=true;
var level=0;


$("body").keydown(function(){
    if(started){
        $("#level-title").html("Level "+level);
        nextSequence();
        started=false;
    }
})

$(".btn").click(function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playingSound(userChosenColour);
    animation(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})


function checkAnswer(highIndex) {
    if(userClickedPattern[highIndex]==gamePattern[highIndex]){
      console.log("success");
      if(userClickedPattern.length==gamePattern.length){
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }
    }
    else{
      $("body").addClass("game-over");
      playingSound("wrong");
       setTimeout(() => {
        $("body").removeClass("game-over");
       }, 200);
       $("#level-title").html("Game over click again any key to play the game");
       startedOver();
       
    }
    
   
  }


function startedOver(){
    level=0;
    gamePattern=[];
    started=true;
}

function nextSequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").html("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playingSound(randomChosenColour);
    animation(randomChosenColour);
    
}
function playingSound(colour) {
    var audio=new Audio("sounds/"+colour+".mp3");
    audio.play();
}
function animation(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}