/**
 * Created by vmansoori on 1/13/2015.
 */
var myApp = angular.module('realtor')

realtor.config(function ($stateProvider) {
    $stateProvider
        .state('common', {
            abstract: true,
            url: 'common',
            templateUrl: './common.tmpl.html'
        })
})