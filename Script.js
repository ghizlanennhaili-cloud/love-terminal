document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById('output');
    
    // Étape 1 : Afficher le loader pendant 15 secondes
    output.innerHTML = '<div id="loader">Loading memories... 15s</div>';
    
    setTimeout(() => {
        output.innerHTML = ""; // Efface le loader
        startTerminal();
    }, 15000); // 15000ms = 15 secondes

    // Étape 2 : Le terminal
    function startTerminal() {
        const lines = [
            "Initializing...", 
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
    }
});