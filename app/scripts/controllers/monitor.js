/**
 *
 * Acudiente
 *
 */

angular
    .module('homer')
    .controller('monitorCtrl', monitorCtrl)

function monitorCtrl($scope, $API, $state, $modalService, $window, sweetAlert, $rootScope, $timeout, $q) {
        $scope.records = [];
        $scope.Records = false;

        $scope.load  = function(){
            $API.user().get().success(function(res){
                $scope.Records = true;
                $scope.records = res.filter(function(user){

                    if(user.type == 'monitor')
                    console.log(user);
                    return user.type == 'monitor'; 
                }) || [];
            });            
        }

        $scope.agregar = function(){
            $modalService.show({templateUrl : 'views/modal/crear-monitor.html', size :'md', scope : $scope}, function($scope){
                if($scope.formMonitor.$invalid){
                    $modalService.incompleteForm();

                    return;
                }

                if($scope.form.data.password != $scope.repetir_password){
                     sweetAlert.swal({
                            title: "FORMULARIO INCOMPLETO",
                            text: "Las Contraseñas no coinciden",
                            type: "error"
                        })
                     return;
                }


               $API.user().post(angular.extend($scope.form.data , { type : 'monitor', username : $scope.form.data.email})).success(function(res){
                    if(res){
                        $scope.load();
                        $scope.$close();
                        delete $scope.form.data;
                    }
                });
            });
        }

        $scope.asociarRuta = function(){
            $modalService.show({templateUrl : 'views/modal/asociar-ruta.html', size :'md', scope : $scope}, function($scope){
                if($scope.formAsociarRuta.$invalid){
                    
                    $modalService.incompleteForm();

                    return;
                };

                $modalService.showLoading();

                var _request = [];

                angular.forEach($rootScope.items, function(item, key){
                    _request.push($API.user(item._id).put($scope.form));
                });

                $q.all(_request).then(function(res){
                    if(res){
                        $timeout(function(){
                            $scope.showLoader = false;
                            sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                            $scope.load();
                            $window.modal.close();
                            $scope.$close();
                            $rootScope.clearSelection();

                        }, 3000)
                    }
                }, function(){

                })
            })
        }

        $scope.actualizar = function(monitor){
            $scope.formEdit = new Object();
            $scope.formEdit = angular.copy(monitor);
            $scope.formEdit._route = $scope.formEdit._route.length > 0 ? $scope.formEdit._route[0]._id : null;

            $modalService.show({templateUrl : 'views/modal/editar-monitor.html', scope : $scope,
            }, function($scope){
                if($scope.formEditMonitor.$invalid){
                     $modalService.incompleteForm();

                    return;
                }

                $API.user(monitor._id).put($scope.formEdit).success(function(res){
                    sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                    $scope.load();
                    $scope.$close();
                });
            });
        }

        $scope.eliminar =function(monitor){
            $modalService.removeConfirm({closeOnConfirm : true}, 
                function(isConfirm){ 
                   if (isConfirm) {
                    $API.user(monitor._id).delete().success(function(res){
                        $scope.records.splice($scope.records.indexOf(monitor), 1);
                        sweetAlert.swal("Eliminado!", "Registro Eliminado Correctamente.", "success");
                    });
                   }
               })
        }
}