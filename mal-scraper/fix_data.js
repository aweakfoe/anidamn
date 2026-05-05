const axios = require('axios');
const fs = require('fs/promises');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fixData() {
    console.log("Reading top_250_anime.json...");
    const data = await fs.readFile('top_250_anime.json', 'utf8');
    let animeData = JSON.parse(data);
    
    let updatedData = [];
    
    for (let i = 0; i < animeData.length; i++) {
        let anime = { ...animeData[i] };
        
        try {
            const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(anime.title)}&limit=1`;
            const response = await axios.get(url);
            const results = response.data.data;
            
            if (results && results.length > 0) {
                const jikanData = results[0];
                
                // 1. English Title (fallback to standard title if English doesn't exist)
                anime.title = jikanData.title_english || jikanData.title || anime.title;
                
                // 2. Genre -> Demographic or fallback to Genre
                const demographics = jikanData.demographics || [];
                const genres = jikanData.genres || [];
                
                if (demographics.length > 0) {
                    anime.genre = demographics[0].name; // e.g. "Shounen", "Seinen"
                } else if (genres.length > 0) {
                    anime.genre = genres[0].name; // fallback e.g. "Action"
                } else {
                    anime.genre = "Unknown";
                }
                
                // 3. Studio
                const studios = jikanData.studios || [];
                anime.studio = studios.length > 0 ? studios[0].name : "Unknown";
                
                // 4. Lead Gender based on Demographic
                const allTags = [...genres, ...demographics].map(t => t.name.toLowerCase());
                if (allTags.includes("shounen") || allTags.includes("seinen") || allTags.includes("shonen")) {
                    anime.lead_gender = "Male";
                } else if (allTags.includes("shoujo") || allTags.includes("josei") || allTags.includes("shojo")) {
                    anime.lead_gender = "Female";
                } else {
                    anime.lead_gender = "Unknown";
                }
            }
            console.log(`[${i+1}/250] Converted to: ${anime.title} | Genre: ${anime.genre}`);
        } catch (error) {
            console.error(`[${i+1}/250] Error fetching ${anime.title}: ${error.message}`);
            if (error.response && error.response.status === 429) {
                await sleep(5000); // Backoff on rate limit
            }
        }
        
        updatedData.push(anime);
        // Write the data.js file incrementally
        await fs.writeFile('d:/Antigravity/areydamn/animerank/data.js', `const ALL_ANIME_DATA = ${JSON.stringify(updatedData, null, 2)};`);
        
        // Jikan API allows 3 requests per second. We delay 400ms to stay safe.
        await sleep(400); 
    }
    console.log("Successfully rebuilt data.js with English titles and Demographic genres!");
}

fixData();
