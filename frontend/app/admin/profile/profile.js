/**
 * Created by vmansoori on 1/21/2015.
 */
var myApp = angular.module('realtor')

myApp.config(function ($stateProvider) {
    $stateProvider.state('admin.profile', {
        url: "/profile",
        templateUrl: "app/admin/profile/profile.tmpl.html"
    });
})