// ---- Home page interactivity for CleatSales ----

// 1) Personalized welcome
const nameInput = document.getElementById('name-input');
const nameSubmit = document.getElementById('name-submit');
const greeting = document.getElementById('greeting');

nameSubmit.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name.length === 0) {
    greeting.textContent = 'Please enter a name to get a personalized greeting.';
    greeting.style.color = '#c0392b';
  } else {
    greeting.style.color = '';
    greeting.textContent = `Welcome, ${name}! Check out the featured cleats below.`;
  }
});

// Also allow Enter key inside input to submit
nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') nameSubmit.click();
});

// 2) Simple image slider (featured cleats)
const featured = [
  { src: 'adidas-f50-elite-lightstrike-laceless-fg-firm-ground-soccer-cleats-white-red-yellow.png', 
    caption: 'Adidas F50 Elite Lightstrike Laceless FG Firm Ground Soccer Cleats - White/Red/Yellow' },

  { src: '21211457.webp', caption: "adidas Kids' X Crazyfast League Lionel Messi Soccer Cleats" },
  { src: 'AURORA_DJ5625-601_PHSLH001-2000_2000x.webp', caption: 'Nike Mercurial Superfly 9 Academy MG High-Top Soccer Cleats' }
];

let slideIndex = 0;
const slideImg = document.getElementById('slide-img');
const slideCaption = document.getElementById('slide-caption');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

function renderSlide(i) {
  const item = featured[i];
  slideImg.src = item.src;
  slideCaption.textContent = item.caption;
}

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + featured.length) % featured.length;
  renderSlide(slideIndex);
});
nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % featured.length;
  renderSlide(slideIndex);
});

// Auto-rotate the slider every 4 seconds
let sliderTimer = setInterval(() => {
  slideIndex = (slideIndex + 1) % featured.length;
  renderSlide(slideIndex);
}, 4000);

// Pause rotation when user focuses the image
slideImg.addEventListener('mouseover', () => clearInterval(sliderTimer));
slideImg.addEventListener('mouseout', () => {
  sliderTimer = setInterval(() => {
    slideIndex = (slideIndex + 1) % featured.length;
    renderSlide(slideIndex);
  }, 4000);
});

// initialize first slide
renderSlide(slideIndex);

// 3) Promo reveal (shows a hidden card)
const promoBtn = document.getElementById('promo-btn');
const promoCard = document.getElementById('promo-card');

promoBtn.addEventListener('click', () => {
  promoCard.classList.toggle('hidden');
  promoBtn.textContent = promoCard.classList.contains('hidden') ? 'Reveal Today\'s Deal' : 'Hide Deal';
});

// 4) Footer year
document.getElementById('year').textContent = new Date().getFullYear();
