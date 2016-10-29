/**
 *
 * Acudiente
 *
 */

angular
    .module('homer')
    .controller('viajesCtrl', viajesCtrl)

function viajesCtrl($scope, $API, $state, $stateParams, $constants, $modalService, $window, sweetAlert, $rootScope, $timeout, $q) {
        $scope.records = [];
        $scope.Records = false;

        $scope.load  = function(){
            if($stateParams.viaje){
                $scope.viaje = $stateParams.viaje;
                
                if($scope.viaje.data.image){
                    $scope.image = angular.extend(angular.fromJson($scope.viaje.data.image.response).file, { base : $constants.base_uploads});
                }

                $API.journey().add("list/" + $stateParams.viaje._id).get().success(function(res){
                    $scope.all = res.all;
                    $scope.not_presented = res._no_presented;
                    
                    for(x in $scope.not_presented)
                        for(j in $scope.all)
                         if($scope.all[j]._id === $scope.not_presented[x]._id){
                           $scope.all[j].not_presented = true;
            
                            }
                        

                    
                });
            }

            $API.journey().get().success(function(res){
                $scope.Records = true;
                $scope.records = res || [];
            });            
        }

        $scope.showImage = function(){
            $modalService.show({templateUrl : 'views/modal/mostrar-imagen.html', size :'md', scope : $scope}, function($scope){
                $scope.$close();
            })
        }

        $scope.attended = function(student){
            return $scope.not_presented.indexOf(student) > -1 ? true : false;
        }

        $scope.verRutas = function(data){
            $scope.viewRouteData = data;

            $modalService.show({templateUrl : 'views/modal/ver-rutas.html', size :'md', scope : $scope}, function($scope){
                $scope.$close();
            })
        }

        $scope.verAcudientes = function(data){
            $scope.viewResponsibleData = data;

            $modalService.show({templateUrl : 'views/modal/ver-acudientes.html', size :'lg', scope : $scope}, function($scope){

                $scope.$close();
            })
        }

        $scope.agregar = function(){

        }

        $scope.actualizar = function(monitor){

        }

        $scope.eliminar =function(monitor){

        }
}