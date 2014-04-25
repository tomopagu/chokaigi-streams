var chokaigi = angular.module("chokaigi", ["firebase"]);

function StreamCtrl ($scope, $firebase) {
  var streams = new Firebase("https://chokaigi-streams.firebaseio.com");
  $scope.streams = $firebase(streams);

  var keys = $scope.streams.$getIndex();
  angular.forEach(keys, function(key, i) {
    console.log($scope.streams[key]); // Prints items in order they appear in Firebase.
  });
}
