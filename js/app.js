function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@home': {templateUrl: '/states/partials/home/home.html'}
    }
  })
  .state('project', {
    url: '/project',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@project': {templateUrl: '/states/partials/project/project.html'}
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
      '': {templateUrl: '/states/template.html'},
      'main@portfolio-connect4': {templateUrl: '/states/partials/portfolio/connect4.html'}
    }
  })
  .state('portfolio-movies', {
    url: '/portfolio/movies',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@portfolio-movies': {templateUrl: '/states/partials/portfolio/movies.html'}
    }
  })
  .state('portfolio-police', {
    url: '/portfolio/police',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@portfolio-police': {templateUrl: '/states/partials/portfolio/police.html'}
    }
  });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('PortfolioApp', ['ui.router'])
  .config(MainRouter);
