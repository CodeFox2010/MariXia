const card = document.getElementById('rootCard');
let Bool = true;
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    card.classList.add('morph');
    
    if (Bool === true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      Bool = false;
    }}
});
