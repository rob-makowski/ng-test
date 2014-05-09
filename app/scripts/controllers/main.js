'use strict';

app.controller('MainCtrl', ['$scope','$timeout', '$flash',
    function ($scope, $timeout, $flash) {
        $scope.users = [
            /*{firstName: 'robert', lastName: 'makowski'},
            {firstName: 'erin', lastName: 'makowski'},
            {firstName: 'emma', lastName: 'makowski'}*/
        ];

        $scope.editedUser = [];

        $scope.showEditForm = 0;

/*        $scope.gridOptions = {
            data: 'users',
            columnDefs: [
                {field:'firstName', displayName:'First Name'},
                {field: 'lastName', displayName:'LastName'}
            ],
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEdit: true
        };*/

        //$scope.index = $routeParams;

        $scope.addUser = function (newUser) {
            $scope.users.push({
                firstName: newUser.firstName,
                lastName: newUser.lastName
            });

            $scope.newUser  = '';

            $scope.successClass = 'alert alert-success';

            $flash('User Created Successfully', { type: 'info' ,duration:2500});

            $timeout(function() {
                $scope.successClass = '';
                }, 2500);

            $scope.myForm.$setPristine();
        };

        $scope.getError = function(error){
            if(angular.isDefined(error)){
                if(error.required){
                    return 'This field is required';
                }
            }
        };

        $scope.removeUser = function(index){
            $scope.users.splice(index, 1);
        };

        $scope.editUser = function(index){
            $scope.showEditForm = 1;
            $scope.editedUser.push({
                firstNameED : $scope.users[index].firstName,
                lastNameED : $scope.users[index].lastName
            });
            $scope.editUserIndex = index;
        };

        $scope.editedUsers = function(editedUser){
            //console.log(editedUser[0].firstNameED);
            $scope.users[$scope.editUserIndex].firstName = editedUser[0].firstNameED;
            $scope.users[$scope.editUserIndex].lastName = editedUser[0].lastNameED;
            $scope.showEditForm = 0;

            $scope.editedUser = [];

            $scope.successClass = 'alert alert-success';

            $flash('User Updated Successfully', {type: 'info', duration:2500});

            $timeout(function() {
                $scope.successClass = '';
            },2500);
        };

    }
]);