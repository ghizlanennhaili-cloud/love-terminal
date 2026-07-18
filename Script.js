document.addEventListener("DOMContentLoaded", async () => {
    const output = document.getElementById('output');
    
    // 1. Structure : Barre en haut, Pourcentage en dessous
    output.innerHTML = `
        <div id="progress-container">
            <div id="progress-bar"></div>
        </div>
        <div id="percent">0%</div>
    `;
    
    const progressBar = document.getElementById('progress-bar');
    const percentText = document.getElementById('percent');

    // 2. Incrémentation
    for (let i = 0; i <= 100; i++) {
        progressBar.style.width = i + "%";
        percentText.innerText = i + "%"; 
        await new Promise(r => setTimeout(r, 100)); 
    }

    await new Promise(r => setTimeout(r, 500)); 
    output.innerHTML = ""; 

    // 3. Séquence des messages
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