// 1. MASTER DATA: All 33 Actual Peterborough Driving Guides
// Updated with Images and Descriptions from your HTML
const posts = [
    { 
        "id": "manual-driving-lesson-hill-start-practice-tips", 
        "title": "Manual Driving Lesson Hill Start Practice Tips",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/ddafdd61-f8cf-498d-9831-27335fc3b0c0.webp",
        "desc": "Manual driving lesson hill start practice tips to help you control clutch, bite point and handbrake with calm, safe practice and more confidence."
    },
    { 
        "id": "best-ways-to-reduce-driving-lesson-anxiety", 
        "title": "Best Ways to Reduce Driving Lesson Anxiety",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/5360d6d5-8a66-4f33-9295-f672a601adb7.webp",
        "desc": "Discover the best ways to reduce driving lesson anxiety with calm, practical tips that build confidence, improve focus, and help you progress."
    },
    { 
        "id": "theory-test-pass-tips-that-actually-help", 
        "title": "Theory Test Pass Tips That Actually Help",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/01eb4e98-9fab-4f2c-b8c4-7fc45f99a027-1774133615684.webp",
        "desc": "Want a theory test pass without last-minute panic? Learn what to study, how to practise hazard perception, and how to feel ready on test day."
    },
    { 
        "id": "one-to-one-driving-tuition-benefits-explained", 
        "title": "One to One Driving Tuition Benefits Explained",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/de874b02-2e69-4c4d-8d09-0acf3b8abbf9.webp",
        "desc": "Learn the one to one driving tuition benefits that help learners build confidence, improve safety and make steady progress toward test success."
    },
    { 
        "id": "how-to-pass-the-driving-test-first-time", 
        "title": "How to Pass the Driving Test First Time",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/c52a2089-8379-41a7-9437-fa8ab3cf5ceb.webp",
        "desc": "Learn how to pass the driving test first time with calm, practical tips on lessons, manoeuvres, test nerves and smart preparation."
    },
    { 
        "id": "female-instructor-or-male-instructor", 
        "title": "Female Instructor or Male Instructor?",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/c7358890-3f02-4305-98d6-523664671da6.webp",
        "desc": "Choosing a female instructor or male instructor? Learn what really matters for confidence, progress and the right fit for driving lessons."
    },
    { 
        "id": "best-driving-practice-routes-in-peterborough", 
        "title": "Best Driving Practice Routes in Peterborough",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/e4428b5a-81e3-448f-8848-3c5b2d173549.webp",
        "desc": "Looking for the best routes to practise driving Peterborough? Try calm local roads, roundabouts and test-style routes that build confidence."
    },
    { 
        "id": "most-common-driving-test-faults", 
        "title": "Most Common Driving Test Faults",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/398660c4-25c4-4365-a56b-c31cc79058c9.webp",
        "desc": "What are the most common driving test faults? Learn where learners lose marks most often and how to fix them before test day."
    },
    { 
        "id": "starting-driving-lessons-with-confidence", 
        "title": "Starting Driving Lessons With Confidence",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/88fa1a49-65a4-48c1-807c-57a3bd277e10.webp",
        "desc": "Learn how to start driving lessons as a beginner with calm, practical advice on choosing lessons, building confidence and making steady progress."
    },
    { 
        "id": "automatic-or-manual-lessons-in-peterborough", 
        "title": "Automatic or Manual Lessons in Peterborough?",
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/3d1d0c30-e25b-42ec-9fe4-69b865c427e0.webp",
        "desc": "Comparing automatic lessons vs manual lessons Peterborough learners choose, with clear advice on cost, confidence, test prep and goals."
    },
    { "id": "can-you-pass-with-4-hours-of-test-prep", "title": "Can You Pass With 4 Hours of Test Prep?", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/f76f4ada-52e9-4b76-9102-bd56a6e2e423.webp", "desc": "Can you prepare for driving test in four hours? Learn what to focus on and how to use a short session wisely." },
    { "id": "10-driving-test-day-tips-that-really-help", "title": "10 Driving Test Day Tips That Really Help", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/981f83f1-7710-4369-a0d6-17a2c90a221c.webp" },
    { "id": "7-smart-ways-to-practise-hazard-perception", "title": "7 Smart Ways to Practise Hazard Perception", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/20329cf6-cd92-4f01-8770-6a1df4bd6446.webp" },
    { "id": "how-many-driving-lessons-do-you-need", "title": "How Many Driving Lessons Do You Need?", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/243bab8f-ae65-42b6-87ba-03b8d86d4988.webp" },
    { "id": "7-ways-to-feel-confident-behind-the-wheel", "title": "7 Ways to Feel Confident Behind the Wheel", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/c5b370ab-2d57-453d-8b54-c81be79a176b.webp" },
    { "id": "book-driving-lessons-online-in-peterborough", "title": "Book Driving Lessons Online in Peterborough", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/4c65d2e9-76f7-4925-90ac-6ed123acdbb2.webp" },
    { "id": "warmup-lesson-before-your-peterborough-test", "title": "Warm-Up Lesson Before Your Peterborough Test", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/4186cc1c-22df-4317-ad21-72cb5900e022.webp" },
    { "id": "driving-lessons-for-anxious-adults-in-peterborough", "title": "Driving Lessons for Anxious Adults in Peterborough", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/95b738e9-e8da-42ec-914c-b53f49d853a4.webp" },
    { "id": "how-long-should-your-driving-lessons-be", "title": "How Long Should Your Driving Lessons Be?", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/0d2dff51-fe10-4dda-ac53-9522550cc7db.webp" },
    { "id": "automatic-cars-what-new-drivers-can-expect", "title": "Automatic cars: what new drivers can expect", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/61ee5947-3cdb-444e-81b9-caa9fcffc47f.webp" },
    { "id": "choosing-an-approved-driving-instructor-in-peterborough", "title": "Choosing an Approved Driving Instructor in Peterborough", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/a23d2e10-0b09-4b10-9878-784d26e69b91.webp" },
    { "id": "driving-test-manoeuvres-practice-that-works", "title": "Driving test manoeuvres practice that works", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/9b999ef2-f1a2-4e2c-b612-cfff25f0bfff.webp" },
    { "id": "mock-test-lessons-that-actually-boost-pass-rates", "title": "Mock Test Lessons That Actually Boost Pass Rates", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/3b9688f6-8e9f-4ee0-bec6-9c5bcdac4514.webp" },
    { "id": "your-first-driving-lesson-what-to-expect", "title": "Your First Driving Lesson: What to Expect", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/4df99afd-2cdd-43dd-8d4f-da60ecbf33e8.webp" },
    { "id": "driving-lessons-for-nervous-drivers-what-works", "title": "Driving Lessons for Nervous Drivers: What Works", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/6936aba2-c087-447d-a348-737de1236b7f.webp" },
    { 
        "id": "manual-or-automatic-lessons-which-is-better", 
        "title": "Manual or Automatic Lessons: Which Is Better?", 
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/1b351dfa-492d-46e9-84c4-2a654cd5321c.webp",
        "desc": "Struggling to choose between manual or automatic driving lessons in Peterborough? Discover the pros, cons, and which one helps you pass faster." 
    },
    { "id": "how-many-driving-lessons-do-you-really-need", "title": "How Many Driving Lessons Do You Really Need?", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/aae05aca-60c1-49fc-9a4a-b00729204f7d.webp" },
    { "id": "intensive-driving-test-prep-session-what-works", "title": "Intensive Driving Test Prep Session: What Works", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/c84bfb1d-6e58-4030-b9ba-372bd9b8e211.webp" },
    { "id": "is-a-1hour-automatic-lesson-enough", "title": "Is a 1-Hour Automatic Lesson Enough?", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/405a5964-0650-4348-94ae-7dbf50b7052a.webp" },
    { "id": "grantham-driving-test-prep-that-actually-works", "title": "Grantham Driving Test Prep That Actually Works", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/ff46bd7b-85f0-45f5-9d31-b92808440549.webp" },
    { "id": "kettering-driving-test-prep-that-actually-works", "title": "Kettering Driving Test Prep That Actually Works", "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/4d9d2dcc-164c-45bb-8662-d7d52c03836d.webp" },
    { 
        "id": "peterborough-driving-test-prep-that-works", 
        "title": "Peterborough Driving Test Prep That Works", 
        "img": "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/21c0d152-8908-428a-aae5-1b4a91ca580e/dd344118-ceaa-4f41-ad3d-15ed09629d8d-1774274206198.webp",
        "desc": "Get test-ready fast with our local Peterborough driving test prep. Master the hardest junctions and roundabouts with expert tips." 
    }
];

// 2. PWA & SHARE LOGIC
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
}

const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: document.title,
            text: 'Check out this driving guide from D4Driving Peterborough!',
            url: window.location.href
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                const span = shareBtn.querySelector('span');
                const originalText = span ? span.innerText : 'Share';
                if(span) span.innerText = 'Link Copied!';
                setTimeout(() => { if(span) span.innerText = originalText; }, 2000);
            }
        } catch (err) { console.log('Share error'); }
    });
}

// 3. NAVIGATION & TITLE LOGIC
function loadBlogNavigation() {
    const path = window.location.pathname;
    const currentFilename = path.split('/').pop().replace('.html', '');
    const currentIndex = posts.findIndex(p => p.id === currentFilename);
    
    if (currentIndex !== -1) {
        const currentPost = posts[currentIndex];
        const prevPost = posts[currentIndex - 1];
        const nextPost = posts[currentIndex + 1];

        document.title = `${currentPost.title} | D4Driving Peterborough`;
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && currentPost.desc) {
            metaDesc.setAttribute('content', currentPost.desc);
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (ogTitle) ogTitle.setAttribute('content', currentPost.title);
        if (twTitle) twTitle.setAttribute('content', currentPost.title);

        const h1 = document.getElementById('post-title');
        if (h1 && (h1.innerText === "ARTICLE_TITLE" || h1.innerText === "")) {
            h1.innerText = currentPost.title;
        }

        const prevLink = document.getElementById('prev-post-link');
        const nextLink = document.getElementById('next-post-link');

        if (prevPost && prevLink) {
            const prevTitle = document.getElementById('prev-post-title');
            if (prevTitle) prevTitle.innerText = prevPost.title;
            prevLink.href = `${prevPost.id}.html`;
            prevLink.style.display = 'flex';
        } else if (prevLink) {
            prevLink.style.display = 'none';
        }

        if (nextPost && nextLink) {
            const nextTitle = document.getElementById('next-post-title');
            if (nextTitle) nextTitle.innerText = nextPost.title;
            nextLink.href = `${nextPost.id}.html`;
            nextLink.style.display = 'flex';
        } else if (nextLink) {
            nextLink.style.display = 'none';
        }
    }
}

// 4. GENERATE BLOG GRID (Automatic Page Builder)
function generateBlogGrid() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return; // Only runs on blog.html

    grid.innerHTML = ''; // Clear existing content

    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = "glass-card overflow-hidden rounded-3xl hover:border-white/20 transition group";
        
        // Image logic: use the specific URL or a default if missing
        const imageSrc = post.img || "400dpiLogoCropped.png";

        article.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${imageSrc}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                     alt="${post.title}"
                     loading="lazy">
            </div>
            <div class="p-6">
                <h3 class="text-lg font-bold group-hover:text-blue-400 transition">${post.title}</h3>
                <p class="text-slate-400 text-sm mt-2 line-clamp-2">
                    ${post.desc || "Expert driving advice from D4Driving Peterborough to help you pass your test with confidence."}
                </p>
                <a href="${post.id}.html" class="text-blue-400 text-xs font-bold mt-4 inline-block hover:underline">Read Full Article →</a>
            </div>
        `;
        grid.appendChild(article);
    });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    loadBlogNavigation();
    generateBlogGrid();
});
