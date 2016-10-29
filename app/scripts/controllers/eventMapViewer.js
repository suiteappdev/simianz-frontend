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
          styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
          mapTypeId: google.maps.MapTypeId.ROADMAP,
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