"use strict";
(function() {
  angular.module('appProteccion').directive('onlyNumbers', onlyNumbers);

  onlyNumbers.$inject = [];
  function onlyNumbers() {
    return {
      restrict : 'A',
      require : 'ngModel',
      link : function(scope, elements, attrs, controller) {
        var element = elements[0],
        regex = RegExp("^[0-9]*$"),
        value = element.value;

        element.addEventListener('keyup', function(e) {
          if (!regex.test(element.value)) {
            element.value = value;
            controller.$setViewValue(value);
          } else {
            value = element.value;
          }
        });
      }
    }
  }

})();
