// --- PART 1: MOBILE MENU (From earlier) ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// --- PART 2: VIDEO SOUND TOGGLE (For your gallery video) ---
function toggleSound() {
    var video = document.getElementById("schoolVideo");
    var btn = document.getElementById("soundButton");
    
    if (video && video.muted) {
        video.muted = false;
        btn.innerHTML = "🔊 Mute Sound";
    } else if (video) {
        video.muted = true;
        btn.innerHTML = "🔈 Enable Sound";
    }
}

// --- PART 3: AUTOMATIC SLIDER (The "PowerPoint" movement) ---
let slideIndex = 0;

function moveSlider() {
    const slidesContainer = document.querySelector('.slides');
    const allSlides = document.querySelectorAll('.slide');
    
    // Only run if we are on the gallery page where these elements exist
    if (slidesContainer && allSlides.length > 0) {
        slideIndex++;
        if (slideIndex >= allSlides.length) {
            slideIndex = 0; 
        }
        slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    }
}

// Start the auto-slide timer immediately
setInterval(moveSlider, 3000);
const canvas = document.getElementById('signature-pad');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.addEventListener('mousedown', () => drawing = true);
    canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });
    canvas.addEventListener('mousemove', draw);

    function draw(event) {
        if (!drawing) return;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#004a99';

        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    }
}

function clearSignature() {
    const canvas = document.getElementById('signature-pad');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function validateSubmission(e) {
    e.preventDefault();
    alert("Application for Motherland Academy submitted successfully!");
    return true;
}