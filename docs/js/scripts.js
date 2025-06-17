// Função para configurar o alternador de menu
// Esta função adiciona um evento de clique ao botão de alternância do menu e alterna a classe 'active' no menu de navegação e no botão de alternância.
function setupMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) {
        console.warn('setupMenuToggle: .menu-toggle or .nav-menu not found in the DOM. Skipping menu toggle setup.');
        return; // Exit early if elements are not found
    }

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Função para configurar o modal
// Esta função gerencia a abertura e o fechamento do modal, adicionando eventos aos botões de abrir modal, fechar modal, clique fora do modal e tecla 'Escape'.
function setupModal() {
    const abrirModais = document.querySelectorAll('.abrir-modal'); // Seleciona todos os botões com a classe
    const modal = document.querySelector('.modal');
    const fecharModal = document.querySelector('.fechar-modal');

    if (abrirModais.length > 0 && modal && fecharModal) {
        abrirModais.forEach((abrirModal) => {
            // Adiciona evento de clique para abrir o modal
            abrirModal.addEventListener('click', () => {
                // Exibe o modal e adiciona a classe 'active' com um pequeno atraso
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('active');
                }, 10);
            });
        });

        // Adiciona evento de clique para fechar o modal ao clicar no botão de fechar
        fecharModal.addEventListener('click', () => {
            closeModal();
        });

        // Adiciona evento para fechar o modal ao clicar fora dele
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Adiciona evento para fechar o modal ao pressionar a tecla 'Escape'
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
    }
}

// Função para fechar o modal
// Esta função remove a classe 'active' do modal e o oculta após um pequeno atraso.
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Função para configurar atributos de autocomplete nos campos de formulário
function setupAutocomplete() {
    const formFields = document.querySelectorAll('input[id], input[name], textarea[id], textarea[name]');

    formFields.forEach((field) => {
        if (!field.hasAttribute('autocomplete')) {
            field.setAttribute('autocomplete', 'off'); // Define um valor padrão
            console.warn(`Autocomplete attribute added to field with id/name: ${field.id || field.name}`);
        }
    });
}

// Função principal para carregar o script
// Esta função é executada quando o DOM é carregado e inicializa as funções de alternância do menu e configuração do modal.
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.menu-toggle') && document.querySelector('.nav-menu')) {
        setupMenuToggle();
    } else {
        console.warn('Alternador de menu ou menu de navegação não encontrado no DOM. Ignorando setupMenuToggle.');
    }
    setupModal();
    setupAutocomplete();
});