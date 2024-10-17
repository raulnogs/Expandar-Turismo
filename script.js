// Função para diminuir o tamanho do header e ocultar a logo ao rolar a página
const header = document.querySelector('header');
const logo = document.querySelector('.nav-logo');

window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;
    header.classList.toggle('small', isScrolled);
    logo.style.opacity = isScrolled ? '0' : '1'; // Suaviza o desaparecimento da logo
    logo.style.transition = 'opacity 0.3s ease'; // Suaviza a transição
});

// Função para voltar ao topo da página
document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Mostrar botão de voltar ao topo ao rolar a página
window.onscroll = function() {
    const button = document.getElementById("scrollToTop");
    button.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};

// Adicionar animação hover nas imagens da galeria
const galleryItems = document.querySelectorAll('.gallery-container img');

galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)'; // Zoom na imagem
        item.style.transition = 'transform 0.3s ease-in-out'; // Suavizar a transição
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)'; // Retorna ao tamanho original
    });
});

// Função para ampliar a imagem em um modal ao clicar apenas na galeria
const modal = document.createElement('div');
const modalImg = document.createElement('img');
const closeModal = document.createElement('span');

// Estilos básicos do modal
Object.assign(modal.style, {
    display: 'none',
    position: 'fixed',
    zIndex: '1000',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
});

Object.assign(modalImg.style, {
    maxWidth: '80%',
    maxHeight: '80%',
    margin: 'auto',
    display: 'block',
});

closeModal.textContent = '×';
Object.assign(closeModal.style, {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: 'white',
    fontSize: '40px',
    cursor: 'pointer',
});

modal.appendChild(modalImg);
modal.appendChild(closeModal);
document.body.appendChild(modal);

// Mostrar a imagem ampliada ao clicar apenas na galeria
const gallery = document.querySelectorAll('#Galeria .gallery-item img');
gallery.forEach(item => {
    item.addEventListener('click', () => {
        modalImg.src = item.src; // Definir o src da imagem clicada no modal
        modal.style.display = 'flex'; // Exibir o modal
    });
});

// Fechar o modal ao clicar no 'X' ou fora da imagem
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar o modal
});

modal.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar o modal
});

const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');

// Alternar a classe 'active' na lista de navegação ao clicar no hamburguer
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fechar o menu ao clicar em um item
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active'); // Remove a classe 'active' para ocultar o menu
    });
});

// Função para voltar a ser hamburguer ao rolar a página
window.addEventListener('scroll', () => {
    if (navList.classList.contains('active')) {
        navList.classList.remove('active'); // Fecha o menu hamburguer
    }
});
