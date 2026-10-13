document.getElementById('year').textContent = new Date().getFullYear();

function showTab(name) {
    const tabs = document.querySelectorAll('article section.content-row');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const target = document.getElementById('tab-' + name);
    if (target) {
        target.classList.add('active');
    }

    document.getElementById('dropMenu').classList.remove('show');
}

function dropFunc() {
    document.getElementById("dropMenu").classList.toggle("show");
}

window.addEventListener('click', function(event) {
    if (!event.target.closest('.containerBtn')) {
        const dropdown = document.getElementById('dropMenu');
        dropdown.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
    
    const titulo = document.getElementById('silly');
    titulo.addEventListener('click', () => {
        const sfx = new Audio('./assets/sounds/splat.mp3');
        sfx.play();
        sfx.volume = 0.2;
    });
});