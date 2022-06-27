const menu = document.querySelector('.menu-3');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  } else {
    hamburger.classList.add('active');
    menu.classList.add('active');
  }
});
// const menu = document.querySelector('.menu-3');
// menu.addEventListener('click', () => {
//   menu.classList.remove('active');
// });
