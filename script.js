let start= document.querySelector('#startGame');
let noScreen= document.querySelector(".noScreen");
let screen= document.querySelector(".screen");

start.addEventListener('click', () => {
  noScreen.style.display="none";
  screen.style.display="flex";
  console.log("hihiih");
});


/*disposal button */
var disposal=document.getElementById('disposal');
/*recycle button */
var recycle=document.getElementById('recyclable');
let clicked="";

var pic = document.getElementsByClassName("waste");
var score=0;


let question = ["disposal", "recycle", "disposal", "recycle","disposal","disposal","recycle","disposal","disposal","disposal","disposal","recycle","disposal"];
let i = 0;

disposal.addEventListener('click', () => {
  clicked = "disposal";
  console.log(clicked);
  checkAnswer();
});
recycle.addEventListener('click', () => {
  clicked = "recycle";
  console.log(clicked);
  checkAnswer();
});

const ScoreCount = document.querySelector("#score");
let x= ScoreCount.textContent;
pic[i].style.display="flex";

function checkAnswer() {
  pic[i].style.display="flex";
  if (question[i] === clicked) {
    console.log("true");
    x=parseInt(x)+1;
     ScoreCount.textContent=x;
  } else {
    console.log("false");
  }
  pic[i].style.display="none";
  pic[i+1].style.display="flex";
  
  i++;
  
}


