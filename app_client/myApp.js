angular.module('myApp', ['ngRoute', 'ui.bootstrap']);


function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/indexPage/index.view.html',
            controller: 'indexCtrl',
            controllerAs: 'vm'

        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

    //        $locationProvider.html5Mode({
    //          enabled: true,
    //          requireBase: false
    //        });
}

angular
    .module('myApp')
    .config(['$routeProvider', '$locationProvider', config]);
