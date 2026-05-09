document.addEventListener('DOMContentLoaded', () => {
    
    // --- Confetti Animation ---
    const triggerConfetti = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    };

    // Trigger on load
    triggerConfetti();


    // --- Floating Balloons Generator ---
    const balloonContainer = document.getElementById('balloon-container');
    const colors = ['var(--clr-pink)', 'var(--clr-peach)', 'var(--clr-gold)', 'var(--clr-rose)'];

    const createBalloon = () => {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Randomize position, color, and size
        const left = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDuration = Math.random() * 10 + 10; // 10s to 20s
        const scale = Math.random() * 0.5 + 0.8; // 0.8 to 1.3

        balloon.style.left = `${left}vw`;
        balloon.style.backgroundColor = color;
        balloon.style.animationDuration = `${animationDuration}s`;
        balloon.style.transform = `scale(${scale})`;
        
        // Update the bottom triangle color using css variable
        balloon.style.setProperty('--clr-pink', color);

        balloonContainer.appendChild(balloon);

        // Remove balloon after animation ends to clean up DOM
        setTimeout(() => {
            balloon.remove();
        }, animationDuration * 1000);
    };

    // Generate initial balloons
    for (let i = 0; i < 15; i++) {
        setTimeout(createBalloon, Math.random() * 5000);
    }

    // Keep generating balloons
    setInterval(createBalloon, 2000);


    // --- Apology Excuses Interaction ---
    const excuses = document.querySelectorAll('.excuses-list li');
    excuses.forEach(excuse => {
        excuse.addEventListener('click', function() {
            // Remove selection from others
            excuses.forEach(e => e.style.borderColor = 'transparent');
            
            // Highlight selected
            this.style.borderColor = 'var(--clr-gold)';
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'translateX(10px)'; // revert to hover state
            }, 200);

            // Optional: little pop of confetti
            confetti({
                particleCount: 30,
                spread: 50,
                origin: { y: 0.8 }
            });
        });
    });


    // --- Coupon Redemption Interaction ---
    const redeemBtn = document.getElementById('redeem-btn');
    redeemBtn.addEventListener('click', () => {
        triggerConfetti();
        redeemBtn.textContent = 'Redeemed! Let me know when & where! 🍽️';
        redeemBtn.style.backgroundColor = 'var(--clr-dark)';
        redeemBtn.disabled = true;
    });

});
