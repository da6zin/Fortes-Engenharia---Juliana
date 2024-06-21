// Função para abrir o menu lateral
document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
});

// Função para fechar o menu lateral
document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
});

// Redirecionar para a página inicial ao clicar no ícone de casa
document.getElementById('home-button').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';  // Troque 'index.html' pelo caminho correto do seu arquivo
});


document.getElementById('pending-projects').addEventListener('click', function() {
    window.location.href = 'https://da6zin.github.io/Juliana-ProjetosPendentes/';  // Troque pelo caminho correto do seu arquivo
});

document.getElementById('accepted-projects').addEventListener('click', function() {
    window.location.href = 'https://da6zin.github.io/Juliana-ProjetosAceitos/';  // Troque pelo caminho correto do seu arquivo
});
