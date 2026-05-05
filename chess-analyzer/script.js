// Audio elements
const moveSound = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/move-self.mp3');
const captureSound = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/capture.mp3');

// Initialize Chess and Board
let board = null;
let game = new Chess();
let currentMoveIndex = -1;
let history = [];

// DOM Elements
const moveListEl = document.getElementById('moveList');
const evalFill = document.getElementById('evalFill');
const evalScore = document.getElementById('evalScore');
const bestMoveEl = document.getElementById('bestMove');
const engineStatus = document.getElementById('engineStatus');

// Stockfish Engine via Blob Worker
let engine = null;
let isEngineReady = false;
engineStatus.innerText = 'Downloading Engine...';

fetch('https://cdnjs.cloudflare.com/ajax/libs/stockfish.js/10.0.2/stockfish.js')
    .then(response => response.text())
    .then(text => {
        const blob = new Blob([text], {type: 'application/javascript'});
        const workerUrl = URL.createObjectURL(blob);
        engine = new Worker(workerUrl);
        
        engine.onmessage = function(event) {
            const line = typeof event === 'string' ? event : event.data;
            if (line === 'uciok') {
                isEngineReady = true;
                engineStatus.innerText = 'Engine Ready';
                evaluateCurrentPosition(); // Initial evaluation once ready
            } else if (line.indexOf('info depth') !== -1 && line.indexOf('score') !== -1) {
                parseEngineInfo(line);
            } else if (line.indexOf('bestmove') !== -1) {
                const parts = line.split(' ');
                if (parts[1] && parts[1] !== '(none)') {
                    bestMoveEl.innerText = `Best move: ${parts[1]}`;
                }
            }
        };
        engine.postMessage('uci');
    })
    .catch(err => {
        engineStatus.innerText = 'Engine Failed: ' + err.message;
        console.error('Failed to load stockfish:', err);
    });

function parseEngineInfo(line) {
    // Example: info depth 15 seldepth 22 multipv 1 score cp 45 nodes 186259 nps 1186363 time 157 pv e2e4 ...
    const match = line.match(/score (cp|mate) (-?\d+)/);
    if (match) {
        const type = match[1];
        let score = parseInt(match[2], 10);
        
        // If it's black's turn, invert the score to be from white's perspective
        if (game.turn() === 'b') {
            score = -score;
        }

        let displayScore = "";
        let fillPercentage = 50;

        if (type === 'cp') {
            displayScore = (score / 100).toFixed(1);
            // Cap at +/- 10 for bar visual
            let clamped = Math.max(-1000, Math.min(1000, score));
            fillPercentage = 50 + (clamped / 20); // 1000cp (10 pawns) = 100% or 0%
            if (score > 0) displayScore = "+" + displayScore;
        } else if (type === 'mate') {
            displayScore = `M${Math.abs(score)}`;
            if (score > 0) {
                displayScore = "+" + displayScore;
                fillPercentage = 100; // White winning
            } else {
                displayScore = "-" + displayScore;
                fillPercentage = 0; // Black winning
            }
        }

        evalScore.innerText = displayScore;
        evalFill.style.height = `${fillPercentage}%`;
    }
}

function evaluateCurrentPosition() {
    if (!isEngineReady) return;
    engineStatus.innerText = 'Analyzing...';
    engine.postMessage('stop');
    engine.postMessage(`position fen ${game.fen()}`);
    engine.postMessage('go depth 15');
}

function playSound(move) {
    if (move.captured) {
        captureSound.play().catch(e => console.log('Audio play prevented', e));
    } else {
        moveSound.play().catch(e => console.log('Audio play prevented', e));
    }
}

function removeHighlights() {
    $('#board .square-55d63').css('box-shadow', '');
}

function highlightMove(source, target) {
    removeHighlights();
    $('#board .square-' + source).css('box-shadow', 'inset 0 0 3px 3px rgba(155, 199, 0, 0.41)');
    $('#board .square-' + target).css('box-shadow', 'inset 0 0 3px 3px rgba(155, 199, 0, 0.41)');
}

