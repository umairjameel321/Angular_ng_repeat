/// <reference path="angular.min.js" />

// steps
// create a module
var theModule = angular
    .module("myModule", [])
    .controller("myController", function($scope){
        var students = [
            {id: "1", name: "umair", rollno: "cs123"},
            {id: "1", name: "umair", rollno: "cs123"},
            {id: "1", name: "umair", rollno: "cs123"},
            {id: "1", name: "umair", rollno: "cs123"},
            {id: "1", name: "umair", rollno: "cs123"}
        ];

        var countries = [
            { name: "Pakistan",
                cities: [
                    {name: "lahore"},
                    {name: "lahore"},
                    {name: "lahore"},
                ]
            },
            { name: "Pakistan",
                cities: [
                    {name: "lahore"},
                    {name: "lahore"},
                    {name: "lahore"},
                ]
            },
            { name: "Pakistan",
                cities: [
                    {name: "lahore"},
                    {name: "lahore"},
                    {name: "lahore"},
                ]
            },
        ];

        $scope.students = students;
        $scope.countries = countries;
    });

