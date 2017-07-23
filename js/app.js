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
      '': {templateUrl: '/states/templateProjects.html'},
      'aside@project': {templateUrl: '/states/partials/aside/aside.html'},
      'main@project': {templateUrl: '/states/partials/project/project.html'}
    }
  })
  .state('contact', {
    url: '/contact',
    views: {
      '': {templateUrl: '/states/templateProjects.html'},
      'aside@contact': {templateUrl: '/states/partials/aside/aside.html'},
      'main@contact': {templateUrl: '/states/partials/contact/contact.html'}
    }
  })
  .state('about', {
    url: '/about',
    views: {
      '': {templateUrl: '/states/templateProjects.html'},
      'aside@about': {templateUrl: '/states/partials/aside/aside.html'},
      'main@about': {templateUrl: '/states/partials/about/about.html'}
    }
  })
  .state('portfolio-connect4', {
    url: '/portfolio/connect4',
    views: {
      '': {templateUrl: '/states/templateProjects.html'},
      'aside@portfolio-connect4': {templateUrl: '/states/partials/aside/aside.html.html'},
      'main@portfolio-connect4': {templateUrl: '/states/partials/portfolio/connect4.html'}
    }
  })
  .state('portfolio-movies', {
    url: '/portfolio/movies',
    views: {
      '': {templateUrl: '/states/templateProjects.html'},
      'aside@portfolio-movies': {templateUrl: '/states/partials/aside/aside.html.html'},
      'main@portfolio-movies': {templateUrl: '/states/partials/portfolio/movies.html'}
    }
  })
  .state('portfolio-police', {
    url: '/portfolio/police',
    views: {
      '': {templateUrl: '/states/templateProjects.html'},
      'aside@portfolio-police': {templateUrl: '/states/partials/aside/aside.html.html'},
      'main@portfolio-police': {templateUrl: '/states/partials/portfolio/police.html'}
    }
  });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('PortfolioApp', ['ui.router'])
  .config(MainRouter);
