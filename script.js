const bubbleContainer = document.querySelector('.bubble_container')
const timerDisplay = document.getElementById('timer')
const targetDisplay = document.getElementById('target')
const scoreDisplay = document.getElementById('score')
const orginalTiming = 60;
let leftTime = 60;
let score = 0;
let bubbleCount = 100;

function createBubbles(){
    bubbleContainer.innerHTML = '';
    for(let i=1; i<=bubbleCount; i++){
        const salman = document.createElement('div')
        salman.classList.add("bubble")
        salman.textContent = Math.floor(Math.random()*10)
        bubbleContainer.appendChild(salman)
    }
}


function generateTarget (){
    const khan = Math.floor(Math.random()*10)
    targetDisplay.textContent = khan
}

function startTimer() {
   const timeInterval =  setInterval(() => {
    timerDisplay.textContent = leftTime
        leftTime--;
        if(leftTime === 0){
            clearInterval(timeInterval)
            bubbleContainer.innerHTML = `<div class="append_container">
    <div class="game_over">Game Over</div>
    <div class="final_score">Score: ${score}</div>
    <button class="reset_btn" onclick="resetGame()">Restart</button>
    </div>`;
        }
    }, 1000);
}


function startGame(){
    createBubbles();
    generateTarget();
    startTimer();
}

function resetGame(){
    leftTime = orginalTiming;
    score = 0 ;
    timerDisplay.textContent = leftTime;
    scoreDisplay.textContent = 0;
    startGame();
}

bubbleContainer.addEventListener('click', (event)=>{
    if(event.target.classList.contains('bubble')){
        if(event.target.textContent === targetDisplay.textContent){
            score+=10;
        }else{
            score-=5;
        }
        scoreDisplay.textContent = score;
        generateTarget();
        createBubbles();
    }
})

createBubbles();
generateTarget();
startTimer();




