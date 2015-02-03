/**
 * Created by vmansoori on 1/13/2015.
 */
var myApp = angular.module('realtor', ['ui.router', 'ngMaterial', 'common.user.service'])
    .config(function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('dark')
            .primaryColor('grey')
            .accentColor('blue-grey')
            .warnColor('orange');

        $mdThemingProvider.setDefaultTheme('dark');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    'sidenav': {
                        url: '/common/nav',
                        templateUrl: 'app/common/nav/nav.tmpl.html'

                    },
                    'content': {
                        template: '<ui-view />'
                    }
                }
            })
    }).controller('AppController', function ($state) {
        this.states = $state.get();
    })

myApp.filter(function (element) {
    return element.match()
})