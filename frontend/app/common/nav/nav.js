/**
 * Created by vmansoori on 1/13/2015.
 */


var menuItem = function (name, sref, selected, children) {
    return {name: name, sref: sref, selected: selected, childItems: children}


}
var myApp = angular.module('realtor')
    .controller('NavController', ['$scope', '$state', 'UsersModel', function ($scope, $state, UsersModel) {
        this.showSubMenu = false;
        this.users = UsersModel.getUsers();
        this.flipSubMenu = function () {
            console.log(this.showSubMenu);
            this.showSubMenu = !this.showSubMenu;

        };
        this.menuList =
            [
                new menuItem
                ('User', 'admin.user.view', false, [
                        new menuItem('User 1', 'admin.user.view', '', 'false', []),
                        new menuItem('User 2', 'admin.user.view', '', 'false', [])]
                ),
                new menuItem
                ('Group', 'admin.user.view', false, [
                        new menuItem('User 1', 'admin.user.view', '', 'false', []),
                        new menuItem('User 2', 'admin.user.view', '', 'false', [])]
                )
            ]
        ;
        this.selectItem = function (menuItem) {
            //menuItem.selected = true;

            angular.forEach(this.menuList, function (item) {
                if (item.name == menuItem.name) {
                    item.selected = !item.selected
                }
            })
        };

        this.goTo = function (menuItem) {
            $state.go(menuItem.sref)
        };
    }])

myApp.config(function ($stateProvider) {
    /*    $stateProvider
     .state('common.nav', {
     url: 'nav',
     templateUrl: './nav.tmpl.html'
     })*/
})


