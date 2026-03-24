// 1. MASTER DATA: All 33 Actual Peterborough Driving Guides
const posts = [
    { "id": "how-to-pass-the-driving-test-first-time", "title": "How To Pass The Driving Test First Time" },
    { "id": "manual-driving-lesson-hill-start-practice-tips", "title": "Manual Driving Lesson Hill Start Practice Tips" },
    { "id": "best-ways-to-reduce-driving-lesson-anxiety", "title": "Best Ways to Reduce Driving Lesson Anxiety" },
    { "id": "theory-test-pass-tips-that-actually-help", "title": "Theory Test Pass Tips That Actually Help" },
    { "id": "one-to-one-driving-tuition-benefits-explained", "title": "One to One Driving Tuition Benefits Explained" },
    { "id": "how-to-pass-the-driving-test-first-time", "title": "How to Pass the Driving Test First Time" },
    { "id": "female-instructor-or-male-instructor", "title": "Female Instructor or Male Instructor?" },
    { "id": "best-driving-practice-routes-in-peterborough", "title": "Best Driving Practice Routes in Peterborough" },
    { "id": "most-common-driving-test-faults", "title": "Most Common Driving Test Faults" },
    { "id": "starting-driving-lessons-with-confidence", "title": "Starting Driving Lessons With Confidence" },
    { "id": "automatic-or-manual-lessons-in-peterborough", "title": "Automatic or Manual Lessons in Peterborough?" },
    { "id": "can-you-pass-with-4-hours-of-test-prep", "title": "Can You Pass With 4 Hours of Test Prep?" },
    { "id": "10-driving-test-day-tips-that-really-help", "title": "10 Driving Test Day Tips That Really Help" },
    { "id": "7-smart-ways-to-practise-hazard-perception", "title": "7 Smart Ways to Practise Hazard Perception" },
    { "id": "how-many-driving-lessons-do-you-need", "title": "How Many Driving Lessons Do You Need?" },
    { "id": "7-ways-to-feel-confident-behind-the-wheel", "title": "7 Ways to Feel Confident Behind the Wheel" },
    { "id": "book-driving-lessons-online-in-peterborough", "title": "Book Driving Lessons Online in Peterborough" },
    { "id": "warmup-lesson-before-your-peterborough-test", "title": "Warm-Up Lesson Before Your Peterborough Test" },
    { "id": "driving-lessons-for-anxious-adults-in-peterborough", "title": "Driving Lessons for Anxious Adults in Peterborough" },
    { "id": "how-long-should-your-driving-lessons-be", "title": "How Long Should Your Driving Lessons Be?" },
    { "id": "automatic-cars-what-new-drivers-can-expect", "title": "Automatic cars: what new drivers can expect" },
    { "id": "choosing-an-approved-driving-instructor-in-peterborough", "title": "Choosing an Approved Driving Instructor in Peterborough" },
    { "id": "driving-test-manoeuvres-practice-that-works", "title": "Driving test manoeuvres practice that works" },
    { "id": "mock-test-lessons-that-actually-boost-pass-rates", "title": "Mock Test Lessons That Actually Boost Pass Rates" },
    { "id": "your-first-driving-lesson-what-to-expect", "title": "Your First Driving Lesson: What to Expect" },
    { "id": "driving-lessons-for-nervous-drivers-what-works", "title": "Driving Lessons for Nervous Drivers: What Works" },
    { "id": "manual-or-automatic-lessons-which-is-better", "title": "Manual or Automatic Lessons: Which Is Better?", "desc": "Struggling to choose between manual or automatic driving lessons in Peterborough? Discover the pros, cons, and which one helps you pass faster." },
    { "id": "how-many-driving-lessons-do-you-really-need", "title": "How Many Driving Lessons Do You Really Need?" },
    { "id": "intensive-driving-test-prep-session-what-works", "title": "Intensive Driving Test Prep Session: What Works" },
    { "id": "is-a-1hour-automatic-lesson-enough", "title": "Is a 1-Hour Automatic Lesson Enough?" },
    { "id": "grantham-driving-test-prep-that-actually-works", "title": "Grantham Driving Test Prep That Actually Works" },
    { "id": "kettering-driving-test-prep-that-actually-works", "title": "Kettering Driving Test Prep That Actually Works" },
    { "id": "peterborough-driving-test-prep-that-works", "title": "Peterborough Driving Test Prep That Works", "desc": "Get test-ready fast with our local Peterborough driving test prep. Master the hardest junctions and roundabouts with expert tips." }
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

        // Update Page Titles
        document.title = `${currentPost.title} | D4Driving Peterborough`;
        
        // SEO: Update Meta Description if it exists in the data
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && currentPost.desc) {
            metaDesc.setAttribute('content', currentPost.desc);
        }

        // SEO: Update Social Media (Open Graph) Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (ogTitle) ogTitle.setAttribute('content', currentPost.title);
        if (twTitle) twTitle.setAttribute('content', currentPost.title);

        const h1 = document.getElementById('post-title');
        // Only update if the H1 is still the placeholder "ARTICLE_TITLE"
        if (h1 && (h1.innerText === "ARTICLE_TITLE" || h1.innerText === "")) {
            h1.innerText = currentPost.title;
        }

        // Update Nav Buttons
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

// Initialize on load
window.addEventListener('DOMContentLoaded', loadBlogNavigation);
