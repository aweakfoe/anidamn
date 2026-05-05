let allAnime = [];
let targetAnime = null;
let fuse = null;
let currentMode = 'daily'; // 'daily' or 'unlimited'
let guesses = [];
let gameEnded = false;

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const guessesContainer = document.getElementById('guesses-container');
const streakCounter = document.getElementById('streak-counter');
const dailyBtn = document.getElementById('daily-mode-btn');
const unlimitedBtn = document.getElementById('unlimited-mode-btn');
const gameOverContainer = document.getElementById('game-over-container');
const gameOverTitle = document.getElementById('game-over-title');
const gameOverDesc = document.getElementById('game-over-desc');
const targetRevealImg = document.getElementById('target-reveal-img');
const targetRevealName = document.getElementById('target-reveal-name');
const playAgainBtn = document.getElementById('play-again-btn');
const yesterdayBanner = document.getElementById('yesterday-banner');
const yesterdayImg = document.getElementById('yesterday-img');
const yesterdayTitle = document.getElementById('yesterday-title');

// Init
async function init() {
    if (typeof ALL_ANIME_DATA !== 'undefined') {
        allAnime = ALL_ANIME_DATA;
    } else {
        console.error("Failed to load anime data");
        return;
    }

    fuse = new Fuse(allAnime, {
        keys: ['title', 'genre'],
        threshold: 0.3
    });

    setupEvents();
    loadState();
    updateStreakUI();
}

function getTarget(type) {
    if (type === 'daily') return getDailyTarget(allAnime);
    if (type === 'yesterday') return getYesterdayTarget(allAnime);
}

function startNewGame(mode) {
    currentMode = mode;
    guesses = [];
    gameEnded = false;
    guessesContainer.innerHTML = '';
    gameOverContainer.classList.add('hidden');
    searchInput.disabled = false;
    searchInput.value = '';
    
    if (mode === 'daily') {
        targetAnime = getTarget('daily');
        dailyBtn.className = "px-4 py-1.5 rounded-full font-label-caps text-xs transition-colors bg-white/10 text-on-surface";
        unlimitedBtn.className = "px-4 py-1.5 rounded-full font-label-caps text-xs transition-colors text-outline hover:text-on-surface";
        playAgainBtn.classList.add('hidden');
        showYesterdayBanner();
    } else {
        targetAnime = allAnime[Math.floor(Math.random() * allAnime.length)];
        unlimitedBtn.className = "px-4 py-1.5 rounded-full font-label-caps text-xs transition-colors bg-white/10 text-on-surface";
        dailyBtn.className = "px-4 py-1.5 rounded-full font-label-caps text-xs transition-colors text-outline hover:text-on-surface";
        playAgainBtn.classList.remove('hidden');
        yesterdayBanner.classList.add('hidden');
    }
    loadState();
}

function showYesterdayBanner() {
    const yTarget = getTarget('yesterday');
    if(yTarget) {
        yesterdayImg.src = yTarget.imageUrl || '';
        yesterdayTitle.textContent = yTarget.title;
        yesterdayBanner.classList.remove('hidden');
        yesterdayBanner.classList.add('flex');
    }
}

// State Management
function saveState() {
    if (currentMode === 'daily') {
        const today = getISTDateString(0);
        localStorage.setItem('daily_state', JSON.stringify({
            date: today,
            guesses: guesses.map(g => g.title),
            gameEnded
        }));
    } else {
        sessionStorage.setItem('unlimited_state', JSON.stringify({
            target: targetAnime.title,
            guesses: guesses.map(g => g.title),
            gameEnded
        }));
    }
}

function loadState() {
    guessesContainer.innerHTML = '';
    guesses = [];
    gameEnded = false;
    
    if (currentMode === 'daily') {
        const today = getISTDateString(0);
        const stateStr = localStorage.getItem('daily_state');
        if (stateStr) {
            const state = JSON.parse(stateStr);
            if (state.date === today) {
                targetAnime = getTarget('daily'); // Ensure target is set
                state.guesses.forEach(gTitle => {
                    const animeObj = allAnime.find(a => a.title === gTitle);
                    if(animeObj) makeGuess(animeObj, true);
                });
            } else {
                // New day! Check streak loss if they didn't finish yesterday
                checkStreakReset();
            }
        }
    } else {
        const stateStr = sessionStorage.getItem('unlimited_state');
        if (stateStr) {
            const state = JSON.parse(stateStr);
            const savedTarget = allAnime.find(a => a.title === state.target);
            if (savedTarget) {
                targetAnime = savedTarget;
                state.guesses.forEach(gTitle => {
                    const animeObj = allAnime.find(a => a.title === gTitle);
                    if(animeObj) makeGuess(animeObj, true);
                });
            }
        }
    }
}

