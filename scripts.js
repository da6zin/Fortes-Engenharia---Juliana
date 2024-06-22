document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
});


document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
});


document.getElementById('home-button').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html'; 
});


document.getElementById('pending-projects').addEventListener('click', function() {
    window.location.href = 'https://da6zin.github.io/Juliana-ProjetosPendentes/'; 
});

document.getElementById('accepted-projects').addEventListener('click', function() {
    window.location.href = 'https://da6zin.github.io/Juliana-ProjetosAceitos/'; 
});
