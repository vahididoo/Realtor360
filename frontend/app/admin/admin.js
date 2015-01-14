/**
 * Created by vmansoori on 1/13/2015.
 */
var myApp = angular.module('realtor')

myApp.config(function ($stateProvider) {
    $stateProvider
        .state('admin', {
            url: 'admin',
            templateUrl: './admin.tmpl.html'
        })
})