(function () {
    angular.module('app.components.header', ['app.components.lists', 'app.services.utility'])
        .component('myHeader', {
            controller: MyHeader,
            templateUrl: 'templates/myHeader.template.html',
            bindings: {
                headerName: '<',
                changeTitle: '&'
            }
        });

    MyHeader.$inject = ['myService', 'UtilityService', '$rootScope', 'ListService', '$scope'];
    function MyHeader(myService, UtilityService, $rootScope, ListService, $scope) {
        var $ctrl = this;
        // $ctrl.changeTitle = $ctrl.changeTitle || angular.noop;
        $ctrl.changeHeaderName = changeHeaderName;
        $ctrl.my = 'Johnny Gill';

        $ctrl.$onChanges = function (changeObj) {
            console.log(changeObj);
            if (UtilityService.checkPropChange(changeObj, 'headerName')) {
                console.log('ish done changed');
            }
        };

        $ctrl.list = ListService.list;

        $ctrl.deleteFromList = deleteFromList;

        myService.callMe();

        function deleteFromList(index) {
            $ctrl.list = ListService.removeFromList(index);
            $rootScope.$broadcast('justDeleted', { name: 'Marcus' });
        }

        $scope.$watch(
            function () {
                return $ctrl.list;
            },
            function (newval, oldval) {
                console.log(arguments);
            });

        function changeHeaderName() {
            $ctrl.headerName = 'Marcus';
            // $ctrl.changeTitle({ title: 'Marcus' });
        }
    }

})();