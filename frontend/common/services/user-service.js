/**
 * Created by vmansoori on 1/13/2015.
 */

var myApp = angular.module('realtor')

var user = function (fName, lName, dofBirth) {
    return {
        'firstName': fName,
        'lastName': lName,
        'DOB': dofBirth
    }
}

myApp.service('UserService', function () {

    var userData = {
        users: [
            new user('Kathy', 'Emami', '19/9/1973'),
            new user('Vahid', 'Mansoori', '11/6/1973')
        ]
    }
    this.getUsers = function () {
        return userData.users;
    }
})