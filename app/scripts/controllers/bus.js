/**
 *
 * Estudiante
 *
 */

angular
    .module('homer')
    .controller('busCtrl', busCtrl)

function busCtrl($scope, $API, sweetAlert, $window, $modalService, $rootScope, $timeout, $q) {
    $scope.Records = false;

    $scope.records = [];
    $scope.load = function(){
        $API.bus().get().success(function(res){
            $scope.Records =  true;
            $scope.records = res || [];
        })        
    }
    
    $scope.agregar = function(){
        $modalService.show({templateUrl : 'views/modal/crear-bus.html', size :'md', scope : $scope}, function($scope){
            if($scope.formBus.$invalid){
                 $modalService.incompleteForm();

                return;
            }

            $API.bus().post($scope.form).success(function(res){
                if(res){
                    $scope.load();
                    //$scope.buses.push(res);
                    $scope.$close();
                    delete $scope.form.data;
                }
            });
        });
    }

    $scope.asociarRuta = function(){
        $modalService.show({templateUrl : 'views/modal/asociar-ruta.html', size :'md', scope : $scope}, function($scope){
            if($scope.formAsociarRuta.$invalid){
                $modalService.confirm({
                    confirmButtonText: "OK",
                    showCancelButton: false,
                    title: "Formulario no completado",
                    text: "Los campos con (*) son obligatorios",
                    type: "error"
                })

                return;
            };

            $modalService.showLoading();
            var _request = [];

            angular.forEach($rootScope.items, function(item, key){
                _request.push($API.bus(item._id).put($scope.form));
            });

            $q.all(_request).then(function(res){
                if(res){
                    $timeout(function(){
                        sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                        $window.modal.close();
                        $scope.load();
                        $scope.$close();
                        $rootScope.clearSelection();
                    }, 3000)
                }
            }, function(){

            })
        })

    }

    $scope.eliminar = function(bus){
        $modalService.removeConfirm({closeOnConfirm : true}, 
            function(isConfirm){ 
               if (isConfirm) {
                    $API.bus(bus._id).delete().success(function(res){
                        if(res){
                            $scope.records.splice($scope.records.indexOf(bus), 1);
                            sweetAlert.swal("Eliminado!", "Registro Eliminado Correctamente.", "success");
                        }
                    });
               }
           })
    }

    $scope.actualizar = function(bus){
        $scope.formEdit = new Object();
        $scope.formEdit = angular.copy(bus);

        $modalService.show({templateUrl : 'views/modal/editar-bus.html', scope : $scope,
        }, function($scope){

           if($scope.formBus.$invalid){
                 $modalService.incompleteForm();

                return;
            }

            $scope.formEdit._route = $scope.formEdit._route._id;
            $API.bus(bus._id).put($scope.formEdit).success(function(res){
                $scope.load();
                sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                delete $scope.formEdit.data;
                $scope.$close();
            });
        });
    }

    $scope.cambiausuario = function(usuario){
        $scope.usuario = usuario;
        $scope.usuarios = null;
    }

}