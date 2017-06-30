(function() {
    "use strict";

    angular.module('loginModule').directive('onlyNumbers', onlyNumbers);
    onlyNumbers.$inject = [];
    /**
     * Directiva que restringe el ingreso en el input a solo números
     * 
     * @returns 
     */
    function onlyNumbers() {
        var directive = {
            link: link,
            restrict: 'A',
            require: 'ngModel',
            scope: {
                model: '=ngModel'
            }
        };

        return directive;

        function link(scope, elements, attrs, controller) {
            scope.$watch('model', function() {
                if (scope.model) {
                    scope.model = scope.model.replace(/\D/g, '');
                }
            });
        }
    }
})();