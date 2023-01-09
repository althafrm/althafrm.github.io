const toggle = document.getElementById('toggle');

toggle.addEventListener('click', e => {
    e.preventDefault();
    document.documentElement.classList.toggle('light');
    toggle.classList.toggle('light');
});
