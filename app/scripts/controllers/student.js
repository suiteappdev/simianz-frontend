/**
 *
 * Estudiante
 *
 */

angular
    .module('homer')
    .controller('studentCtrl', studentCtrl)

function studentCtrl($scope, $API, $window, $modalService, sweetAlert, $rootScope, $timeout, $q, DTOptionsBuilder) {
        $scope.records = [];
        $scope.Records = false;

        var vm = this;

        $scope.load  = function(){
            
            $scope.grados = [];
            $scope.grados.push({ "Filtrar por grado" : { label : "Filtrar por grado" , value : null } });
            var grades = {};

            $API.user().get().success(function(res){

                console.log(res);
                $scope.Records = true;
                
                $scope.records = res.filter(function(user){
                    
                    if(user.type == 'student'){
                      

                      if(!grades[user.metadata.grado]){
                           
                           grades[user.metadata.grado] = user.metadata.grado;
                           $scope.grados.push({ label :  'Grado ' + user.metadata.grado , value : user.metadata.grado});

                      }
                        
                         return true;
                    
                    }

                });



                //$scope.grados = new Array($scope.grados);
                 console.log($scope.grados);

              // $scope.filter = {};
               //$scope.filter.grade = $scope.grados[0].value;

            });
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

        $scope.asociarRuta = function(){
            $modalService.show({templateUrl : 'views/modal/asociar-ruta-estudiante.html', size :'md', scope : $scope}, function($scope){
                if($scope.formAsociarRuta.$invalid){
                    
                    $modalService.incompleteForm();

                    return;
                };

                var _request = [];

                $modalService.showLoading();

                angular.forEach($rootScope.items, function(item, key){
                    _request.push($API.user(item._id).put({_route : $scope.form._route}))
                });

                $q.all(_request).then(function(res){
                    if(res){
                        $timeout(function(){
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

        $scope.asociarAcudiente = function(){
            $modalService.show(
                {templateUrl : 'views/modal/asociar-acudiente.html', size :'md', scope : $scope}, 
                function($scope){
                
                 if($scope.formAsociarAcudiente.$invalid){
               
                    $modalService.incompleteForm();

                    return;
                };

                $modalService.showLoading();
                var _request = [];

                angular.forEach($rootScope.items, function(item, key){
                    _request.push($API.user(item._id).put({_responsible : $scope.form.data._responsible}))
                });

                $q.all(_request).then(function(res){
                    if(res){
                        $timeout(function(){
                            sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                            $scope.load();
                            $window.modal.close();
                            $rootScope.clearSelection();
                            $scope.$close();
                        }, 3000)
                    }
                }, function(){

                })
            })

        }

        $scope.asociarParada = function(){
            $modalService.show(
              {templateUrl : 'views/modal/asociar-parada.html', size :'md', scope : $scope}, 
              function($scope){
             
                if($scope.formAsociarParada.$invalid){
                    $modalService.incompleteForm();

                    return;
                };

                $modalService.showLoading();
                
                var _request = [];

                angular.forEach($rootScope.items, function(item, key){
                    _request.push($API.user(item._id).put({_stop : $scope.form.data._stop}))
                });

                $q.all(_request).then(function(res){
                    if(res){
                        $timeout(function(){
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

        $scope.editarPlanViaje = function(plan){

            var student = this.record;

            $rootScope.currentStudent = student;

            console.log(student, "STUDENT")
          
            $scope.formEdit = plan;

           $modalService.show({templateUrl : 'views/modal/editar-plan-de-viaje.html', size :'lg', scope : $scope}, function($scope){
                if($scope.formPlanViaje.$invalid){
                    $modalService.incompleteForm();

                    return;
                }

                if($scope.updated){
                    $API.journey_plan($scope.updated).put({route : $scope.ruta, student : student._id , data : $scope.journey_plan}).success(function(res){
                        if(res){
                            sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                        }
                    });      
                }else{
                    $API.journey_plan().post({route : $scope.ruta, student : student._id , data : $scope.journey_plan}).success(function(res){
                        if(res){
                            sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                        }
                    });                    
                }

                $scope.load();
                $scope.$close();
            }); 
        }

        $scope.agregar = function(){
            $modalService.show({templateUrl : 'views/simianz/modal/crear-estudiante.html', size :'md', scope : $scope}, function($scope){
                if($scope.formEstudiante.$invalid){
                    $modalService.incompleteForm();

                    return;
                }


               $API.user().post(angular.extend($scope.form.data , { type : 'student', password :'123456', username : $scope.form.data.metadata.codigo + $scope.form.data.metadata.grado +"@dschool.com"})).success(function(res){
                    if(res){
                        $scope.load();
                        //$scope.estudiantes.push(res);
                        $scope.$close();
                        delete $scope.form.data;
                    }
                });
            });
        }

        $scope.actualizar = function(estudiante){
            $scope.formEdit = new Object();
            $scope.formEdit.data = angular.copy(estudiante);

            $scope.formEdit.data._route = $scope.formEdit.data._route ?  $scope.formEdit.data._route.map(function(item){ return item._id}) : null;
            $scope.formEdit.data._responsible = $scope.formEdit.data._responsible ?  $scope.formEdit.data._responsible.map(function(item){ return item._id}) : null;
            $scope.formEdit.data._stop = $scope.formEdit.data._stop ? $scope.formEdit.data._stop._id : null;

            $modalService.show({templateUrl : 'views/modal/editar-estudiante.html', scope : $scope,
            }, function($scope){
                if($scope.formEstudiante.$invalid){
                    $modalService.incompleteForm();

                    return;
                }

                $API.user(estudiante._id).put($scope.formEdit.data).success(function(res){
                    if(res){
                        sweetAlert.swal("Registro Modificado", "Registro modificado correctamente.", "success");
                        $scope.load();
                        delete $scope.formEdit;
                        $scope.$close();                        
                    }

                });
            });
        }

        $scope.eliminar =function(estudiante){
            $modalService.removeConfirm({closeOnConfirm : true}, 
                function(isConfirm){ 
                   if (isConfirm) {
                    $API.user(estudiante._id).delete().success(function(res){
                        $scope.records.splice($scope.records.indexOf(estudiante), 1);
                        sweetAlert.swal("Eliminado!", "Registro Eliminado Correctamente.", "success");
                    });
                   }
               })
        }
}