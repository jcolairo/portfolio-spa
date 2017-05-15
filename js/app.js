function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@home': {templateUrl: '/states/partials/home/home.html'}
    }
  })
  .state('contact', {
    url: '/contact',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@contact': {templateUrl: '/states/partials/contact/contact.html'}
    }
  })
  .state('about', {
    url: '/about',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@about': {templateUrl: '/states/partials/about/about.html'}
    }
  })
  .state('portfolio-connect4', {
    url: '/portfolio/connect4',
    views: {

    }
  })
  .state('portfolio-movies', {
    url: '/portfolio/movies',
    views: {

    }
  })
  .state('portfolio-police', {
    url: '/portfolio/police',
    views: {

    }
  });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('PortfolioApp', ['ui.router'])
  .config(MainRouter);
