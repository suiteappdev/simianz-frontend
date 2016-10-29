function planViaje(){
    function ctrl($scope, $API, $rootScope){

        $scope.records = $scope.$parent.$parent.formEdit._route.filter(function(ruta){
            ruta.nombre = ruta.data.nombre;
            return true;
        });

        $scope.myConfig = {
          create: false,
          plugins: ['remove_button'],
          searchField: ['nombre'],
          maxItems : 1,
          valueField: '_id',
          labelField: 'nombre',
          placeholder: 'Seleccione la ruta',
          onChange: function(value){
            $API.journey_plan().add("route/" + value + "/student/" + $rootScope.currentStudent._id).get().success(function(res){
                if(res.length == 0){
                    $scope.initizalize(false);
                    $scope.$parent.$parent.updated = false;
                }else{
                    $scope.ngModel = res[0].data;
                    $scope.$parent.$parent.updated = res[0]._id;
                }
            });
          }
        };  

        $scope.initizalize = function(value){
            $scope.ngModel[0] = {};
            $scope.ngModel[0].lunes = {};

            $scope.ngModel[0].lunes.go = value;
            $scope.ngModel[0].lunes.back = value;

            $scope.ngModel[1] = {}
            $scope.ngModel[1].martes = {};
            $scope.ngModel[1].martes.go = value;
            $scope.ngModel[1].martes.back = value;

            $scope.ngModel[2] = {}
            $scope.ngModel[2].miercoles = {};
            $scope.ngModel[2].miercoles.go = value;
            $scope.ngModel[2].miercoles.back = value;
            
            $scope.ngModel[3] = {}
            $scope.ngModel[3].jueves = {};
            $scope.ngModel[3].jueves.go = value;
            $scope.ngModel[3].jueves.back = value;
            
            $scope.ngModel[4] = {}
            $scope.ngModel[4].viernes = {};
            $scope.ngModel[4].viernes.go = value;
            $scope.ngModel[4].viernes.back = value;
            
            $scope.ngModel[5] = {}
            $scope.ngModel[5].sabado = {};
            $scope.ngModel[5].sabado.go = value;
            $scope.ngModel[5].sabado.back = value;
            
            $scope.ngModel[6] = {}
            $scope.ngModel[6].domingo = {};
            $scope.ngModel[6].domingo.go = value;
            $scope.ngModel[6].domingo.back = value;    
        }

        if(!$scope.ngModel){
            $scope.ngModel = [];
            $scope.chkall = false;
        }

        if($scope.init){
            $scope.initizalize($scope.init);         
        }

        $scope.checkAll = function(){
            $scope.initizalize(this.chkall);
        }
    }

    return{
        restrict : 'EA',
        controller : ctrl,
        scope : {
            ngModel : '=',
            init : '='
        },
        templateUrl : 'views/interface/plan_viaje.html',
        
        link:function($scope, $element, $attr){

        }
    }
}

function rutaField(){
    function ctrl($scope, $API, $modalService){
        $API.ruta().get().success(function(res){
            $scope.rutas = res.filter(function(ruta){
                ruta.nombre = ruta.data.nombre;
                return true;
            })
        });

        $scope.myConfig = {
          create: false,
          plugins: ['remove_button'],
          searchField: ['nombre'],
          maxItems : $scope.maxItems,
          valueField: $scope.key,
          labelField: $scope.label,
          placeholder: 'Seleccione las rutas'
        };

        $scope.crearRuta  = function(){
            $modalService.show({templateUrl : 'views/modal/crear-ruta.html', size :'md', scope : $scope}, function($scope){
               
                if($scope.formRuta.$invalid){
                   
                     $modalService.incompleteForm();

                    return;
                }
                
                $API.ruta().post($scope.form).success(function(res){
                    if(res){
                        $scope.rutas.push(angular.extend(res, {nombre : res.data.nombre}));
                        $scope.$parent.ngModel = res._id;
                        $scope.$close();
                        delete $scope.form.data;
                    }
                });
            });
        }
    }

    return{
        restrict : 'EA',
        controller : ctrl,
        scope : {
            key : '@?',
            label  : '@',
            maxItems : '=',
            ngModel : '='
        },
        template : '<div class="form-group" ng-show="rutas.length == 0"><div class="col-lg-12"><div ><a ng-click="crearRuta()" class="btn btn-success btn-block"><i style="margin-right:5px;" class="glyphicon glyphicon-road"></i>Crear Ruta<a/></div></div></div><div ng-hide="rutas.length == 0"><selectize  config="myConfig" options="rutas" ng-model="ngModel"></selectize></div>',
        link:function($scope, $element, $attr){

        }
    }
}

