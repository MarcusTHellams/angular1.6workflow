(function () {
    angular.module('app.services.utility', [])
        .service('UtilityService', UtilityService);

    var toString = Object.prototype.toString;


    UtilityService.$inject = [];
    function UtilityService() {
        this.checkPropChange = checkPropChange.bind(this);
    }

    function checkPropChange(obj, prop) {
        if (obj[prop] && obj[prop].currentValue !== obj[prop].previousValue && toString.call(obj[prop].previousValue) !== '[object Object]') {
            return true;
        }
        return false;
    }

})();