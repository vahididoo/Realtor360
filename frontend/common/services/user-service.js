/**
 * Created by vmansoori on 1/13/2015.
 */
var user = function (img, fName, lName, dofBirth) {
    var calcId = function () {
        return Math.floor(Math.random() * 100)
    };

    var randomImg = function () {
        var imgId = Math.floor(Math.random() * 10)
        return 'a' + (8 > imgId && imgId > 0 ? imgId : 1) + '.jpg';
    }
    return {
        'id': calcId(),
        'image': img ? img : randomImg(),
        'firstName': fName,
        'lastName': lName,
        'DOB': dofBirth
    }
};

angular.module('common.user.service', [])
    .service('UsersModel', function () {
        var userData = {
            users: [
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Vahid', 'Mansoori', '11/6/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Vahid', 'Mansoori', '11/6/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Kathy', 'Emami', '19/9/1973'),
                new user('', 'Vahid', 'Mansoori', '11/6/1973')
            ]
        };

        this.userProfile = {
            'contact': {
                'firstName': 'Vahid', 'lastName': 'Mansoori', 'DOB': new Date('1972-jun-11'),
                'address': {
                    'streetNumber': '141',
                    'street': 'Simonston Blvd.',
                    'city': 'Thornhill',
                    'province': 'Ontario',
                    'postalCode': 'L3T 4M1'
                },
                'phone': {'home': '9057071025', 'cell': '4169174166'},
                'avatar': 'resources/img/a1.jpg',
                'profilePicture': 'resources/img/profile_big.jpg'
            },
            'work': {
                'title': 'Broker',
                'regNumber': '123456789',
                'registeredSince': Date.parse('2005-feb-11'),
                'company': 'HomeLife Bayview',
                'logo': 'resources/img/zender_logo.png',
                'address': {
                    'streetNumber': '2200',
                    'street': 'Eglinton Av. East',
                    'city': 'Scarborough',
                    'province': 'Ontario',
                    'postalCode': 'L3T 4M1'
                },
                'phone': {'direct': '4161234567', 'fax': '9051234567'}
            }

        };

        this.getUsers = function () {
            return userData.users;
        };

        this.updateUser = function (user) {
           angular.copy(user,this.userProfile);
        };

        this.createUser = function () {
            return new user('', '', '', '')
        };

        this.addUser = function (user) {
            userData.users.push(user);
        };

        this.getUser = function (id) {
            var users = this.getUsers();
            for (var i = 0; i < users.length; i++) {
                if (id == users[i].id) {
                    return users[i];
                }
            }
        };

        this.getUserProfile = function (id) {
            //TODO This is just a sample.

            return this.userProfile;

        };
    })

