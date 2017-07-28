function PortfolioController() {
  var controller = this;

  controller.portfolioData = [
    {
      title: 'Connect 4',
      titleName: 'portfolio-connect4',
      polariodName: 'Connect 4',
      img: 'connect4',
      desc: 'The project was created using HTML, CSS, JS and jQuery. CSS was used to colour the counters and Javascript was used to change the colour of the counter after each person has taken their turn. Javascript was also used to determine the winner of the game.',
      shortDesc: 'short desciption',
      link: 'https://jcolairo-sg-project-1.herokuapp.com/',
      githubLink: 'https://github.com/jcolairo/sg-project-1'
    },
    {
      title: 'Find crime in your area',
      titleName: 'portfolio-police',
      polariodName: 'Crime API',
      img: 'police.png',
      desc: 'This SPA (Single-Page App) allows the user to search for crimes in a particular area. It was created using Node/ Express on the Server-Side, HTML, CSS and Angular on Client-Side. It uses 2 external API’s (Google Maps and Police UK), uses the rMVC (router, Model, View, Controller) and exploits HTTP request.',
      link: 'https://james-sg-project-3.herokuapp.com/',
      githubLink: 'https://github.com/jcolairo/sg-project-3'
    },
    {
      title: 'Find your favourite Movie',
      titleName: 'portfolio-movies',
      polariodName: 'Movies',
      img: 'movies.png',
      desc: 'This SPA (Single-Page App) allows the user to store their favourite movies in a database. This project has a relational database with the user being able to have one movie. It was created using Node/ Express on the Server-Side, HTML, CSS on Client-Side and uses a Mongo database. It uses the rMVC (router, Model, View, Controller) model and exploits HTTP requests.',
      link: 'https://users-movie-mvc.herokuapp.com/',
      githubLink: 'https://github.com/jcolairo/users-movie-mvc'
    }
  ];

  controller.aboutData = [
    {
      desc: 'A junior developer with a passion to reach the top. I have completed projects as shown and am in the process of completing more, always willing to learn from others and make myself a better developer. Talented in the languages below and I am looking to work in a team that will help me get to the next level.',
      email: 'jamescolairo37@gmail.com',
      githubLink: 'https://github.com/jcolairo',
      linkedin: 'https://www.linkedin.com/in/james-colairo/',
      skills: [
        'jQuery',
        'CSS3',
        'SCSS',
        'HTML5',
        'JS',
        'AngularJS',
        'NodeJS',
        'ExpressJS',
        'Github',
        'MongoDB',
        'Firebase'
      ]
    }
  ];

  controller.navActive = false;

  controller.showNavBar = function () {
    controller.navActive = !controller.navActive;
  };
}

angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
