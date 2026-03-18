const RSS_PARSER = require('rss-parser');
const fs = require('fs');
const parser = new RSS_PARSER();

// 1. Replace with your actual Soro Feed URL
const SORO_FEED_URL = 'https://app.trysoro.com/api/rss/a164f988-26e5-4b2c-908a-57e06e27c032';

async function sync() {
    try {
        console.log('Fetching feed...');
        const feed = await parser.parseURL(SORO_FEED_URL);
        
        // FIX ORDER: Newest first
        const items = feed.items.reverse(); 

        let htmlContent = '';
        items.forEach(item => {
            const slug = item.title.toLowerCase().replace(/[^\w-]/g, '-') + '.html';
            htmlContent += `
<article class='glass-card p-6 rounded-3xl hover:border-white/20 transition group'>
    <h3 class='text-lg font-bold mt-1 group-hover:text-blue-400'>${item.title}</h3>
    <p class='text-slate-400 text-sm mt-2 line-clamp-2'>${item.contentSnippet || ''}</p>
    <a href='${slug}' class='text-blue-400 text-xs font-bold mt-4 inline-block hover:underline'>Read Full Article →</a>
</article>\n`;
        });

        let blogHtml = fs.readFileSync('blog.html', 'utf8');

        // NEW LOGIC: Find the "blog-grid" div and put the content inside it
        const gridIdentifier = 'id="blog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">';
        const gridIndex = blogHtml.indexOf(gridIdentifier);

        if (gridIndex !== -1) {
            const insertAt = gridIndex + gridIdentifier.length;
            const before = blogHtml.substring(0, insertAt);
            const after = blogHtml.substring(blogHtml.indexOf('</div>', insertAt));
            
            const finalHtml = before + '\n' + htmlContent + after;
            fs.writeFileSync('blog.html', finalHtml);
            console.log('✅ Success! Articles moved into the grid (Newest First).');
        } else {
            console.error('❌ Could not find the blog-grid in your HTML file.');
        }

    } catch (error) {
        console.error('❌ Sync failed:', error);
        process.exit(1);
    }
}

sync();
