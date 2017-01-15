(function () {
    'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.getItems = '';

    $scope.checkItems = function () {
        if ($scope.getItems === '') {
          $scope.itemMsg = 'Please enter data first';
        } else {
            countItems($scope.getItems);
        }

        function countItems(items) {
            var counts = str.split(",");
               console.log(counts);
            if (length.counts > 4) {
               $scope.itemMsg = 'yli nelj'; 
            } else if (length.counts <= 4) {
                $scope.itemMsg = 'alle nelj'; 

            }
        };
      //  if (getItems === '') {
        //    return "Please enter data first";
        
    };

};

})();