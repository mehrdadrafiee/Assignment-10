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

    $scope.turnRed = function() {
        $scope.customStyle.style = {"color":"red"};
    }

    $scope.addComments = function() {
        console.log("textArea is", $scope.textArea, typeof $scope.textArea)
        if (! $scope.textArea) {
            $scope.comments.push("Invalid entery!");
            $scope.turnRed();
        }else {
            $scope.comments.push($scope.textArea);
            $scope.textArea = '';
            document.getElementById('textField').focus();
        }
    }
});