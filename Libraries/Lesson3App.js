var lesson3App = angular.module("Lesson3App", []);
lesson3App.controller("Lesson3Ctrl", function($scope) {
    $scope.model = [{ Id: "green", Value: "Green Color" }, { Id: "Red", Value: "Red Color" }, { Id: "Yellow", Value: "Yellow Color" }];
    $scope.selected = $scope.model[0].Value;
});

angular.module("Lesson3FinalApp", []).controller("Lesson3FinalCtrl", function($scope) {
    $scope.model = [];
    $scope.addUser = function(user, isValid) {
        if (!isValid) {
            $scope.showError = true;
        } else {
            if (user && user.email && user.password && user.isRemember) {
                $scope.model.push({
                    email: user.email,
                    password: user.password
                });
            }
        }
    }
});