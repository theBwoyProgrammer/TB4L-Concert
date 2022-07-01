const menu = document.querySelector('.menu-3');
const hamburger = document.querySelector('.hamburger');
const link = document.querySelectorAll('.port');
hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  } else {
    hamburger.classList.add('active');
    menu.classList.add('active');
  }
});

link.forEach((e) => {
  e.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    } else {
      hamburger.classList.add('active');
      menu.classList.add('active');
    }
  });
});

// const myProjects = [
//   {
//     image: '',
//     name: 'Goodboy Kimmie',
//     heading: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy',
//     heading1: 'text used in laying out print, graphic or web designs. The passage is',
//   },
// ];
