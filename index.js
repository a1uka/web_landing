function moveSlide(direction) {
    // 1. Находим контейнер по ID
    const container = document.getElementById('projects-container');
    
    if (container) {
        // 2. Определяем, на сколько скроллить. 
        // Берем ширину одного бокса (clientWidth)
        const box = container.querySelector('.box-dynamic');
        const step = box.clientWidth + 1; // ширина бокса + gap (отступ)

        // 3. Выполняем скролл
        container.scrollBy({
            left: direction * step,
            behavior: 'smooth'
        });
    } else {
        console.error("Контейнер не найден! Проверьте ID в HTML.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-container');
  const boxes = document.querySelectorAll('.box-dynamic');

  const options = {
    root: container,       // Следим внутри контейнера карусели
    threshold: 0.7,        // Бокс считается активным, когда виден на 70%
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Убираем подсветку у всех и даем ее текущему
        boxes.forEach(b => b.classList.remove('is-active'));
        entry.target.classList.add('is-active');
      }
    });
  }, options);

  // Запускаем слежку за каждым боксом
  boxes.forEach(box => observer.observe(box));
});
