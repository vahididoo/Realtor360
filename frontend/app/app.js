/**
 * Created by vmansoori on 1/13/2015.
 */
angular.module('realtor', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    'sidenav': {
                        url: 'common/nav',
                        templateUrl: 'app/common/nav/nav.tmpl.html'
                    },
                    'content': {
                        template: '<div><h2>This is content</h2></div>'
                    }
                }
            })
    })