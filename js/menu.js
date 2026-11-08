// Бургер-меню в шапке (работает на телефоне). Открывает и закрывает список ссылок.
const head = document.querySelector('.site-head');
const burger = head.querySelector('.burger');

burger.addEventListener('click', () => {
  const open = head.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
});
