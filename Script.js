document.addEventListener("DOMContentLoaded", async () => {
    const output = document.getElementById('output');
    
    // 1. Affichage du cercle et du pourcentage
    output.innerHTML = `<div class="loader-spinner"></div>
                        <div id="percent">0%</div>`;
    
    for (let i = 0; i <= 100; i++) {
        document.getElementById('percent').innerText = i + "%";
        await new Promise(r => setTimeout(r, 100));
    }

    output.innerHTML = ""; // Nettoyer l'écran après chargement

    // 2. Séquence des messages
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