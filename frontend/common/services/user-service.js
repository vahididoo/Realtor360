/**
 * Created by vmansoori on 1/13/2015.
 */

var myApp = angular.module('common.user.service', [])

var user = function (img, fName, lName, dofBirth) {
    var calcId = function () {
        return Math.floor(Math.random() * 100)
    };

    var randomImg = function () {
        var imgId = Math.floor(Math.random() * 10)
        return 'a' + (9 > imgId > 0 ? imgId : 1) + '.jpg';
    }
    return {
        'id': calcId(),
        'image': img ? img : randomImg(),
        'firstName': fName,
        'lastName': lName,
        'DOB': dofBirth
    }
}

myApp.service('UsersModel', function () {

        var userData = {
            users: [
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Vahid', 'Mansoori', '11/6/1973')
            ]
        }
        this.getUsers = function () {
            return userData.users;
        };

        this.updateUser = function (user) {
            angular.forEach(userData.users, function (aUser) {
                if (aUser.id == user.id) {
                    angular.copy(user, aUser);
                }
            })
        };

        this.createUser = function () {
            return new user('', '', '', '')
        };

        this.addUser = function (user) {
            userData.users.push(user);
        }
    }
)