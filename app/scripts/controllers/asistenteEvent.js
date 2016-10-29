/**
 *
 * events assistance
 *
 */

angular
    .module('homer')
    .controller('asistenteEventCtrl', asistenteEventCtrl)

function asistenteEventCtrl($scope, $rootScope, $stateParams, $API, $storage, sweetAlert, $state, $modalService, DTOptionsBuilder, DTColumnDefBuilder) {
    $scope.records = [];
    $scope.Records = false;
    
    $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(20);
   
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];

    $scope.load = function(){
      if($stateParams.asistentes.length > 0){
          $scope.Records = true;
          $scope.records = $stateParams.asistentes
      }
    }

    $scope.removefromEvent = function(){
        var asistente = this.record;

        $modalService.removeConfirm({closeOnConfirm : true}, 
            function(isConfirm){ 
               if (isConfirm) {
                  $scope.records.splice($scope.records.indexOf(asistente), 1);
                  sweetAlert.swal("Hecho!", "Se ha quitado el asistente correctamente.", "success");

                /*$API.user(user._id).delete().success(function(res){
                    $scope.records.splice($scope.records.indexOf(user), 1);
                    sweetAlert.swal("Eliminado!", "Registro Eliminado Correctamente.", "success");
                });*/
               }
        })
    }
}