(function () {
    angular.module('app.components.lists', ['app.services.utility'])
        .component('listComponent', {
            controller: ListComponent,
            templateUrl: 'templates/list.component.html',
            bindings: {
                list: '<',
                deleteOne: '&'
            }
        });

    ListComponent.$inject = ['UtilityService', '$rootScope'];
    function ListComponent(UtilityService, $rootScope) {
        var ctrl = this;

        $rootScope.$on('justDeleted', function (event, args) {
            console.log('just deleted-------------------------------------', event);
        });
        ctrl.$onChanges = function (changeObj) {
            console.log(changeObj);
            if (UtilityService.checkPropChange(changeObj, 'list')) {
                console.log('ish done changed');
            }
        };
    }

})();