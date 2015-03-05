/**
 * Created by vmansoori on 1/15/2015.
 */
angular.module('realtor')
    .config(function ($stateProvider) {
        $stateProvider
            .state('admin.user', {
                //abstract: true,
                url: '/user',
                templateUrl: 'app/admin/user/user.tmpl.html'
            });
    })

