const display = document.getElementById('lyric-display');
const button = document.getElementById('generate-btn');

button.addEventListener('click', () => {
    // Pick a random lyric from the drakeLyrics array
    const randomIndex = Math.floor(Math.random() * drakeLyrics.length);
    const randomLyric = drakeLyrics[randomIndex];

    // Fade text out
    display.style.opacity = 0;

    // Wait for the fade out, change the text, then fade back in
    setTimeout(() => {
        display.textContent = `"${randomLyric}"`;
        display.style.opacity = 1;
    }, 300); // 300ms matches the CSS transition time
});
