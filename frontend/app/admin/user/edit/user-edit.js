/**
 * Created by vmansoori on 1/15/2015.
 */
var myApp = angular.module('realtor')
    .config(
    function ($stateProvider) {
        $stateProvider.state("admin.user.edit", {
            url: "/edit",
            onEnter: {}
        });
    }
)