function monitorField(){
    function ctrl($scope, $API){
        $API.user().get().success(function(res){
            $scope.records = res.filter(function(user){
                return user.type = "monitor";
            });
        });
    }

    return{
        restrict : 'EA',
        controller : ctrl,
        scope : {
            key : '@?',
            label  : '@',
            ngModel : '='
        },
        template : '<select class="form-control" style="display: block;width: 100%;height: 40px;" ng-model="ngModel" ng-options="value.{{key}} as value.data.{{label}} for value in records"></select>',
        link:function($scope, $element, $attr){

        }
    }
}

function acudienteField(){
    function ctrl($scope, $API){
        $API.user().get().success(function(res){
            $scope.records = res.filter(function(user){
                user.fullname = (user.name + ' ' +user.last_name);
                return user.type == "acudiente" 
            });
        });

        $scope.myConfig = {
          create: false,
          plugins: ['remove_button'],
          searchField: ['fullname'],
          valueField: $scope.key,
          labelField: $scope.label,
          placeholder: 'Seleccione un acudiente'
        }; 
    }

    return{
        restrict : 'EA',
        controller : ctrl,
        scope : {
            key : '@?',
            label  : '@',
            ngModel : '='
        },
        template : '<selectize config="myConfig" options="records" ng-model="ngModel"></selectize>',
        link:function($scope, $element, $attr){

        }
    }
}

function estudianteField(){
    function ctrl($scope, $API){
        $API.user().get().success(function(res){
            $scope.estudiantes = res.filter(function(user){
                return user.type == 'student'; 
            });
        });
    }

    return{
        restrict : 'EA',
        controller : ctrl,
        scope : {
            key : '@',
            label  : '@',
            ngModel : '='
        },
        template : '<select class="form-control" style="display: block;width: 100%;height: 40px;" ng-model="ngModel" ng-options="value.{{key}} as value.data.{{label}} for value in estudiantes"></select>',
        link:function($scope, $element, $attr){

        }
    }
}

function paradaField(){
    function ctrl($scope, $API){
        $API.parada().get().success(function(res){
            $scope.paradas = res.filter(function(parada){
                parada.name = (parada.data.name + " - " + parada.data.address);
                return true;
            })

            $scope.paradas.sort(function(a, b){
                return a.data.orden_parada - b.data.orden_parada;
            });
        });

        $scope.myConfig = {
          create: false,
          maxItems:1,
          searchField: ['name'],
          valueField: $scope.key,
          labelField: $scope.label,
          placeholder: 'Seleccione una parada'
        }; 
    }

    return{
        restrict : 'EA',
        controller : ctrl,
        scope : {
            key : '@',
            label  : '@',
            ngModel : '='
        },
        template : '<selectize config="myConfig" options="paradas" ng-model="ngModel"></selectize>',
        link:function($scope, $element, $attr){

        }
    }
}
function busField(){
    function ctrl($scope, $API){
        $API.bus().get().success(function(res){
            $scope.buses = res || [];
        });
    }

    return{
        restrict : 'EA',
        controller : ctrl,
        scope : {
            key : '@',
            label  : '@',
            ngModel : '='
        },
        template : '<select class="form-control" style="display: block;width: 100%;height: 40px;" ng-model="ngModel" ng-options="value.{{key}} as value.data.{{label}} for value in buses"></select>',
        link:function($scope, $element, $attr){

        }
    }
}
function timeField(){
    function ctrl($scope, $API){

    }

    return{
        restrict : 'EA',
        controller : ctrl,
        scope : {
            ngModel : '='
        },
        template : '<input type="time" class="form-control" ng-model="ngModel" placeholder="HH:mm:ss" />',
        link:function($scope, $element, $attr){

        }
    }
}
angular
    .module('homer')
    .directive('rutaField', rutaField)
    .directive('estudianteField', estudianteField)
    .directive('busField', busField)
    .directive('acudienteField', acudienteField)
    .directive('monitorField', monitorField)
    .directive('planViaje', planViaje)
    .directive('timeField', timeField)
    .directive('paradaField', paradaField);
