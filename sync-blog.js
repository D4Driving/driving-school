const RSS_PARSER = require('rss-parser');
const fs = require('fs');
const parser = new RSS_PARSER();

// 1. REPLACE THIS WITH YOUR REAL SORO FEED URL
const SORO_FEED_URL = 'https://trysoro.com/feed/YOUR_ID_HERE';

async function sync() {
    try {
        console.log('Fetching feed from Soro...');
        const feed = await parser.parseURL(SORO_FEED_URL);
        
        // REVERSE THE ORDER: This puts the most recent articles at the top
        const newestFirst = feed.items.reverse();
        
        let htmlContent = '';
        
        newestFirst.forEach(item => {
            console.log(`Processing: ${item.title}`);
            const slug = item.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '.html';
            
            htmlContent += `
<article class='glass-card p-6 rounded-3xl hover:border-white/20 transition group'>
    <h3 class='text-lg font-bold mt-1 group-hover:text-blue-400'>${item.title}</h3>
    <p class='text-slate-400 text-sm mt-2 line-clamp-2'>${item.contentSnippet || ''}</p>
    <a href='${slug}' class='text-blue-400 text-xs font-bold mt-4 inline-block hover:underline'>Read Full Article →</a>
</article>\n`;
        });

        let blogHtml = fs.readFileSync('blog.html', 'utf8');
        const startMarker = '';
        const endMarker = '';

        const startIndex = blogHtml.indexOf(startMarker) + startMarker.length;
        const endIndex = blogHtml.indexOf(endMarker);

        if (startIndex !== -1 && endIndex !== -1) {
            const updatedHtml = blogHtml.substring(0, startIndex) + '\n' + htmlContent + blogHtml.substring(endIndex);
            fs.writeFileSync('blog.html', updatedHtml);
            console.log(`Successfully injected ${newestFirst.length} articles in newest-first order.`);
        } else {
            console.error('❌ Could not find SORO markers in blog.html');
        }

    } catch (error) {
        console.error('❌ Sync failed:', error);
        process.exit(1);
    }
}

sync();