function updateStatus() {
    board.position(game.fen());
    updateMoveListUI();
    
    if (currentMoveIndex >= 0) {
        const move = history[currentMoveIndex];
        highlightMove(move.from, move.to);
        // Don't play sound on just navigating, only on new moves (optional, can be modified)
    } else {
        removeHighlights();
    }
    
    evaluateCurrentPosition();
}

function onDragStart(source, piece, position, orientation) {
    // Only allow moves if we are at the end of the history
    if (currentMoveIndex !== history.length - 1) return false;
    
    // Do not pick up pieces if the game is over
    if (game.game_over()) return false;

    // Only pick up pieces for the side to move
    if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
    }
}

function onDrop(source, target) {
    // See if the move is legal
    const move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });

    // Illegal move
    if (move === null) return 'snapback';

    playSound(move);
    history = game.history({ verbose: true });
    currentMoveIndex = history.length - 1;
    
    updateStatus();
}

function onSnapEnd() {
    board.position(game.fen());
}

// Configuration for chessboard.js
const config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd,
    pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
};

board = Chessboard('board', config);

// --- Game Controls ---

document.getElementById('btnStart').addEventListener('click', () => {
    game.reset();
    currentMoveIndex = -1;
    updateStatus();
});

document.getElementById('btnPrev').addEventListener('click', () => {
    if (currentMoveIndex >= 0) {
        game.undo();
        currentMoveIndex--;
        updateStatus();
    }
});

document.getElementById('btnNext').addEventListener('click', () => {
    if (currentMoveIndex < history.length - 1) {
        currentMoveIndex++;
        const move = history[currentMoveIndex];
        game.move(move);
        updateStatus();
    }
});

document.getElementById('btnEnd').addEventListener('click', () => {
    while(currentMoveIndex < history.length - 1) {
        currentMoveIndex++;
        game.move(history[currentMoveIndex]);
    }
    updateStatus();
});

document.getElementById('btnFlip').addEventListener('click', () => {
    board.flip();
});

// --- PGN Handling ---

document.getElementById('btnLoadPgn').addEventListener('click', () => {
    const pgn = document.getElementById('pgnInput').value;
    const tempGame = new Chess();
    if (tempGame.load_pgn(pgn)) {
        game.load_pgn(pgn);
        history = game.history({ verbose: true });
        
        // Reset to start position and then go to end
        game.reset();
        currentMoveIndex = -1;
        while(currentMoveIndex < history.length - 1) {
            currentMoveIndex++;
            game.move(history[currentMoveIndex]);
        }
        
        updateStatus();
    } else {
        alert('Invalid PGN');
    }
});

function updateMoveListUI() {
    moveListEl.innerHTML = '';
    
    for (let i = 0; i < history.length; i += 2) {
        const moveNum = (i / 2) + 1;
        const whiteMove = history[i];
        const blackMove = history[i + 1];

        const row = document.createElement('div');
        row.style.display = 'contents';

        const numEl = document.createElement('div');
        numEl.className = 'move-num';
        numEl.innerText = moveNum + '.';
        row.appendChild(numEl);

        const whiteEl = document.createElement('div');
        whiteEl.className = 'move-item' + (currentMoveIndex === i ? ' active' : '');
        whiteEl.innerText = whiteMove.san;
        whiteEl.onclick = () => goToMove(i);
        row.appendChild(whiteEl);

        const blackEl = document.createElement('div');
        if (blackMove) {
            blackEl.className = 'move-item' + (currentMoveIndex === i + 1 ? ' active' : '');
            blackEl.innerText = blackMove.san;
            blackEl.onclick = () => goToMove(i + 1);
        }
        row.appendChild(blackEl);

        moveListEl.appendChild(row);
    }
    
    // Auto-scroll to active move
    const activeEl = moveListEl.querySelector('.active');
    if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
}

function goToMove(index) {
    game.reset();
    currentMoveIndex = index;
    for (let i = 0; i <= index; i++) {
        game.move(history[i]);
    }
    updateStatus();
}

// Initial Evaluation
evaluateCurrentPosition();
