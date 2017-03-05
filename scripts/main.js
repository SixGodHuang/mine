requirejs.config({
    
    paths: {
        app: '../scripts',
        angular :'../theme/js/angular'
    },
    shim:{
        'angular':{
            exports:'angular'
        }
    }
});


requirejs(['angular'],function (angular) {

    var app = angular.module("webapp",[]);

    app.controller("foo",function($scope){
        $scope.name ="syy";
    })
    
    angular.bootstrap(document,['webapp']);

});