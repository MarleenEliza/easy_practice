// プレイヤー
const p1 = {
    score: 0,
    btn: document.getElementById("p1-btn"),
    display: document.getElementById("p1-display")
};

const p2 = {
    score: 0,
    btn: document.getElementById("p2-btn"),
    display: document.getElementById("p2-display")
};

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function () {reset()});

const playSetter = document.getElementById("selector");
playSetter.addEventListener("change", function () {setPlays()});

p1.btn.addEventListener("click", function () { updateScore(p1,p2) });
p2.btn.addEventListener("click", function () { updateScore(p2,p1) });



let isGameOver = false;
let winningScore = 3;

function updateScore(player, opponent) {
     if(!isGameOver) {
        addScore(player);
        if (player.score === winningScore) {
            endGame(player, opponent);
        }
    }
}

function addScore(player) {
    player.score += 1;
    player.display.textContent = player.score;
}

function endGame(player, opponent) {
    isGameOver = true;
    player.display.classList.add('has-text-success');
    opponent.display.classList.add('has-text-danger');
    player.btn.disabled = true;
    opponent.btn.disabled = true;
}

function setPlays(){
    winningScore = parseInt(playSetter.value);
}

function reset() {
    isGameOver = false;

    for(p of [p1,p2]){
        p.score = 0;
        p.btn.disabled = false;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
    };
}
