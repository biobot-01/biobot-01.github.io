const data = [
  {
    id: 'contactEmail',
    src: 'dist/img/contact/email.svg',
    alt: 'Contact Kevin Michael via Email',
  },
  {
    id: 'udacity',
    src: 'dist/img/udacity/full-stack-web-developer-nanodegree-certificate-640w.png',
    srcset: 'dist/img/udacity/full-stack-web-developer-nanodegree-certificate-640w.png 640w, dist/img/udacity/full-stack-web-developer-nanodegree-certificate-768w.png 768w',
    sizes: '(min-width: 769px) 600px, calc(100vw - 40px)',
    alt: 'Udacity Full Stack Web Developer Nanodegree Certificate for Kevin Michael',
  },
  {
    id: '0',
    title: 'xDjSkaly',
    description: 'Sound & Music Production',
    technologies: [
      'Web Design',
      'Python Pelican',
      'HTML5',
      'CSS3',
      'jQuery',
      'Responsive',
    ],
    image: {
      src: 'dist/img/portfolio/xdjskaly/xdjskaly-sound-production-01-640w.png',
      srcset: 'dist/img/portfolio/xdjskaly/xdjskaly-sound-production-01-640w.png 640w, dist/img/portfolio/xdjskaly/xdjskaly-sound-production-01-768w.png 768w',
      sizes: '(min-width: 769px) 600px, calc(100vw - 40px)',
      alt: 'xDjSkaly, Sound & Music Production, Website',
    },
    link: 'https://biobot-01.github.io/xdjskaly',
  },
  {
    id: '1',
    title: 'Your Image',
    description: 'Nail & Beauty Salon',
    technologies: [
      'Web Design',
      'Graphic Design',
      'WordPress',
      'HTML5',
      'CSS3',
      'jQuery',
      'Responsive',
    ],
    image: {
      src: 'dist/img/portfolio/your-image/your-image-01-640w.png',
      srcset: 'dist/img/portfolio/your-image/your-image-beauty-salon-01-640w.png 640w, dist/img/portfolio/your-image/your-image-beauty-salon-01-768w.png 768w',
      sizes: '(min-width: 769px) 600px, calc(100vw - 40px)',
      alt: 'Your Image, Nail & Beauty Salon, Website',
    },
    link: 'http://yourbeautyimage.co.za',
  },
  {
    id: '2',
    title: 'B Interiors',
    description: 'Interior Design',
    technologies: [
      'Web Design',
      'WordPress',
      'HTML5',
      'CSS3',
      'jQuery',
      'Responsive',
    ],
    image: {
      src: 'dist/img/portfolio/b-interiors/b-interiors-01-640w.png',
      srcset: 'dist/img/portfolio/b-interiors/b-interiors-01-640w.png 640w, dist/img/portfolio/b-interiors/b-interiors-01-768w.png 768w',
      sizes: '(min-width: 769px) 600px, calc(100vw - 40px)',
      alt: 'B Interiors, Interior Design, Website',
    },
    link: 'http://www.b-interiors.co',
  },
  {
    id: '3',
    title: 'AgriCore Template',
    description: 'Agriculture Farming Technologies Template',
    technologies: [
      'Web Design',
      'Graphic Design',
      'Python Pelican',
      'HTML5',
      'CSS3',
      'Bulma',
      'jQuery',
      'Responsive',
    ],
    image: {
      src: 'dist/img/portfolio/agricore/agricore-farming-technologies-01-640w.png',
      srcset: 'dist/img/portfolio/agricore/agricore-farming-technologies-01-640w.png 640w, dist/img/portfolio/agricore/agricore-farming-technologies-01-768w.png 768w',
      sizes: '(min-width: 769px) 600px, calc(100vw - 40px)',
      alt: 'AgriCore Farming Technologies Website',
    },
    link: 'https://biobot-01.github.io/agricore',
  },
  {
    id: '4',
    title: 'Motorbike Showcase',
    description: 'Motorbike Showcase Template',
    technologies: [
      'Web Design',
      'Python Pelican',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'Responsive',
    ],
    image: {
      src: 'dist/img/portfolio/motorbike-showcase/motorbike-showcase-01-640w.png',
      srcset: 'dist/img/portfolio/motorbike-showcase/motorbike-showcase-01-640w.png 640w, dist/img/portfolio/motorbike-showcase/motorbike-showcase-01-768w.png 768w',
      sizes: '(min-width: 769px) 600px, calc(100vw - 40px)',
      alt: 'Motorbike Showcase Website',
    },
    link: 'https://biobot-01.github.io/motorbike-showcase',
  },
  {
    id: '5',
    title: 'Battleships Game',
    description: 'Command Line Battleships Game written in Python',
    technologies: [
      'Python 3',
    ],
    image: {
      src: 'dist/img/portfolio/battleships/python-battleships-game-01-640w.png',
      srcset: 'dist/img/portfolio/battleships/python-battleships-game-01-640w.png 640w, dist/img/portfolio/battleships/python-battleships-game-01-768w.png 768w',
      sizes: '(min-width: 769px) 600px, calc(100vw - 40px)',
      alt: 'Python Command Line Battleships Game',
    },
    link: 'https://www.github.com/biobot-01/battleships',
  },
]

const fields = [
  {
    name: 'name',
    rules: 'required|min_length[3]',
  },
  {
    name: 'email',
    rules: 'required|valid_email',
  },
  {
    name: 'message',
    rules: 'required|min_length[6]',
  },
];

export {data, fields};
