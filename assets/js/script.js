window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  let scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = scrollPosition * 0.4 + 'px';
});