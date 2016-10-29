/**
 *
 * nestableCtrl
 *
 */

angular
    .module('homer')
    .controller('nestableCtrl', nestableCtrl)

function nestableCtrl($scope) {

    // Handle actions
    $scope.remove = function(scope) {
        scope.remove();
    };
    
    $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0,0, a);
    };
    $scope.collapseAll = function() {
        $scope.$broadcast('collapseAll');
    };
    $scope.expandAll = function() {
        $scope.$broadcast('expandAll');
    };

    // Nestable list example data

   $scope.data=  [
                     { 
                                    "nombre_p":"Manga",
                                    "numero_p":"1",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""
                                },
                                {
                                    "nombre_p":"Centro",
                                    "numero_p":"2",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""         
                                },
                                {
                                    "nombre_p":"Getsemani",
                                    "numero_p":"3",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""     
                                },
                                {
                                    "nombre_p":"Bocagrande",
                                    "numero_p":"3",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""     
                                }
                        ];
}

  