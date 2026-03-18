const RSS_PARSER = require('rss-parser');
const fs = require('fs');
const parser = new RSS_PARSER();

// 1. Double check your ID is in this URL
const SORO_FEED_URL = 'https://trysoro.com/feed/YOUR_ID_HERE';

async function sync() {
    try {
        console.log('--- STARTING CLEAN BUILD ---');
        const feed = await parser.parseURL(SORO_FEED_URL);
        
        if (!feed.items || feed.items.length === 0) {
            console.log('⚠️ Feed is empty.');
            return;
        }

        // FIX ORDER: Soro usually lists oldest first in the array. 
        // .reverse() flips it so NEWEST is index 0.
        const newestFirst = feed.items.reverse();

        let blogCards = '';
        newestFirst.forEach(item => {
            const slug = item.title.toLowerCase().trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '') + '.html';
            
            blogCards += `
<article class='glass-card p-6 rounded-3xl hover:border-white/20 transition group'>
    <h3 class='text-lg font-bold mt-1 group-hover:text-blue-400'>${item.title}</h3>
    <p class='text-slate-400 text-sm mt-2 line-clamp-2'>${item.contentSnippet || ''}</p>
    <a href='${slug}' class='text-blue-400 text-xs font-bold mt-4 inline-block hover:underline'>Read Full Article →</a>
</article>\n`;
        });

        const finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Driving Tips | D4Driving Peterborough</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #0f172a; color: white; }
        .glass-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); }
    </style>
</head>
<body class="min-h-screen pb-20">
    <nav class="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <a href="index.html" class="flex items-center gap-3">
            <img src="400dpiLogoCropped.png" alt="Logo" class="h-10 w-auto">
            <span class="font-bold">D4DRIVING</span>
        </a>
        <a href="index.html" class="text-xs font-bold bg-slate-800 px-4 py-2 rounded-full border border-white/10">← Back Home</a>
    </nav>
    <header class="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold">The D4Driving Journal</h1>
    </header>
    <main class="max-w-6xl mx-auto px-6">
        <div id="blog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${blogCards}
        </div>
    </main>
</body>
</html>`;

        // 🚨 NO fs.readFileSync HERE. WE ONLY WRITE.
        fs.writeFileSync('./blog.html', finalHtml, 'utf8');
        console.log('✅ Success! blog.html was built from scratch with newest posts first.');

    } catch (error) {
        console.error('❌ Sync failed:', error);
        process.exit(1);
    }
}

sync();
