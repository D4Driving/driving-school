const RSS_PARSER = require('rss-parser');
const fs = require('fs');
const parser = new RSS_PARSER();

// 1. YOUR SORO FEED URL
const SORO_FEED_URL = 'https://trysoro.com/feed/YOUR_ID_HERE';

async function sync() {
    try {
        console.log('Fetching feed from Soro...');
        const feed = await parser.parseURL(SORO_FEED_URL);
        
        if (!feed.items || feed.items.length === 0) {
            console.error('❌ No items found in the Soro feed.');
            return;
        }

        // SORT BY DATE (Newest First)
        // This is more reliable than .reverse()
        const sortedItems = feed.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        let htmlContent = '';
        
        sortedItems.forEach(item => {
            console.log(`Processing: ${item.title}`);
            const slug = item.title.toLowerCase().trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '') + '.html';
            
            htmlContent += `
<article class='glass-card p-6 rounded-3xl hover:border-white/20 transition group'>
    <h3 class='text-lg font-bold mt-1 group-hover:text-blue-400'>${item.title}</h3>
    <p class='text-slate-400 text-sm mt-2 line-clamp-2'>${item.contentSnippet || ''}</p>
    <a href='${slug}' class='text-blue-400 text-xs font-bold mt-4 inline-block hover:underline'>Read Full Article →</a>
</article>\n`;
        });

        // READ BLOG.HTML
        let blogHtml = fs.readFileSync('blog.html', 'utf8');
        const startMarker = '';
        const endMarker = '';

        const startIndex = blogHtml.indexOf(startMarker);
        const endIndex = blogHtml.indexOf(endMarker);

        if (startIndex !== -1 && endIndex !== -1) {
            // We keep the markers themselves so we can run this again later!
            const newHtml = blogHtml.substring(0, startIndex + startMarker.length) + 
                            '\n' + htmlContent + 
                            blogHtml.substring(endIndex);
            
            fs.writeFileSync('blog.html', newHtml);
            console.log(`✅ Success! Injected ${sortedItems.length} articles (Newest First).`);
        } else {
            console.error('❌ ERROR: Could not find markers in blog.html.');
            console.log('Ensure your blog.html contains: and ');
        }

    } catch (error) {
        console.error('❌ Sync failed:', error);
        process.exit(1);
    }
}

sync();
