/**
 *
 * Acudiente
 *
 */

angular
    .module('homer')
    .controller('acudienteCtrl', acudienteCtrl)

function acudienteCtrl($scope, $API, $modalService, sweetAlert, $stateParams) {
        $scope.records = [];
        $scope.Records = false;
        
        $scope.load  = function(){

            if($stateParams.acudiente){
                $scope.acudiente = $stateParams.acudiente;
            }

            $API.user().get().success(function(res){
                $scope.Records = true;
                $scope.records = res.filter(function(user){
                    return user.type == 'acudiente'; 
                }) || [];
            });            
        }

        $scope.agregar = function(){
            $modalService.show({templateUrl : 'views/modal/crear-acudiente.html', size :'md', scope : $scope}, function($scope){
                if($scope.formAcudiente.$invalid){
                    $modalService.incompleteForm();
                    return;
                }


               $API.user().post(angular.extend($scope.form.data , { type : 'acudiente', username : $scope.form.data.email, password : '123456'})).success(function(res){
                    if(res){
                        $scope.load()
                        $scope.$close();
                        delete $scope.form.data;
                    }
                });
            });
        }

        $scope.actualizar = function(acudiente){
            $scope.formEdit = new Object();
            $scope.formEdit = angular.copy(acudiente);

            $modalService.show({templateUrl : 'views/modal/editar-acudiente.html', scope : $scope,
            }, function($scope){
                if($scope.formEditAcudiente.$invalid){
                     $modalService.incompleteForm();

                    return;
                }

                $API.user(acudiente._id).put($scope.formEdit).success(function(res){
                    $scope.load();
                    delete $scope.formEdit.data;
                    $scope.$close();
                });
            });
        }

        $scope.eliminar =function(acudiente){
            $modalService.removeConfirm({closeOnConfirm : true}, 
                function(isConfirm){ 
                   if (isConfirm) {
                    $API.user(acudiente._id).delete().success(function(res){
                        $scope.records.splice($scope.records.indexOf(acudiente), 1);
                        sweetAlert.swal("Eliminado!", "Registro Eliminado Correctamente.", "success");
                    });
                   }
               })
        }
}