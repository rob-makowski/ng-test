'use strict';

var app = angular.module('testApp', ['ngRoute','ngFlash', 'ngGrid'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('edit/:userIndex',{
                templateUrl: 'views/edit.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
