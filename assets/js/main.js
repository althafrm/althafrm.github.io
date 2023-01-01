const toggleText = document.getElementById('toggle-text');

toggleText.addEventListener('click', e => {
    e.preventDefault();
    document.documentElement.classList.toggle('light');

    const modeText = document.getElementById('mode-text');
    modeText.innerText = modeText.innerText === '☀️' ? '🌙' : '☀️';
});