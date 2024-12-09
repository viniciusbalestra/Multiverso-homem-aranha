// Função para adicionar a classe 's-card--hovered' ao elemento quando o mouse entra nele
function handleMouseEnter() {
  // Adiciona a classe para aplicar o estilo de hover
  this.classList.add('s-card--hovered');
  // Altera o ID do body para indicar qual card está sendo hoverado
  document.body.id = `${this.id}-hovered`;
}

// Função para remover a classe 's-card--hovered' quando o mouse sai do elemento
function handleMouseLeave() {
  // Remove a classe para remover o estilo de hover
  this.classList.remove('s-card--hovered');
  // Restaura o ID padrão do body
  document.body.id = '';
}

// Função para adicionar os ouvintes de eventos 'mouseenter' e 'mouseleave' a todos os cards
function addEventListenersToCards() {
  // Seleciona todos os elementos com a classe 's-card'
  const cardElements = document.getElementsByClassName('s-card');

  // Itera sobre cada card e adiciona os ouvintes de eventos
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    // Ao passar o mouse sobre o card, chama a função handleMouseEnter
    card.addEventListener('mouseenter', handleMouseEnter);
    // Ao tirar o mouse do card, chama a função handleMouseLeave
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

// Quando o DOM estiver completamente carregado, adiciona os ouvintes de eventos aos cards
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

// Função para selecionar um item no carrossel (assumindo que essa é a funcionalidade)
function selectCarouselItem(selectedButtonElement) {
  // Obtém o ID do item selecionado
  const selectedItem = selectedButtonElement.id;
  // Seleciona o elemento do carrossel
  const carousel = document.querySelector('.s-cards-carousel');
  // Obtém a transformação atual do carrossel (rotação)
  const transform = carousel.style.transform;
  // Extrai o valor da rotação em graus
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  // Calcula a nova transformação e aplica ao carrossel
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  carousel.style.transform = newTransform;

  // Atualiza o estilo dos botões de controle
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}