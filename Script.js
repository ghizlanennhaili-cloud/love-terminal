document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById('output');
    
    const lines = [
        "Initializing...", 
        "Loading memories...", 
        "100%",
        "",
        "> Searching for the best husband...",
        "Result found.",
        "",
        "Name: [Son Prénom]",
        "Status: The love of Youssra ❤️",
        "",
        "Mission:",
        "Take care of your wife forever."
    ];

    let i = 0;

    function typeWriter() {
        if (i < lines.length) {
            output.innerText += lines[i] + "\n";
            i++;
            setTimeout(typeWriter, 800);
        } else {
            const love = document.createElement('div');
            love.className = 'final-love';
            love.innerText = "I LOVE YOU 💖";
            output.appendChild(love);
        }
    }

    typeWriter();
});