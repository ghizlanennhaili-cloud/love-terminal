const output = document.getElementById('output');
const container = document.body; // Pour ajouter les emojis

// 1. Terminal Hacker
const lines = [
    "Initializing...", "Loading memories...", "100%",
    "\n> Searching for the best husband...",
    "Result found.",
    "\nName: [Son Prénom]",
    "Status: The love of Youssra ❤️",
    "\nMission:",
    "Take care of your wife forever."
];

let i = 0;
function typeWriter() {
    if (i < lines.length) {
        output.innerText += lines[i] + "\n";
        i++;
        setTimeout(typeWriter, 1000);
    } else {
        const love = document.createElement('div');
        love.className = 'final-love';
        love.innerText = "I LOVE YOU 💖";
        output.appendChild(love);
    }
}
setTimeout(typeWriter, 1000);

// 2. Génération des Emojis flottants
const emojiUrls = [
    "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f496.gif",
    "https://images.emojiterra.com/google/noto-emoji/animated-emoji/2728.gif",
    "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f98b.gif"
];

function createEmoji() {
    const img = document.createElement('img');
    img.src = emojiUrls[Math.floor(Math.random() * emojiUrls.length)];
    img.className = 'emoji-floating';
    img.style.left = Math.random() * 100 + 'vw';
    img.style.animationDuration = (Math.random() * 5 + 5) + 's';
    container.appendChild(img);
    setTimeout(() => img.remove(), 10000);
}
setInterval(createEmoji, 2000);