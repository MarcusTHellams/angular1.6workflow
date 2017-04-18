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

    MyHeader.$inject = ['myService', 'UtilityService', '$rootScope'];
    function MyHeader(myService, UtilityService, $rootScope) {
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

        $ctrl.list = Immutable.List([
            'Bacon',
            'Eggs',
            'Cheese',
            'Butter',
            'Bread',
            'Milk',
            'Brussel Sprouts',
            'Steak',
            'French Fries'
        ]);

        $ctrl.deleteFromList = deleteFromList;

        myService.callMe();

        function deleteFromList(index) {
            $ctrl.list = $ctrl.list.delete(index);
            $rootScope.$broadcast('justDeleted', { name: 'Marcus' });
        }

        function changeHeaderName() {
            $ctrl.headerName = 'Marcus';
            // $ctrl.changeTitle({ title: 'Marcus' });
        }
    }

})();