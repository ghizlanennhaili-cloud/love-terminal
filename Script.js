document.addEventListener("DOMContentLoaded", async () => {
    const output = document.getElementById('output');
    const terminal = document.getElementById('terminal');

    // Loader
    output.innerHTML = `
        <div id="progress-container"><div id="progress-bar"></div></div>
        <div id="percent">0%</div>
    `;
    
    const progressBar = document.getElementById('progress-bar');
    const percentText = document.getElementById('percent');

    for (let i = 0; i <= 100; i++) {
        progressBar.style.width = i + "%";
        percentText.innerText = i + "%";
        await new Promise(r => setTimeout(r, 50));
    }

    output.innerHTML = ""; 

    // Fonction d'écriture améliorée
    const write = (html) => { 
        output.innerHTML += html + "<br>"; 
        terminal.scrollTop = terminal.scrollHeight; // Scroll auto vers le bas
    };
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    // Séquence texte
    write("> Initializing Love System...");
    await sleep(2000);
    write("Loading memories... 100%");
    await sleep(2000);
    write("Searching for the man who owns Youssra's heart...");
    await sleep(2000);
    write("Result found.");
    await sleep(2000);

    write("<br>Name    : Simo");
    write("Role    : Husband ❤️<br>");
    await sleep(2000);

    write("<strong>Achievements unlocked:</strong>");
    await sleep(1000);
    write("✔️ Occasionally tests Youssra's patience...");
    await sleep(1000);
    write("✔️ He knows exactly how to make Youssra smile, and somehow, he also knows exactly how to make her mad 😒");
    await sleep(1000);
    write("✔️ Sometimes makes Youssra upset...");
    await sleep(3000);
    write("<br>   Just kidding 😈❤️<br>");
    await sleep(2000);

    write("✔️ Stole Youssra's heart.");
    await sleep(1000);
    write("✔️ Became her best friend.");
    await sleep(1000);
    write("✔️ Became her safe place.");
    await sleep(1000);
    write("✔️ Became her husband.");
    await sleep(1000);
    write("✔️ Made her believe in <strong>forever</strong>.<br>");
    await sleep(3000);

    write("<strong>Current mission:</strong>");
    await sleep(1000);
    write("✔️ Love Youssra.");
    await sleep(1000);
    write("✔️ Protect Youssra.");
    await sleep(1000);
    write("✔️ Support Youssra.");
    await sleep(1000);
    write("✔️ Make Youssra smile.");
    await sleep(1000);
    write("✔️ Grow old with Youssra.<br>");
    await sleep(2000);

    write("<strong>Mission duration:</strong>");
    await sleep(1000);
    write("∞ <strong>Forever</strong><br>");
    await sleep(3000);

    write("No matter how many kilometers separate us,");
    await sleep(1000);
    write("my heart will always choose you.<br>");
    await sleep(3000);

    write("Happy First Wedding Anniversary, my love.<br>");

    const love = document.createElement('div');
    love.className = 'final-love';
    love.innerHTML = "<div>❤️ PROPERTY OF YOUSSRA ❤️</div><div>I LOVE YOU, MY HUSBAND.</div>";
    output.appendChild(love);
    terminal.scrollTop = terminal.scrollHeight;
});