/**
 *
 * Estudiante
 *
 */

angular
    .module('homer')
    .controller('paradaCtrl', paradaCtrl)

function paradaCtrl($scope, $API, sweetAlert, $window, $modalService, $rootScope, $q, $timeout, $log) {
    $scope.records = [];
    $scope.Records = false;
    
	$scope.load = function(){
	    $API.parada().get().success(function(res){
	        $scope.records = res || [];
            $scope.Records = true;
	    })		
	}

    $scope.agregar = function(){
        $modalService.show({templateUrl : 'views/modal/crear-parada.html', size :'md', scope : $scope}, function($scope){
            if($scope.formParada.$invalid){
                 $modalService.incompleteForm();

                return;
            }

            $API.parada().post($scope.form).success(function(res){
                if(res){
                    $scope.load();
                    $scope.$close();
                    delete $scope.form;
                }
            });
        });
    }

    $scope.asociarRuta = function(stop){
        $modalService.show({templateUrl : 'views/modal/asociar-ruta-parada.html', size :'md', scope : $scope}, function($scope){
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

            $API.stop_route().post(angular.extend($scope.form, {stop : stop._id})).success(function(res){
                if(res){
                    $timeout(function(){
                        sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                        $scope.load();
                        $window.modal.close();
                        $scope.$close();
                    }, 3000)                    
                }
            });
        })

    }

    $scope.eliminar = function(parada){
        $modalService.removeConfirm({ closeOnConfirm : true}, 
            function(isConfirm){ 
               if (isConfirm) {
                    $API.parada(parada._id).delete().success(function(res){
                        if(res){
                            $scope.records.splice($scope.records.indexOf(parada), 1);
                            sweetAlert.swal("Eliminado!", "Registro Eliminado Correctamente.", "success");
                        }
                    });
               }
           })
    }

    $scope.actualizar = function(parada){
        $scope.formEdit = new Object();
        $scope.formEdit = angular.copy(parada);
        $scope.formEdit._route = $scope.formEdit._route ? $scope.formEdit._route._id : null;

        $modalService.show({templateUrl : 'views/modal/editar-parada.html', scope : $scope,
        }, function($scope){

           if($scope.formParada.$invalid){
                 $modalService.incompleteForm();

                return;
            }

            $API.parada(parada._id).put($scope.formEdit).success(function(res){
                if(res){
                    sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                    $scope.load();
                    delete $scope.formEdit.data;
                    $scope.$close();                    
                }

            });
        });
    }
}