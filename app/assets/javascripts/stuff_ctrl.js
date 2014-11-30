(function () {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {

    $scope.message = "Hello!";

    $scope.reviews = [
      { 
        text: "AngularJS is the best thing since sliced bread!",
        rating: 5,
        reviewer: "Burton Wax"
      },
      { 
        text: "I love AngularJS, especially when I'm programming!",
        rating: 4,
        reviewer: "Emily Post"
      },
      { 
        text: "AngularJS is waaaaay better than Chinese Checkers.",
        rating: 2,
        reviewer: "Angela Pearson"
      }
    ];

    $scope.addReview = function(text, rating, name) {
      if(text && rating && name) {
        var newReview = {
          text: text,
          rating: rating,
          name: name
        }
        $scope.reviews.push(newReview);
        $scope.newReviewText = "";
        $scope.newReviewRating = "";
        $scope.newReviewName = "";
      }
    };

    $scope.isPositive = function(review) {
      return review.indexOf("stupid") == -1;
    };

    window.scope = $scope;
  });
})();
