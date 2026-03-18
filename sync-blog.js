const RSS_PARSER = require('rss-parser');
const fs = require('fs');
const parser = new RSS_PARSER();

// 1. MAKE SURE YOUR ID IS CORRECT HERE
const SORO_FEED_URL = 'https://trysoro.com/feed/YOUR_ID_HERE';

async function sync() {
    try {
        console.log('--- STARTING SYNC ---');
        const feed = await parser.parseURL(SORO_FEED_URL);
        
        if (!feed.items || feed.items.length === 0) {
            console.error('❌ No items found in Soro feed.');
            return;
        }

        // FORCE REVERSE: 
        // If your posts were oldest-to-newest, this flips them to newest-to-oldest.
        const items = feed.items.reverse(); 

        let blogCards = '';
        items.forEach(item => {
            const slug = item.title.toLowerCase().trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '') + '.html';
            
            blogCards += `
        <article class='glass-card p-6 rounded-3xl hover:border-white/20 transition group'>
            <h3 class='text-lg font-bold mt-1 group-hover:text-blue-400'>${item.title}</h3>
            <p class='text-slate-400 text-sm mt-2 line-clamp-2'>${item.contentSnippet || ''}</p>
            <a href='${slug}' class='text-blue-400 text-xs font-bold mt-4 inline-block hover:underline'>Read Full Article →</a>
        </article>`;
        });

        // THE FULL PAGE TEMPLATE
        const fullPageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Driving Tips & News | D4Driving Peterborough</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #0f172a; color: white; }
        .glass-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); }
    </style>
</head>
<body class="min-h-screen pb-20">
    <nav class="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <a href="index.html" class="flex items-center gap-3 group">
            <img src="400dpiLogoCropped.png" alt="Logo" class="h-10 w-auto">
            <span class="font-bold tracking-tight group-hover:text-blue-400 transition">D4DRIVING</span>
        </a>
        <a href="index.html" class="text-xs font-bold uppercase tracking-widest bg-slate-800 px-4 py-2 rounded-full border border-white/10 hover:bg-slate-700 transition">← Back to Home</a>
    </nav>
    <header class="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">The D4Driving Journal</h1>
        <p class="text-slate-400 text-lg">Mastering the roads of Peterborough, one tip at a time.</p>
    </header>
    <main class="max-w-6xl mx-auto px-6">
        <div id="blog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${blogCards}
        </div>
    </main>
    <footer class="max-w-4xl mx-auto mt-20 p-8 text-center border-t border-white/5">
        <p class="text-slate-600 text-sm">© 2026 D4Driving School of Motoring. All rights reserved.</p>
    </footer>
</body>
</html>`;

        // WRITE THE FILE: This creates 'blog.html' if it doesn't exist
        fs.writeFileSync('blog.html', fullPageHtml, { encoding: 'utf8', flag: 'w' });
        
        console.log('✅ Success! blog.html created/updated with newest posts first.');

    } catch (error) {
        console.error('❌ Sync failed:', error);
        process.exit(1);
    }
}
sync();
