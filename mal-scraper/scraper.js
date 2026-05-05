const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs/promises');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function scrapeMAL() {
    const baseUrl = 'https://myanimelist.net/topanime.php?type=favorite';
    const allAnime = [];
    const limits = [0, 50, 100, 150, 200];

    for (let i = 0; i < limits.length; i++) {
        const limit = limits[i];
        const url = limit === 0 ? baseUrl : `${baseUrl}&limit=${limit}`;
        console.log(`Scraping page: ${url}`);

        try {
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            const $ = cheerio.load(response.data);

            $('.ranking-list').each((index, element) => {
                const rank = $(element).find('td.rank span').text().trim();
                const title = $(element).find('div.detail h3 a').text().trim();
                
                // Image URL: MAL uses data-src for lazy loaded images, fallback to src
                const imgElement = $(element).find('td.title a img');
                const imageUrl = imgElement.attr('data-src') || imgElement.attr('src');

                const infoText = $(element).find('div.detail div.information').text().trim();
                // Information block example:
                // TV (64 eps)
                // Apr 2009 - Jul 2010
                // 3,184,528 members

                let episodes = 'Unknown';
                let year = 'Unknown';

                const lines = infoText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
                
                if (lines.length >= 2) {
                    // Extract episodes (e.g., "TV (64 eps)" or "64 eps")
                    const typeEpsMatch = lines[0].match(/\((.*? eps)\)/) || lines[0].match(/\d+\s+eps/);
                    if (typeEpsMatch) {
                        episodes = typeEpsMatch[1] || typeEpsMatch[0];
                    }

                    // Extract year from date string (e.g., "Apr 2009" or "Apr 2009 - Jul 2010")
                    const dateLine = lines[1];
                    const yearMatch = dateLine.match(/[A-Z][a-z]{2}\s(\d{4})/);
                    if (yearMatch) {
                        year = yearMatch[1];
                    } else if (dateLine.match(/\d{4}/)) {
                        year = dateLine.match(/\d{4}/)[0];
                    }
                }

                allAnime.push({
                    rank,
                    title,
                    imageUrl,
                    episodes,
                    year
                });
            });

            if (i < limits.length - 1) {
                console.log('Waiting 3 seconds before next page...');
                await sleep(3000);
            }
        } catch (error) {
            console.error(`Error scraping ${url}:`, error.message);
        }
    }

    await fs.writeFile('top_250_anime.json', JSON.stringify(allAnime, null, 2));
    console.log(`Successfully saved ${allAnime.length} anime to top_250_anime.json`);
}

scrapeMAL();
