var chatApp = angular.module("bodyArea", []);

chatApp.controller("mainArea", function($scope) {
    $scope.comments = [
        "This is the first comment!",
        "Here's the second one!",
        "And this is one more.",
        "Here is another one!"
    ];

    $scope.customStyle = {};
    $scope.turnGreen = function (){
        $scope.customStyle.style = {"color":"green"};
    }

    $scope.turnBlue = function() {
        $scope.customStyle.style = {"color":"blue"};
    }

    $scope.addComments = function() {
        if ($scope.textArea === null) {
            $scope.comments.push("Invalid entery!");
        }else {
            $scope.comments.push($scope.textArea);
            $scope.textArea = '';
            document.getElementById('textField').focus();
        }
    }
});