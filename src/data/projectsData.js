import project1 from '../assets/manifest-portfolio.png';
import project2 from '../assets/bol-malzemos.png';

const projectsData = [
  {
    id: 1,
    title: 'Manifest',
    description:
      '"This site is designed to bring traditional Turkish rakı-fish culture together with a modern digital experience. Developed using React, HTML, CSS, and JavaScript, the site allows you to explore our delicious menus, make reservations, and learn more about our restaurant with its user-friendly interface. We aim to provide our guests with a fresh and unforgettable experience from the sea to the table."',
    image: project1,
    gihubLink: 'https://github.com/kurtemrecan/bol-malzemos',
    siteLink: 'https://manifest-fawn.vercel.app',
    technologies: ['React', 'JavaScript', 'TailwindCss'],
  },
  {
    id: 2,
    title: 'Pizza',
    description:
      '"This site is designed with a modern layout using React and Tailwind CSS to allow you to easily explore our delicious pizzas and place orders. Thanks to its user-friendly interface, you can browse our pizza varieties, quickly order your desired flavor, and find the nearest branch to you. We can’t wait for you to try our pizzas made with high-quality ingredients and fresh flavors!"',
    image: project2,
    gihubLink: 'https://github.com/kurtemrecan',
    siteLink: 'https://bol-malzemos.vercel.app/',
    technologies: ['React', 'JavaScript', 'TailwindCss'],
  },
];

export default projectsData;
