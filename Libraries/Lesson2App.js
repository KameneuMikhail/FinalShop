var Lesson2App = angular.module("Lesson2App", []);
Lesson2App.controller("Lesson2Ctrl", function($scope) {
    $scope.models = [
        { Id: '1', Name: 'Ivan', Password: 'IvanPassword' },
        { Id: '2', Name: 'Vlad', Password: 'VladPassword' },
        { Id: '3', Name: 'Jack', Password: 'JackPassword' },
        { Id: '4', Name: 'Nick', Password: 'NickPassword' },
        { Id: '5', Name: 'Peter', Password: 'PeterPassword' },
    ];

    $scope.selected = $scope.models[0];

    $scope.AddUser = function() {
        var model = { Id: $scope.models.length, Name: $scope.NewName, Password: $scope.NewPassword }
        $scope.models.push(model);
        $scope.NewName = '';
        $scope.NewPassword = '';
    }
});