/**
 * Created by vmansoori on 1/13/2015.
 */
var myApp = angular.module('realtor')

myApp.config(function ($stateProvider) {
    $stateProvider
        .state('common.nav', {
            url: 'nav',
            templateUrl: './nav.tmpl.html'
        })
})


myApp.controller('NavController', function (UserService) {
    var controller = this;
    controller.users = UserService.getUsers();
})