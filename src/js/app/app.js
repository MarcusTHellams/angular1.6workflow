(function () {
    angular.module('app', [
        'app.controller',
        'app.components.header',
        'app.services.list',
        'app.service',
        'ui.router'
    ])
        .config(config);


    angular.element().ready(function () {
        // bootstrap the app manually
        angular.bootstrap(document, ['app']);
    });

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('');

        $stateProvider.state('header', {
            url: '',
            component: 'myHeader',
            resolve: {
                headerName: function () {
                    return 'William'
                },
                changeTitle: function () {
                    return function (title) {
                        console.log(title);
                    }
                }
            }
        });

    }
})();