const ufo = document.getElementById('ufo');
const alien = document.getElementById('alien');
const gameContainer = document.getElementById('game-container');

// Set initial positions for UFO and alien
ufo.style.top = '0px';
ufo.style.left = '0px';
alien.style.top = Math.floor(Math.random() * 400) + 'px';
alien.style.left = Math.floor(Math.random() * 400) + 'px';

// Add event listener for arrow keys to move UFO
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const currentTop = parseInt(ufo.style.top);
    const currentLeft = parseInt(ufo.style.left);

    if (key === 'ArrowUp' && currentTop > 0) {
        ufo.style.top = currentTop - 10 + 'px';
    } else if (key === 'ArrowDown' && currentTop < 400) {
        ufo.style.top = currentTop + 10 + 'px';
    } else if (key === 'ArrowLeft' && currentLeft > 0) {
        ufo.style.left = currentLeft - 10 + 'px';
    } else if (key === 'ArrowRight' && currentLeft < 400) {
        ufo.style.left = currentLeft + 10 + 'px';
    }

    // Check for collision with alien
    if (
        Math.abs(parseInt(ufo.style.top) - parseInt(alien.style.top)) <= 100 &&
        Math.abs(parseInt(ufo.style.left) - parseInt(alien.style.left)) <= 100
    ) {
        alert('Collision detected! UFO caught the alien!');
        // Reset alien position
        alien.style.top = Math.floor(Math.random() * 400) + 'px';
        alien.style.left = Math.floor(Math.random() * 400) + 'px';
    }
});