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

const myProjects = [
  {
    image: './Assets/kid laroi.jpg',
    name: 'The Kid Laroi',
    heading: ' Australian rapper, singer, and songwriter',
    heading1: 'Laroi gained recognition after the association with JW when he was on a tour in Australia',
  },
  {
    image: './Assets/lil baby.jpg',
    name: 'Lil Baby 4PF',
    heading: 'American rapper and CEO',
    heading1: ' He rose to mainstream fame after release of his mixtape Perfect Timing. CEO 4PF',
  },
  {
    image: './Assets/42 dugg.jpg',
    name: '42 DUGG',
    heading: 'American rapper',
    heading1: ' He is jointly signed to Lil Baby and Yo Gotti respective labels 4 Pockets Full and Collective Music Group',
  },
  {
    image: './Assets/olivia.jpg',
    name: 'Olivia Rodrigo',
    heading: 'American singer-songwriter and actress',
    heading1: 'Olivia Rodrigo gained recognition in the late 2010s lead on High School musical',
  },
  {
    image: './Assets/RR.jpg',
    name: 'Roddy Ricch',
    heading: 'American rapper, singer and songwriter',
    heading1: 'Roddy Ricch rose to fame in 2018 with his single, "Die Young" from then, he hasn\'t looked back',
  },
  {
    image: './Assets/billie.jpg',
    name: 'Billie Eilish',
    heading: 'American singer and songwriter',
    heading1: 'Billie has been in the industry for years now and she has released hits from Ocean eyes',
  },
];

const main = document.querySelector('main');
const section = document.createElement('section');
section.setAttribute('class', 'speakers');
const div = document.createElement('div');
const hamx = document.createElement('span');
hamx.setAttribute('class', 'bottomline-2');
div.className = 'speaker-div';
const header = document.createElement('h5');
header.setAttribute('class', 'speakerheader');
header.innerHTML = 'Featured Performers';
section.append(header, hamx);
main.append(section);

for (let i = 0; i <= myProjects.length; i += 1) {
  const img = document.createElement('img');
  img.setAttribute('src', myProjects[i].image);
  img.setAttribute('alt', myProjects[i].name);
  const h2 = document.createElement('h6');
  h2.innerHTML = myProjects[i].name;
  const subHeader = document.createElement('p');
  subHeader.setAttribute('class', 'p-h');
  subHeader.innerHTML = myProjects[i].heading;
  const subHeader1 = document.createElement('p');
  subHeader1.setAttribute('class', 'p-h1');
  subHeader1.innerHTML = myProjects[i].heading1;
  const border = document.createElement('span');
  border.setAttribute('class', 'border-divider');
  const subdiv = document.createElement('div');
  subdiv.setAttribute('class', 'subdiv');
  subHeader.setAttribute('class', 'p-holder');
  subdiv.append(h2, subHeader, border, subHeader1);
  div.append(img, subdiv);
  section.append(div);
  main.append(section);
}
