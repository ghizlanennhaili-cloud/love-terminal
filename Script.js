document.addEventListener("DOMContentLoaded", async () => {
    const output = document.getElementById('output');
    
    // 1. Affichage du conteneur de la barre de progression
    output.innerHTML = `
        <div id="progress-container">
            <div id="progress-bar">0%</div>
        </div>
    `;
    
    const progressBar = document.getElementById('progress-bar');

    // 2. Incrémentation de 0% à 100% de la barre
    for (let i = 0; i <= 100; i++) {
        progressBar.style.width = i + "%"; // Change la largeur visuelle
        progressBar.innerText = i + "%";   // Change le texte à l'intérieur
        await new Promise(r => setTimeout(r, 100)); // Total de 10 secondes
    }

    // Petite pause pour que l'utilisateur voie bien les 100%
    await new Promise(r => setTimeout(r, 500)); 

    output.innerHTML = ""; // Nettoyer l'écran

    // 3. Séquence des messages (inchangée)
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const write = (text) => { output.innerText += text + "\n"; };

    write("> Searching for the best husband...");
    await sleep(4000);
    write("Result found.");
    await sleep(4000);
    write("\nName: Simo");
    await sleep(4000);
    write("Status: The love of Youssra ❤️");
    await sleep(4000);
    write("\nMission:");
    write("Take care of your wife forever.");
    
    const love = document.createElement('div');
    love.className = 'final-love';
    love.innerText = "I LOVE YOU 💖";
    output.appendChild(love);
});