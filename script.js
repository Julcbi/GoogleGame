const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const score = document.getElementById('score');

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
    const speed = Math.max(0.8, 3 - parseInt(score.innerText) * 0.005); // increase speed 
    cactus.style.animationDuration = speed + 's';
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus)
        .getPropertyValue('left'));

    // if (cactusLeft < 0) {
    //     cactus.style.display = 'none';
    // } else {
    //     cactus.style.display = '';
    // }

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 150) {
        alert("You got score of: " + score.innerText + "\nPlay again?");
        location.reload();
    }


}, 50);