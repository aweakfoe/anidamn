// --- Audio Controls ---
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🎵 Play Music';
    } else {
        bgMusic.play();
        musicToggle.textContent = '⏸️ Pause Music';
    }
    isPlaying = !isPlaying;
});

// Play music automatically on first interaction (browsers block autoplay)
document.body.addEventListener('click', () => {
    if (!isPlaying && bgMusic.paused) {
        // Attempt to play on first click anywhere
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggle.textContent = '⏸️ Pause Music';
        }).catch(err => console.log("Autoplay blocked until user interaction", err));
    }
}, { once: true });


// --- Navigation Logic ---
const pages = document.querySelectorAll('.page');
const humorCounter = document.getElementById('humor-counter');

function nextPage(pageNumber) {
    // Find current active page
    const current = document.querySelector('.page.active');
    
    // Find next page
    const next = document.getElementById(`page-${pageNumber}`) || document.getElementById('landing');

    // Slide out current
    if (current) {
        current.classList.remove('active');
        current.classList.add('slide-out');
        
        setTimeout(() => {
            current.classList.remove('slide-out');
        }, 500); // match CSS transition time
    }

    // Slide in next
    setTimeout(() => {
        next.classList.add('active');
        
        // Show counter on "funny" pages (4, 5, 6)
        if (pageNumber >= 4 && pageNumber <= 6) {
            humorCounter.classList.remove('hidden');
        } else {
            humorCounter.classList.add('hidden');
        }

        // Reset the chasing button if going back to start
        if (pageNumber === 0) {
            resetChasingBtn();
        }

    }, 50); 
}


// --- Floating Hearts Particle System ---
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    
    // Random position horizontally
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random animation duration
    const duration = Math.random() * 3 + 3; // 3 to 6 seconds
    heart.style.animationDuration = duration + 's';
    
    // Random size
    const size = Math.random() * 1.5 + 0.5; // 0.5x to 2x
    heart.style.transform = `scale(${size})`;

    heartsContainer.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Spawn a heart every 400ms
setInterval(createHeart, 400);

// Also spawn hearts around cursor on mousemove
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) { // 10% chance per movement to spawn a heart
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = (e.clientX - 10) + 'px';
        heart.style.top = (e.clientY - 10) + 'px';
        
        // Faster animation for cursor hearts
        heart.style.animation = 'floatUp 1.5s linear forwards';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
});


// --- Chasing Button Logic (Page 6) ---
const chasingBtn = document.getElementById('chasing-btn');
let dodgeCount = 0;
const maxDodges = 3;

chasingBtn.addEventListener('mouseover', function(e) {
    if (dodgeCount < maxDodges) {
        // Move button randomly within the card
        const card = chasingBtn.parentElement;
        const cardRect = card.getBoundingClientRect();
        
        // Calculate random boundaries
        const maxX = cardRect.width - chasingBtn.offsetWidth - 40;
        const maxY = cardRect.height - chasingBtn.offsetHeight - 40;
        
        // Random offsets
        const randomX = Math.floor(Math.random() * maxX) - (maxX / 2);
        const randomY = Math.floor(Math.random() * maxY) - (maxY / 2);
        
        chasingBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        dodgeCount++;
    }
});

function resetChasingBtn() {
    dodgeCount = 0;
    chasingBtn.style.transform = 'translate(0px, 0px)';
}
