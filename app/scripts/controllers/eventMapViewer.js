/**
 *
 * events
 *
 */

angular
    .module('homer')
    .controller('EventMapViewerCtrl', EventMapViewerCtrl)

   function EventMapViewerCtrl($scope, $rootScope, $API, $storage, sweetAlert, $state, $modalService, $timeout) {
      $scope.mapOptions = {
          zoom: 14,
          icon:'//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          center: new google.maps.LatLng($scope.$parent.$parent.ubicacion[0].lat, $scope.$parent.$parent.ubicacion[0].lng),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControl: true,
          disableDefaultUI: true
      };

    $scope.load = function(){
        $scope.$watch('myMap', function(o, n){
          if(n){

            //lanzamos este evento para evitar el issue del mapa en blanco.
            google.maps.event.trigger($scope.myMap,'resize');

            $scope.myMap.setCenter(new google.maps.LatLng($scope.$parent.$parent.ubicacion[0].lat, $scope.$parent.$parent.ubicacion[0].lng));
            
            if($scope.$parent.$parent.ubicacion){
                angular.forEach($scope.$parent.$parent.ubicacion, function(curlocation){
                    var location = new google.maps.LatLng(curlocation.lat, curlocation.lng);
                    
                    marker = new google.maps.Marker({
                        map:n,
                        animation: google.maps.Animation.DROP,
                        position: location
                    });  
                })
            }
          }
        });
    }
}