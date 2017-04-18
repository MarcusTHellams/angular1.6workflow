(function () {
    angular.module('app.controller', [])
        .controller('myController', MyController);

    MyController.$inject = ['$scope', 'myService'];
    function MyController($scope, myService) {
        $scope.title = 'Hello World!!!';
        myService.callMe();
        $scope.changeTitle = function (title) {
            console.log(title);
            $scope.title = title;
        };
    }

})();