document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('theme') === 'light-theme') {
        document.body.classList.add('light-theme');
        document.getElementById('theme-toggle').textContent = "Modo escuro";
    }
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    var className = document.body.className;
    if(className.includes('light-theme')){
        this.textContent = "Modo escuro";
        localStorage.setItem('theme', 'light-theme');
    }else{
        this.textContent = "Modo claro";
        localStorage.setItem('theme', 'dark-theme');
    }
});
