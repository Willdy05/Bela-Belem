let lastScrollY = window.scrollY;
const header = document.getElementById('main-header');
let isScrolling; // Variável para o debounce

window.addEventListener('scroll', () => {
    clearTimeout(isScrolling); // Limpa o timer anterior

    isScrolling = setTimeout(() => {
        console.log(`ScrollY: ${window.scrollY}, LastScrollY: ${lastScrollY}`); // Depuração
        if (window.scrollY > lastScrollY) {
            // Rolando para baixo, esconder o header
            header.classList.add('hidden');
        } else {
            // Rolando para cima, mostrar o header
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    }, 100); // Aguarda 100ms após o último evento de scroll
});