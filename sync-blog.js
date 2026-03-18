const RSS_PARSER = require('rss-parser');
const fs = require('fs');
const parser = new RSS_PARSER();

const SORO_FEED_URL = 'https://trysoro.com/feed/YOUR_ID_HERE'; // <--- DOUBLE CHECK YOUR ID!

async function sync() {
    try {
        console.log('Fetching from Soro...');
        const feed = await parser.parseURL(SORO_FEED_URL);
        
        // This sorts by date to ensure NEWEST is at the TOP
        const items = feed.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        let cards = '';
        items.forEach(item => {
            const slug = item.title.toLowerCase().replace(/[^\w-]/g, '-') + '.html';
            cards += `
        <article class='glass-card p-6 rounded-3xl hover:border-white/20 transition group'>
            <h3 class='text-lg font-bold mt-1 group-hover:text-blue-400'>${item.title}</h3>
            <p class='text-slate-400 text-sm mt-2 line-clamp-2'>${item.contentSnippet || ''}</p>
            <a href='${slug}' class='text-blue-400 text-xs font-bold mt-4 inline-block hover:underline'>Read Full Article →</a>
        </article>`;
        });

        // The Full Template
        const html = `<!DOCTYPE html>\n<html>...[Your full HTML code here]...</html>`;

        // FORCE WRITE: This creates the file instead of opening it
        fs.writeFileSync('./blog.html', html, { encoding: 'utf8', flag: 'w' });
        console.log('✅ blog.html created successfully.');

    } catch (err) {
        console.error('Failed:', err.message);
    }
}
sync();
