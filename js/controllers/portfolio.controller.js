function PortfolioController($state) {
  var controller = this;

  controller.portfolioData = [
    {
      title: 'Connect 4',
      titleName: 'portfolio-connect4',
      img: 'connect4.png',
      desc: 'Connect 4 desciption',
      link: 'https://jcolairo-sg-project-1.herokuapp.com/',
      imgPath: 'images-connect4'
    },
    {
      title: 'Find your favourite Movie',
      titleName: 'portfolio-movies',
      img: 'movies.png',
      desc: 'movies users desciption',
      link: 'https://users-movie-mvc.herokuapp.com/'
    },
    {
      title: 'Find crime in your area',
      titleName: 'portfolio-police',
      img: 'police.png',
      desc: 'police api desciption',
      link: 'https://james-sg-project-3.herokuapp.com/'
    }
  ];
}

angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
