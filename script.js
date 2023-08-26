let timer = 60;
let score = 0;
let hitRandomNum = 0;

function getNewHit(){
  hitRandomNum = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitRandomNum;
}

function makeBubbles(){
  var clutter = "";

for(var i=1; i<=160; i++){
  let rn = Math.floor(Math.random()*10);
  clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#panel-bottom").innerHTML = clutter;
}


function runTimer(){
  var timerInterval = setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector("#timer").textContent = timer;
    }else{
      clearInterval(timerInterval);
      document.querySelector("#panel-bottom").innerHTML = `<h1> Game Over </h1>`;
    }
  }, 1000);
}

function increaseScore(){
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#panel-bottom").addEventListener("click", function(details){
  let clicked = Number(details.target.textContent);
  if(clicked === hitRandomNum){
    increaseScore()
    getNewHit()
    makeBubbles()
  }
});


runTimer();
makeBubbles();
getNewHit();
increaseScore();