(function () {
    angular.module('app.services.list', [])
        .factory('ListService', ListService);



    ListService.$inject = [];
    function ListService() {
        var list = Immutable.List([
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

        return {
            list: list,
            removeFromList: removeFromList
        };

        function removeFromList(index) {
            return this.list = this.list.delete(index); //jshint ignore:line
        }
    }

})();