function PortfolioController($state) {
  var controller = this;

  controller.portfolioData = [
    {
      title: 'Connect 4',
      img: '',
      desc: '',
      link: 'https://jcolairo-sg-project-1.herokuapp.com/',
      linkName: 'Connect 4'
    },
    {
      title: 'Find your favourite Movie',
      img: '',
      desc: '',
      link: 'https://users-movie-mvc.herokuapp.com/',
      linkName: 'User, Movies'
    },
    {
      title: 'Find crime in your area',
      img: '',
      desc: '',
      link: 'https://james-sg-project-3.herokuapp.com/',
      linkName: 'Crime'
    }
  ];
}

angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
