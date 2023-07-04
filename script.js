// Função para adicionar o evento de clique às perguntas frequentes
function addClickEventToFaq() {
    const faqs = document.querySelectorAll('.faq');
  
    faqs.forEach(function(faq) {
      const question = faq.querySelector('.question');
      const answer = faq.querySelector('.answer');
  
      question.addEventListener('click', function() {
        faq.classList.toggle('active');
      });
    });
  }
  
// Função para exibir os elementos um por um, em um intervalo de tempo
function showElementsOneByOne(elements, index, interval) {
  if (index < elements.length) {
    const element = elements[index];
    element.classList.remove('hidden');
    element.classList.add('visible');
    index++;

    setTimeout(function() {
      showElementsOneByOne(elements, index, interval);
    }, interval);
  } else {
    // Adicionar eventos de clique às perguntas frequentes
    addClickEventToFaq();
  }
}

  
  // Função para exibir elementos após a metade do vídeo
  function showElementsAfterVideo() {
    const video = document.getElementById('salesVideo');
    const ctaSection = document.getElementById('ctaAfterVideo');
    const contentSection = document.getElementById('contentAfterVideo');
    const elements = document.querySelectorAll('.hidden');
    const interval = (video.duration - video.currentTime) / (elements.length + 1); // Intervalo proporcional
  
    video.addEventListener('timeupdate', function() {
      const videoDuration = video.duration;
      const videoCurrentTime = video.currentTime;
      const halfVideoDuration = videoDuration / 2;
  
      if (videoCurrentTime >= halfVideoDuration) {
        // Remover o evento de tempo de atualização do vídeo para evitar a execução contínua
        video.removeEventListener('timeupdate', arguments.callee);
  
        showElementsOneByOne(elements, 0, interval);
      }
    });
  }
  
  showElementsAfterVideo();
  