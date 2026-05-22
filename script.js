const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const score = document.getElementById('score');

const HIT_RIGHT = 30;
const HIT_TOP = 175;
const HIT_LEFT = 5;

function jump() {
    dino.classList.add('jump-animation');

    setTimeout(() => {
        dino.classList.remove('jump-animation');
    },
    500,
    this
    );
}

document.addEventListener('keypress', () => {
    if (!dino.classList.contains('jump-animation')) {  // just jump if the dino is not jumping already
        jump();
    }
});


// cactus disapear if go out of the screen
setInterval(() => {
    score.innerText++;
    const worldSpeed = Math.max( 4.5, 6 - parseInt(score.innerText) * 0.0008 );
    const cactusSpeed = Math.max( 3.8, 6 - worldSpeed - 0.8 );

    document.getElementById('game').style.animationDuration = worldSpeed + 's';
    cactus.style.animationDuration = cactusSpeed + 's';

    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus)
        .getPropertyValue('left'));

    // if (cactusLeft < 0) {
    //     cactus.style.display = 'none';
    // } else {
    //     cactus.style.display = '';
    // }

    if (cactusLeft < HIT_RIGHT && cactusLeft > HIT_LEFT && dinoTop > HIT_TOP) {
        alert("You got score of: " + score.innerText + "\nPlay again?");
        location.reload();
    }


}, 50);