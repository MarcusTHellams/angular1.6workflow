(function () {
    angular.module('app.service', [])
        .service('myService', MyService);

    function MyService() {
        this.callMe = callMe.bind(this);
        this.name = 'Marcus';
        this.move = 'Move';

        function callMe() {
            console.log(this.name, this.move);
        }
    }
})();