/**
 * Created by vmansoori on 1/15/2015.
 */
var myApp = angular.module('realtor')
    .config(function ($stateProvider) {
        $stateProvider
            .state('admin.user.view', {
                url: '/view',
                templateUrl: 'app/admin/user/view/user-view.tmpl.html'
            });
    })


myApp.controller('UserViewController', function (UsersModel, $log, $mdDialog) {

    $log.info(UsersModel.getUsers());

    this.users = UsersModel.getUsers();

    this.editUser = function (user) {
        //console.log(user.firstName)
        $mdDialog.show({
                controller: DialogController,
                templateUrl: 'app/admin/user/edit/user-edit.tmpl.html',
                resolve: {
                    user: function () {
                        return angular.copy(user)
                    }
                },
                controllerAs: 'controller'
            }
        ).then(function (user) {
                UsersModel.updateUser(user)
            })
    };

    this.addUser = function () {
        //console.log(user.firstName)
        $mdDialog.show({
                controller: DialogController,
                templateUrl: 'app/admin/user/create/user-create.tmpl.html',
                controllerAs: 'controller',
                resolve: {
                    user: function () {
                        return UsersModel.createUser();
                    }
                }
            }
        ).
            then(function (user) {
                UsersModel.addUser(user)
            })
    }
})

var DialogController = function ($scope, $mdDialog, user) {
    $scope.user = user;


    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.OK = function (user) {
        $mdDialog.hide(user);
    };
}





