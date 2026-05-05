// PRNG for daily deterministic selection
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

// Get the date string in IST (Asia/Kolkata)
function getISTDateString(offsetDays = 0) {
    const date = new Date();
    // Convert to IST time
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const istTime = new Date(utc + (3600000 * 5.5));
    
    istTime.setDate(istTime.getDate() + offsetDays);
    
    const yyyy = istTime.getFullYear();
    const mm = String(istTime.getMonth() + 1).padStart(2, '0');
    const dd = String(istTime.getDate()).padStart(2, '0');
    
    return `${yyyy}-${mm}-${dd}`;
}

function getTargetForDate(dateStr, animeList) {
    if (!animeList || animeList.length === 0) return null;
    
    let seed = 0;
    for(let i = 0; i < dateStr.length; i++) {
        seed += dateStr.charCodeAt(i) * Math.pow(10, i % 3);
    }
    // Mix the seed more so consecutive days don't produce similar sequences
    const prng = mulberry32(seed * 12345);
    
    // 80% from top 100
    const top100 = animeList.filter(a => parseInt(a.rank) <= 100);
    const topRest = animeList.filter(a => parseInt(a.rank) > 100);
    
    const r = prng();
    
    if (r < 0.8 && top100.length > 0) {
        return top100[Math.floor(prng() * top100.length)];
    } else if (topRest.length > 0) {
        return topRest[Math.floor(prng() * topRest.length)];
    }
    
    return animeList[0];
}

function getDailyTarget(animeList) {
    return getTargetForDate(getISTDateString(0), animeList);
}

function getYesterdayTarget(animeList) {
    return getTargetForDate(getISTDateString(-1), animeList);
}
