/**
 * Created by vmansoori on 1/21/2015.
 */
var myApp = angular.module('realtor')

myApp.config(function ($stateProvider) {
    $stateProvider.state('admin.profile', {
        url: "/profile",
        templateUrl: "app/admin/profile/profile.tmpl.html",
        params: {'userId': {}},
        controller: 'ProfileController'
    });
}).controller('ProfileController', ['$scope', '$stateParams', 'UsersModel', function ($scope, $stateParams, UsersModel) {
    var controller = this;
    var user = UsersModel.getUserProfile($stateParams.userId);
    console.log(user);
    this.user = angular.copy(user);
    this.contact = user.contact;
    this.contactAddress = user.contact.address
    this.contactPhone = user.contact.phone;
    this.work = user.work;
    this.workAddress = user.work.address;
    this.workPhones = user.work.phone;
    this.readonly = true;
    this.readonlyClass = 'readonly';
    this.makeContentEditable = function () {
        this.readonly = !this.readonly;
        this.readonlyClass = this.readonly ? 'readonly' : '';
    };

    this.saveChanges = function () {
        UsersModel.updateUser(this.user);
        this.makeContentEditable();
    }


}]).controller('PersonalController', ['$scope', 'UsersModel', function ($scope, UsersModel) {
    var pController = this;

    this.readonly = true;
    this.readonlyClass = 'readonly';
    this.makeContentEditable = function () {
        this.readonly = !this.readonly;
        this.readonlyClass = this.readonly ? 'readonly' : '';
    }


    console.log($scope.readonly);
}]).controller('WorkController', ['$scope', 'UsersModel', function ($scope, UsersModel) {
    var pController = this;

    this.readonly = true;
    this.readonlyClass = 'readonly';
    this.makeContentEditable = function () {
        this.readonly = !this.readonly;
        this.readonlyClass = this.readonly ? 'readonly' : '';
    }


    console.log($scope.readonly);
}])