var chokaigi = angular.module("chokaigi", ['firebase','angularMoment']);

function StreamCtrl ($scope, $firebase, $timeout) {
  var streams = new Firebase('https://chokaigi-streams.firebaseio.com');
  $scope.streams = $firebase(streams);
  
  $timeout(function(){
    $scope.current = moment().local().format();
    var keys = $scope.streams.$getIndex();
    keys.forEach(function(key) {
      $scope.streams[key].start = moment($scope.streams[key].start+' +0900').local().format();
      
      if($scope.streams[key].end)
      {
        $scope.streams[key].end = moment($scope.streams[key].end+' +0900').local().format();
      }
      else
      {
        $scope.streams[key].end = moment('2014/04/28 12:00 +0900').local().format();
      }
    });
  },2000)
  
}
