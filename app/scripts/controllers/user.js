/**
 *
 * Usuario
 *
 */
angular
    .module('homer')
    .controller('userCtrl', userCtrl)

function userCtrl($scope, $API, $modalService, DTOptionsBuilder, DTColumnDefBuilder, $rootScope) {
        $scope.records = [];
        $scope.Records = false;
        
        $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(20);
       
        $scope.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2),
            DTColumnDefBuilder.newColumnDef(3),
            DTColumnDefBuilder.newColumnDef(4).notSortable(),
            DTColumnDefBuilder.newColumnDef(5).notSortable()
        ];

        $scope.load = function(){
            $API.user().get().success(function(res){
                $scope.records = res || [];
                $scope.Records = true;
            });
        }

        $scope.update = function(){
            $scope.formEdit = angular.copy(this.record || {});

            $modalService.show({templateUrl : 'views/simianz/modal/update-user.html', size :'md', scope : $scope}, function($scope){
               
                if($scope.formUpdateUser.$invalid){
                    $modalService.incompleteForm();
                    return;
                }else if($scope.formUpdateUser.$valid && $scope.formEdit.password != $scope.confirmEditPassword){
                    sweetAlert.swal("Formulario Incorrecto!", "las contraseñas no coinciden", "success");
                    return;
                }

                $modalService.EditConfirm({closeOnConfirm : true}, 
                    function(isConfirm){ 
                       if (isConfirm) {
                           $API.user($scope.formEdit._id).put($scope.formEdit).success(function(res){
                                if(res){
                                    $scope.load();
                                    $scope.$close();
                                    delete $scope.formEdit.data;
                                }
                            });
                       }
                })
            });
        }

        $scope.create = function(close){
            $modalService.show({templateUrl : 'views/simianz/modal/create-user.html', size :'md', scope : $scope}, function($scope){
                if($scope.formUser.$invalid){
                    $modalService.incompleteForm();
                    return;
                }else if($scope.formUser.$valid && $scope.form.data.password != $scope.confirmPassword){
                    sweetAlert.swal("Formulario Incorrecto!", "las contraseñas no coinciden", "error");
                    return;
                }

               $scope.form.data.username = $scope.form.data.email;
               delete $scope.confirmPassword;

               $API.user().post($scope.form.data).success(function(res){
                    if(res){
                        if($scope.persist){
                            delete $scope.form.data;
                            sweetAlert.swal("Guardado!", "Registro creado correctamente.", "success");
                            $rootScope.$emit('setFocus', true);
                            $scope.load();                            
                        }else{
                            delete $scope.form;
                            $scope.$close();
                            sweetAlert.swal("Guardado!", "Registro creado correctamente.", "success");
                            $scope.load();
                        }
                    }
                });
            });
        }

        $scope.delete =function(){
            var user = this.record;
            
            $modalService.removeConfirm({closeOnConfirm : true}, 
                function(isConfirm){ 
                   if (isConfirm) {
                    $API.user(user._id).delete().success(function(res){
                        $scope.records.splice($scope.records.indexOf(user), 1);
                        sweetAlert.swal("Eliminado!", "Registro Eliminado Correctamente.", "success");
                    });
                   }
            })
        }

}