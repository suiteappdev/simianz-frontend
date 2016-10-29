/**
 *
 * Rutas
 *
 */

angular
    .module('homer')
    .controller('rutaCtrl', rutaCtrl)

function rutaCtrl($scope, $API, sweetAlert, $modalService, $stateParams) {

    $scope.records = [];
    $scope.Records = false;

    $scope.load = function(){
       
        if($stateParams.ruta){
            $scope.ruta = $stateParams.ruta;
            
            $API.stop_route().add('route/' + $stateParams.ruta._id).get().success(function(res){

                $scope.paradas = res || []; 
            })

               $API.user().add("route/" + $scope.ruta._id).get()
               .success(function(rs){

                $scope.students = rs;

               })

        }

        $API.ruta().get().success(function(res){
            $scope.Records = true;
            $scope.records = res; 
        })

    }   
       
    $scope.agregar = function(){
       
        $modalService.show({templateUrl : 'views/modal/crear-ruta.html', size :'md', scope : $scope}, function($scope){
           
            if($scope.formRuta.$invalid){
               
                 $modalService.incompleteForm();

                return;
            }

            $API.ruta().post($scope.form).success(function(res){
                if(res){
                    $scope.load();
                    $scope.$close();
                    delete $scope.form.data;
                }
            });
        });
    }

    $scope.actualizar = function(ruta){
            $scope.formEdit = new Object();
            $scope.formEdit.data = angular.copy(ruta.data);

            $modalService.show({templateUrl : 'views/modal/editar-ruta.html', scope : $scope,
            }, function($scope){
                
                if($scope.formEditRuta.$invalid){
                    
                    $modalService.incompleteForm();

                    return;
                }

                $API.ruta(ruta._id).put($scope.formEdit).success(function(res){
                    if(res){
                        sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                        $scope.load();
                        delete $scope.form;
                        $scope.$close();                        
                    }
                });
            });
    }

    $scope.eliminar = function(ruta){
        $modalService.removeConfirm({closeOnConfirm : true}, 
        function(isConfirm){ 
           if (isConfirm) {
              $API.ruta(ruta._id).delete().success(function(res){
                if(res){
                    $scope.records.splice($scope.records.indexOf(ruta), 1);

                     sweetAlert.swal("Eliminado!", "Registro Eliminado Correctamente.", "success");

                }
            });
           }
        });
    }

    $scope.cambiausuario = function(usuario){
        $scope.usuario = usuario;
        $scope.usuarios = null;
    }
}