function checkStreakReset() {
    const lastWinDate = localStorage.getItem('last_win_date');
    if (lastWinDate) {
        const today = new Date(getISTDateString(0));
        const lastWin = new Date(lastWinDate);
        const diffDays = Math.floor((today - lastWin) / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
            localStorage.setItem('daily_streak', '0');
            updateStreakUI();
        }
    }
}

function updateStreakUI() {
    const streak = localStorage.getItem('daily_streak') || '0';
    streakCounter.textContent = streak;
}

function handleWinLoss(won) {
    gameEnded = true;
    searchInput.disabled = true;
    gameOverContainer.classList.remove('hidden');
    gameOverContainer.classList.add('flex');
    targetRevealImg.src = targetAnime.imageUrl;
    targetRevealName.textContent = targetAnime.title;
    
    // Increment total games played
    let totalPlayed = parseInt(localStorage.getItem('total_games_played') || '0');
    totalPlayed++;
    localStorage.setItem('total_games_played', totalPlayed.toString());
    
    if (won) {
        gameOverTitle.textContent = "You Got It!";
        gameOverTitle.className = "font-display-xl text-4xl mb-4 text-[#7fe27f]";
        gameOverDesc.textContent = `You guessed the anime in ${guesses.length} tries!`;
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        if (currentMode === 'daily') {
            let streak = parseInt(localStorage.getItem('daily_streak') || '0');
            streak++;
            localStorage.setItem('daily_streak', streak.toString());
            localStorage.setItem('last_win_date', getISTDateString(0));
            updateStreakUI();
        }
    } else {
        gameOverTitle.textContent = "Game Over";
        gameOverTitle.className = "font-display-xl text-4xl mb-4 text-[#ffb4ab]";
        gameOverDesc.textContent = "You ran out of guesses! The anime was:";
        
        if (currentMode === 'daily') {
            localStorage.setItem('daily_streak', '0');
            updateStreakUI();
        }
    }
    saveState();
}

// UI & Logic
function setupEvents() {
    dailyBtn.addEventListener('click', () => startNewGame('daily'));
    unlimitedBtn.addEventListener('click', () => startNewGame('unlimited'));
    playAgainBtn.addEventListener('click', () => startNewGame('unlimited'));
    
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if(val.length < 2) {
            searchResults.classList.add('hidden');
            return;
        }
        const results = fuse.search(val).slice(0, 5);
        renderSearchResults(results);
    });
    
    // Hide dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });
}

function renderSearchResults(results) {
    searchResults.innerHTML = '';
    if(results.length === 0) {
        searchResults.classList.add('hidden');
        return;
    }
    
    results.forEach(res => {
        const anime = res.item;
        const div = document.createElement('div');
        div.className = "p-3 hover:bg-surface-bright cursor-pointer flex items-center gap-3 transition-colors border-b border-white/5 last:border-0";
        div.innerHTML = `
            <img src="${anime.imageUrl}" class="w-10 h-10 object-cover rounded shadow">
            <div>
                <p class="font-body-md text-sm text-on-surface">${anime.title}</p>
                <p class="font-label-caps text-[10px] text-outline">${anime.year} • ${anime.genre}</p>
            </div>
        `;
        div.addEventListener('click', () => {
            if(gameEnded) return;
            searchInput.value = '';
            searchResults.classList.add('hidden');
            makeGuess(anime);
        });
        searchResults.appendChild(div);
    });
    searchResults.classList.remove('hidden');
}

function parseNumber(str) {
    if(!str || str === 'Unknown' || str === '? eps') return null;
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : null;
}

function compareAttr(guessVal, targetVal, type) {
    let status = 'miss'; // 'miss', 'partial', 'match'
    let arrow = ''; // 'up', 'down', ''
    
    if (guessVal == targetVal) {
        return { status: 'match', arrow: '' };
    }

    if (type === 'year') {
        const g = parseInt(guessVal);
        const t = parseInt(targetVal);
        if(!g || !t) return { status: 'miss', arrow: '' };
        if (Math.abs(g - t) <= 3) status = 'partial';
        arrow = g < t ? 'up' : 'down';
    } 
    else if (type === 'episodes') {
        const g = parseNumber(guessVal);
        const t = parseNumber(targetVal);
        if(!g || !t) return { status: 'miss', arrow: '' };
        if (g == t) return { status: 'match', arrow: ''};
        if (Math.abs(g - t) <= t * 0.1) status = 'partial';
        arrow = g < t ? 'up' : 'down';
    }
    else if (type === 'rank') {
        const g = parseNumber(guessVal);
        const t = parseNumber(targetVal);
        if(!g || !t) return { status: 'miss', arrow: '' };
        // Rank up means a LOWER number (closer to 1)
        arrow = g > t ? 'up' : 'down';
    }
    
    return { status, arrow };
}

