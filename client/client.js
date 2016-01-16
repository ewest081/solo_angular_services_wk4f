/**
 * Created by lizwestberg on 1/15/16.
 */
var app = angular.module('thetaApp', []);

app.controller('MainController', ['$scope', 'ThetaData', function($scope, ThetaData) {
    $scope.theta = ThetaData;
    $scope.names = ThetaData.roster;
    $scope.teachers = ThetaData.instructors;
}]);

app.factory('ThetaData', ['$sce', function($sce){
    var theta = {};

        theta.title = "Theta";
        theta.cohortNumber = 7;
        theta.mascot = "Wolverine!!!";
        theta.instructors = getInstructors();
        theta.motto = "Transcendence Through Suffering";
        theta.roster = fetchStudents();
        theta.pctUsingMac = 95.4;
        theta.color = "Mermaid Treasure";
        theta.daysTillGrad = gradDate('03/11/2016 3:00 PM', 'countdown');
        theta.symbol = $sce.trustAsHtml("&Theta;");

    console.log(theta);

    return theta;
}]);

fetchStudents = function(){
    return [{name: "Amber Joy"}, {name: "Christopher Graff"}, {name:  "Brooks Nagel"}, {name:  "Altamir Coelho"}, {name:  "Eric Anderson"}, {name:  "Elizabeth Westberg"}, {name:  "Jeremy Cloutier"}, {name:  "Joe Anderson"}, {name:  "Kenzie Bultema"}, {name:  "Matthew Reinders"}, {name:  "Nathan Briscoe"}, {name:  "Natalie Koch"}, {name:  "Charlie Angus"}, {name:  "Paul Sotherland"}, {name:  "Robby Newman"}, {name:  "Anthony Rohr"}, {name: "Sam Musselman"}, {name:  "Scott Jorgenson"}, {name:  "Zach Hintgen"}, {name:  "Gwen Paul"}, {name:  "Kyra Crowston"}];
};

getInstructors = function(){
    return [{name: "Joel", specialty: "Grunting"}, {name: "Kristy", specialty: "Bootstrap"}, {name: "Fromander", specialty: "Abandonment"}];
};

gradDate = function(dt, id) {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = days + " Days, ";
            document.getElementById(id).innerHTML += hours + ":";
            document.getElementById(id).innerHTML += minutes + ":";
            document.getElementById(id).innerHTML += seconds;
        }
    timer = setInterval(showRemaining, 1000);
};