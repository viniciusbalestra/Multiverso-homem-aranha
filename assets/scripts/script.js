
// Função para adicionar a classe 's-card--hovered' ao card quando o mouse entra nele, 
// simulando um efeito de hover.
function handleMouseEnter() {
  // Adiciona a classe para aplicar o estilo de hover definido no CSS.
  this.classList.add('s-card--hovered');

  // Atualiza o ID do elemento body para identificar o card que está sendo hoverado.
  // Isso pode ser útil para estilos mais complexos ou interações específicas com o card.
  document.body.id = `${this.id}-hovered`;
}

// Função para remover a classe 's-card--hovered' do card quando o mouse sai dele, 
// revertendo o estilo de hover.
function handleMouseLeave() {
  // Remove a classe para remover o estilo de hover.
  this.classList.remove('s-card--hovered');

  // Restaura o ID do elemento body para o valor padrão.
  document.body.id = '';
}

// Função para adicionar ouvintes de eventos a todos os elementos com a classe 's-card',
// permitindo que eles respondam aos eventos de mouseenter e mouseleave.
function addEventListenersToCards() {
  // Seleciona todos os elementos com a classe 's-card' na página.
  const cardElements = document.getElementsByClassName('s-card');

  // Itera sobre cada card e adiciona os ouvintes de eventos.
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];

    // Quando o mouse entra no card, chama a função handleMouseEnter.
    card.addEventListener('mouseenter', handleMouseEnter);

    // Quando o mouse sai do card, chama a função handleMouseLeave.
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

// Aguarda o carregamento completo da página antes de adicionar os ouvintes de eventos, 
// garantindo que todos os elementos estejam disponíveis.
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

// Função para selecionar um item em um carrossel, alterando a rotação do carrossel
// e atualizando os indicadores de seleção.
function selectCarouselItem(selectedButtonElement) {
  // Obtém o ID do item selecionado a partir do botão clicado.
  const selectedItem = selectedButtonElement.id;

  // Seleciona o elemento do carrossel.
  const carousel = document.querySelector('.s-cards-carousel');

  // Obtém a transformação atual do carrossel (rotação).
  const transform = carousel.style.transform;

  // Extrai o valor da rotação em graus da transformação.
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);

  // Calcula o novo ângulo de rotação com base no item selecionado.
  const rotateYDeg = -120 * (Number(selectedItem) - 1);

  // Atualiza a transformação do carrossel com o novo ângulo de rotação.
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  carousel.style.transform = newTransform;

  // Atualiza o estilo dos botões de controle para indicar o item ativo.
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}