function createBox(label, value, compResult, delayIdx, isRestoring) {
    // Colors:
    // match: bg-[#7fe27f] text-black
    // partial: bg-[#e2c57f] text-black
    // miss: bg-surface-variant text-on-surface
    
    let frontClass = "bg-surface-variant border border-white/5";
    let backClass = compResult.status === 'match' ? "bg-[#7fe27f] text-black border border-white/5" :
                    compResult.status === 'partial' ? "bg-[#e2c57f] text-black border border-white/5" :
                    "bg-surface-variant border border-white/5 text-on-surface";
                    
    let arrowHtml = '';
    if(compResult.arrow === 'up') arrowHtml = `<span class="material-symbols-outlined text-lg">arrow_upward</span>`;
    if(compResult.arrow === 'down') arrowHtml = `<span class="material-symbols-outlined text-lg">arrow_downward</span>`;

    const delay = isRestoring ? '0s' : `${delayIdx * 0.1}s`;
    
    return `
    <div class="attr-container rounded-xl">
        <div class="attribute-box-inner ${isRestoring ? 'flip' : 'animate-flip'}" style="${!isRestoring ? `animation-delay: ${delay};` : ''}">
            <div class="attribute-front rounded-xl ${frontClass}">
                <span class="font-label-sm text-xs text-outline uppercase tracking-wider mb-1">${label}</span>
                <span class="material-symbols-outlined text-outline/50 text-3xl">help</span>
            </div>
            <div class="attribute-back rounded-xl ${backClass}">
                <span class="font-label-sm text-xs opacity-70 uppercase tracking-wider mb-1">${label}</span>
                <div class="flex items-center gap-1 font-body-md font-semibold">
                    ${value} ${arrowHtml}
                </div>
            </div>
        </div>
    </div>
    `;
}

function makeGuess(anime, isRestoring = false) {
    guesses.push(anime);
    const guessIdx = guesses.length;
    
    const cYear = compareAttr(anime.year, targetAnime.year, 'year');
    const cEps = compareAttr(anime.episodes, targetAnime.episodes, 'episodes');
    const cRank = compareAttr(anime.rank, targetAnime.rank, 'rank');
    const cGender = { status: anime.lead_gender === targetAnime.lead_gender ? 'match' : 'miss', arrow: ''};
    const cGenre = { status: anime.genre === targetAnime.genre ? 'match' : 'miss', arrow: ''};
    const cStudio = { status: anime.studio === targetAnime.studio ? 'match' : 'miss', arrow: ''};

    const card = document.createElement('div');
    card.className = "glass-panel rounded-card p-6 md:p-8 flex flex-col gap-6 w-full relative overflow-hidden";
    if(!isRestoring) card.classList.add('animate-fade-in');
    
    card.innerHTML = `
    <div class="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
    <div class="flex items-center gap-6 relative z-10">
        <div class="w-16 h-16 rounded-full overflow-hidden border border-white/10 shadow-lg shrink-0">
            <img src="${anime.imageUrl}" class="w-full h-full object-cover">
        </div>
        <div>
            <h2 class="font-headline-md text-xl text-on-surface">${anime.title}</h2>
            <span class="font-label-caps text-[10px] text-outline uppercase tracking-wider">Guess ${guessIdx}/10</span>
        </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
        ${createBox('Year', anime.year, cYear, 1, isRestoring)}
        ${createBox('Episodes', anime.episodes, cEps, 2, isRestoring)}
        ${createBox('Rank', `#${anime.rank}`, cRank, 3, isRestoring)}
        ${createBox('Gender', anime.lead_gender, cGender, 4, isRestoring)}
        ${createBox('Genre', anime.genre, cGenre, 5, isRestoring)}
        ${createBox('Studio', anime.studio, cStudio, 6, isRestoring)}
    </div>
    `;
    
    guessesContainer.prepend(card); // newest top

    if (!isRestoring) {
        // Trigger flip animation after small tick
        setTimeout(() => {
            const boxes = card.querySelectorAll('.attribute-box-inner:not(.flip)');
            boxes.forEach((b, i) => {
                setTimeout(() => b.classList.add('flip'), i * 150);
            });
        }, 50);
        saveState();
    } else {
        const boxes = card.querySelectorAll('.attribute-box-inner');
        boxes.forEach(b => b.classList.add('flip'));
    }

    if (anime.title === targetAnime.title) {
        if(!isRestoring) setTimeout(() => handleWinLoss(true), 1200);
        else handleWinLoss(true);
    } else if (guesses.length >= 10) {
        if(!isRestoring) setTimeout(() => handleWinLoss(false), 1200);
        else handleWinLoss(false);
    }
}

// Start
init().then(() => {
    startNewGame('daily');
});
