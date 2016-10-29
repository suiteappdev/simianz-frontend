/**
 *
 * Rutas
 *
 */

angular
    .module('homer')
    .controller('logsCtrl', logsCtrl)

function logsCtrl($scope, $API, sweetAlert, $modalService, $stateParams, $timeout) {

    $scope.records = [];
    $scope.Records = false;

    $scope.load = function(){
        if($stateParams.log){
            $scope.log = $stateParams.log;
        }

        $API
        .log()
        .get()
        .success(function(rs){
              $scope.records = rs;
              $scope.Records = true;

        })
    }   
}