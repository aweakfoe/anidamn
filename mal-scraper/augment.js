const axios = require('axios');
const fs = require('fs/promises');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function augmentData() {
    let animeData = [];
    try {
        const data = await fs.readFile('anime_data.json', 'utf8');
        animeData = JSON.parse(data);
    } catch (err) {
        console.log('anime_data.json not found, falling back to top_250_anime.json');
        const data = await fs.readFile('top_250_anime.json', 'utf8');
        animeData = JSON.parse(data);
    }

    const updatedData = [];

    console.log(`Starting augmentation for ${animeData.length} anime entries...`);

    for (let i = 0; i < animeData.length; i++) {
        const anime = animeData[i];
        console.log(`[${i + 1}/${animeData.length}] Fetching data for: ${anime.title}`);
        
        try {
            const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(anime.title)}&limit=1`;
            const response = await axios.get(url);
            
            const results = response.data.data;
            if (results && results.length > 0) {
                const jikanData = results[0];
                
                // Extract Studio
                const studios = jikanData.studios || [];
                anime.studio = studios.length > 0 ? studios[0].name : "Unknown";
                
                // Extract Genre (first one)
                const genres = jikanData.genres || [];
                anime.genre = genres.length > 0 ? genres[0].name : "Unknown";

                // Infer lead_gender based on demographic tags
                const demographics = jikanData.demographics || [];
                const allTags = [...genres, ...demographics].map(t => t.name.toLowerCase());
                
                // Jikan uses "shounen" and "shoujo"
                if (allTags.includes("shounen") || allTags.includes("seinen") || allTags.includes("shonen")) {
                    anime.lead_gender = "Male";
                } else if (allTags.includes("shoujo") || allTags.includes("josei") || allTags.includes("shojo")) {
                    anime.lead_gender = "Female";
                } else {
                    anime.lead_gender = "Unknown";
                }
            } else {
                console.log(`  -> No results found on Jikan API.`);
                anime.studio = "Unknown";
                anime.genre = "Unknown";
                anime.lead_gender = "Unknown";
            }
        } catch (error) {
            console.error(`  -> Error fetching data:`, error.message);
            anime.studio = "Unknown";
            anime.genre = "Unknown";
            anime.lead_gender = "Unknown";
            
            if (error.response && error.response.status === 429) {
                console.log("  -> Rate limited! Waiting 5 extra seconds...");
                await sleep(5000);
            }
        }
        
        updatedData.push(anime);
        
        // Save incrementally so we don't lose data if it crashes
        await fs.writeFile('anime_data_final.json', JSON.stringify(updatedData, null, 2));

        // Add 2-second delay between every API request to avoid rate limits
        if (i < animeData.length - 1) {
            await sleep(2000);
        }
    }

    console.log(`\nFinished augmenting data. Saved to anime_data_final.json`);
}

augmentData();
