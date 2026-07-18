document.addEventListener("DOMContentLoaded", async () => {
    const output = document.getElementById('output');
    
    // 1. Loader (Barre + Pourcentage)
    output.innerHTML = `
        <div id="progress-container"><div id="progress-bar"></div></div>
        <div id="percent">0%</div>
    `;
    
    const progressBar = document.getElementById('progress-bar');
    const percentText = document.getElementById('percent');

    for (let i = 0; i <= 100; i++) {
        progressBar.style.width = i + "%";
        percentText.innerText = i + "%";
        await new Promise(r => setTimeout(r, 50)); // Accéléré un peu pour la longueur du texte
    }

    output.innerHTML = ""; 

    // 2. Séquence du nouveau texte
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const write = (text) => { output.innerText += text + "\n"; };

    write("> Initializing Love System...\n");
    await sleep(2000);
    write("Loading memories... 100%\n");
    await sleep(2000);
    write("Searching for the man who owns Youssra's heart...\n");
    await sleep(2000);
    write("Result found.\n");
    await sleep(2000);

    write("\nName    : Simo");
    write("Role    : Husband ❤️\n");
    await sleep(2000);

    write("Achievements unlocked:");
     await sleep(1000);
    write("✔️ Occasionally tests Youssra's patience...");
     await sleep(1000);
    write("✔️ He knows exactly how to make Youssra smile, and somehow, he also knows exactly how to make her mad 😒");
     await sleep(1000);
    write("✔️ Sometimes makes Youssra upset...");
    await sleep(3000);
    write("\n   Just kidding 😈❤️\n");
    await sleep(2000);

    write("✔ Stole Youssra's heart.");
     await sleep(1000);
    write("✔ Became her best friend.");
     await sleep(1000);
    write("✔ Became her safe place.");
     await sleep(1000);
    write("✔ Became her husband.");
     await sleep(1000);
    write("✔ Made her believe in forever.\n");
    await sleep(3000);

    write("Current mission:");
     await sleep(1000);
    write("Love Youssra.");
     await sleep(1000);
    write("Protect Youssra.");
     await sleep(1000);
    write("Support Youssra.");
     await sleep(1000);
    write("Make Youssra smile.");
     await sleep(1000);
    write("Grow old with Youssra.\n");
    await sleep(2000);

    write("Mission duration:");
     await sleep(1000);
    write("∞ Forever\n");
    await sleep(3000);

    write("No matter how many kilometers separate us,");
     await sleep(1000);
    write("my heart will always choose you.\n");
    await sleep(3000);

    write("Happy First Wedding Anniversary, my love.\n");

    
    const love = document.createElement('div');
    love.className = 'final-love';
    love.innerHTML = "❤️ PROPERTY OF YOUSSRA ❤️<br>I LOVE YOU, MY HUSBAND.";
    output.appendChild(love);
});