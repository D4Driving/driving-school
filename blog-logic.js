/**
 * D4DRIVING PETERBOROUGH - MASTER BLOG LOGIC
 * Includes: Auto-UI Injection, Smart Navigation, and Facebook Footer
 */

// 1. THE MASTER LIST (Update this when you add a new Soro post!)
const posts = [
    { "id": "a-guide-to-learning-clutch-control-smoothly", "title": "A Guide to Learning Clutch Control Smoothly" },
    { "id": "manual-vs-automatic-driving-lessons-for-beginners", "title": "Manual vs Automatic Driving Lessons for Beginners" },
    { "id": "parallel-parking-lesson-step-by-step", "title": "Parallel Parking Lesson Step by Step" },
    { "id": "mistakes-on-driving-test-and-how-to-avoid-them", "title": "Mistakes on Driving Test and How to Avoid Them" },
    { "id": "is-automatic-licence-valid-for-all-cars", "title": "Is Automatic Licence Valid for All Cars?" },
    { "id": "driving-test-preparation-session-kettering-4-hours", "title": "Driving Test Preparation Session Kettering 4 Hours" },
    { "id": "driving-instructor-vs-driving-school-differences", "title": "Driving instructor vs driving school differences" },
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
    { "id": "manual-or-automatic-lessons-which-is-better", "title": "Manual or Automatic Lessons: Which Is Better?" },
    { "id": "how-many-driving-lessons-do-you-really-need", "title": "How Many Driving Lessons Do You Really Need?" },
    { "id": "intensive-driving-test-prep-session-what-works", "title": "Intensive Driving Test Prep Session: What Works" },
    { "id": "is-a-1hour-automatic-lesson-enough", "title": "Is a 1-Hour Automatic Lesson Enough?" },
    { "id": "grantham-driving-test-prep-that-actually-works", "title": "Grantham Driving Test Prep That Actually Works" },
    { "id": "kettering-driving-test-prep-that-actually-works", "title": "Kettering Driving Test Prep That Actually Works" },
    { "id": "peterborough-driving-test-prep-that-works", "title": "Peterborough Driving Test Prep That Works" }
];
// 2. INJECT NAVIGATION & FOOTER (WITH FACEBOOK)
function injectSharedUI() {
   const navHTML = `
    <nav class="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <a href="index.html" class="flex items-center gap-3">
            <img src="400dpiLogoCropped.png" alt="Logo" class="h-10 w-auto">
            <span class="font-bold uppercase tracking-tight text-stone-800 text-lg">D4DRIVING</span>
        </a>
        <div class="flex items-center gap-6">
            <a href="blog.html" class="text-sm font-bold text-stone-500 hover:text-red-700 transition">Guides</a>
            <a href="index.html#contact" class="btn-red">Book Now</a>
        </div>
    </nav>`;

const footerHTML = `
    <footer class="mt-20 py-16 border-t border-stone-200 bg-stone-100/50">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <img src="400dpiLogoCropped.png" alt="D4Driving Logo" class="h-14 mb-6 mx-auto">
            <p class="text-stone-500 text-sm leading-relaxed mb-8 max-w-md mx-auto italic">
                Professional driving tuition in Peterborough. Building safe, confident drivers for life.
            </p>
            
            <div class="mb-10 flex justify-center">
                <a href="https://www.facebook.com/D4DrivingPeterborough" target="_blank" class="flex items-center gap-3 text-white bg-[#1877F2] hover:bg-[#155db2] transition px-6 py-3 rounded-full shadow-md">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <span class="text-xs font-bold uppercase tracking-widest">Join our Facebook Community</span>
                </a>
            </div>

            <div class="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                <a href="index.html#prices" class="hover:text-red-700">Prices</a>
                <a href="blog.html" class="hover:text-red-700">Journal</a>
                <a href="index.html#contact" class="hover:text-red-700">Contact</a>
            </div>
            <p class="mt-10 text-[10px] text-stone-400 uppercase tracking-widest">© 2026 D4Driving School of Motoring</p>
        </div>
    </footer>`;

    if (document.getElementById('dynamic-nav')) document.getElementById('dynamic-nav').innerHTML = navHTML;
    if (document.getElementById('dynamic-footer')) document.getElementById('dynamic-footer').innerHTML = footerHTML;
}

// 3. SMART NAVIGATION (The Self-Healing Fix)
function loadBlogNavigation() {
    const path = window.location.pathname;
    const currentFilename = path.split('/').pop().replace('.html', '');
    const currentIndex = posts.findIndex(p => p.id === currentFilename);

    const prevLink = document.getElementById('prev-post-link');
    const nextLink = document.getElementById('next-post-link');
    const prevTitle = document.getElementById('prev-post-title');
    const nextTitle = document.getElementById('next-post-title');

    // FIX: If post is NOT in the master list (common with new Soro posts)
    if (currentIndex === -1) {
        console.warn("New article detected. Showing default navigation.");
        if (prevTitle) prevTitle.innerText = "Back to All Guides";
        if (prevLink) prevLink.href = "blog.html";
        if (nextLink) nextLink.style.display = 'none';
        
        // Try to set a title based on the filename if h1 is empty
        const h1 = document.getElementById('post-title');
        if (h1 && (h1.innerText === "" || h1.innerText.includes("Loading"))) {
            h1.innerText = currentFilename.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        return;
    }

    // Normal Navigation Logic
    const currentPost = posts[currentIndex];
    const prevPost = posts[currentIndex - 1];
    const nextPost = posts[currentIndex + 1];

    document.title = `${currentPost.title} | D4Driving Journal`;
    const h1 = document.getElementById('post-title');
    if (h1) h1.innerText = currentPost.title;

    if (prevPost) {
        if (prevTitle) prevTitle.innerText = prevPost.title;
        if (prevLink) prevLink.href = `${prevPost.id}.html`;
    } else if (prevLink) {
        prevLink.style.opacity = "0.3";
        prevLink.style.pointerEvents = "none";
        if (prevTitle) prevTitle.innerText = "First Article";
    }

    if (nextPost) {
        if (nextTitle) nextTitle.innerText = nextPost.title;
        if (nextLink) nextLink.href = `${nextPost.id}.html`;
    } else if (nextLink) {
        nextLink.style.opacity = "0.3";
        nextLink.style.pointerEvents = "none";
        if (nextTitle) nextTitle.innerText = "End of Journal";
    }
}

// 4. SHARE BUTTON LOGIC
function initShare() {
    const shareBtn = document.getElementById('shareBtn');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: document.title,
            text: 'Expert driving advice from D4Driving Peterborough!',
            url: window.location.href
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                const span = shareBtn.querySelector('span');
                const originalText = span.innerText;
                span.innerText = 'Link Copied!';
                setTimeout(() => span.innerText = originalText, 2000);
            }
        } catch (err) { console.error('Share failed', err); }
    });
}

// 5. INITIALIZE EVERYTHING
document.addEventListener('DOMContentLoaded', () => {
    injectSharedUI();
    loadBlogNavigation();
    initShare();
});
