// -------------------------------
// Reveal Section: "Who We Are"
// -------------------------------
const aboutBtn = document.getElementById('about-toggle');
const aboutText = document.getElementById('about-text');

aboutBtn.addEventListener('click', () => {
  aboutText.classList.toggle('hidden');

  if (aboutText.classList.contains('hidden')) {
    aboutBtn.textContent = "Show Info";
  } else {
    aboutBtn.textContent = "Hide Info";
  }
});


// -------------------------------
// Reveal Section: "Mission"
// -------------------------------
const missionBtn = document.getElementById('mission-toggle');
const missionText = document.getElementById('mission-text');

missionBtn.addEventListener('click', () => {
  missionText.classList.toggle('hidden');

  if (missionText.classList.contains('hidden')) {
    missionBtn.textContent = "Show Mission";
  } else {
    missionBtn.textContent = "Hide Mission";
  }
});


// -------------------------------
// Fun Fact Generator
// -------------------------------
const facts = [
  "The first soccer cleats were made in the 1500s for King Henry VIII.",
  "Modern soccer cleats can weigh as little as 150 grams.",
  "Metal studs were banned in youth leagues due to safety concerns.",
  "Some pro players change cleats every single match.",
  "Speed-focused cleats use carbon fiber plates like running shoes.",
  "Synthetic materials now make up over 80% of cleat designs."
];

const factBtn = document.getElementById('fact-btn');
const factDisplay = document.getElementById('fact-display');

// Function to get a random fact
function getRandomFact() {
  const index = Math.floor(Math.random() * facts.length);
  return facts[index];
}

factBtn.addEventListener('click', () => {
  factDisplay.textContent = getRandomFact();
});


// -------------------------------
// Image Hover Swap
// -------------------------------
const cleatImg = document.getElementById('cleat-img');

// Image changes on hover
cleatImg.addEventListener('mouseover', () => {
  cleatImg.src = "adidas-f50-elite-laceless-firm-ground-boots-whiteblack-793553.webp";
});

// Restore original when mouse leaves
cleatImg.addEventListener('mouseout', () => {
  cleatImg.src = "2212025kz11.jpg";
});


// -------------------------------
// Footer Year Update
// -------------------------------
document.getElementById('year').textContent = new Date().getFullYear();
