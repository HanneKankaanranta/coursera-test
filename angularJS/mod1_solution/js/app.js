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
            var counts = items.split(",");
            var count = 0;
            console.log(counts);
            console.log(counts.length);
            for (var i = 0; i < counts.length; i++) {
                if (counts[i] !== '') {
                    count++;
                }
               
            } 
            if (count >= 4) {
               $scope.itemMsg = 'Too much'; 
            } else if (count < 4) {
                $scope.itemMsg = 'Enjoy!!'; 
        
       //     if (counts.length >= 4) {
         //      $scope.itemMsg = 'Too much'; 
          //  } else if (counts.length < 4) {
           //     $scope.itemMsg = 'Enjoy!!'; 

            }
        };
      //  if (getItems === '') {
        //    return "Please enter data first";
        
    };

};

})();