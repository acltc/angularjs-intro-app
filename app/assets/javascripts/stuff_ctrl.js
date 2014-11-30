(function () {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {

    $scope.message = "Hello!";

    $scope.reviews = ["AngularJS is the best thing since sliced bread!", "I love AngularJS, especially when I'm programming!", "AngularJS is waaaaay better than Chinese Checkers."]

    $scope.addReview = function(review) {
      $scope.reviews.push(review);
      $scope.newReview = "";
    };

    window.scope = $scope;
  });
})();
