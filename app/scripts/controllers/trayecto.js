/**
 *
 * Usuario
 *
 */

angular
    .module('homer')
    .controller('trayectoCtrl', trayectoCtrl)

function trayectoCtrl($scope) {

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



        $scope.paradas =[];
        $scope.rutas =[
            {
                    "nombre": "Ruta 1",
                    "origen": "Plazuela",
                    "destino": "centro",
                    "trayecto": [
                        {
                                "nombre": "Bocagrande - Manga",
                                "origen": "Mañana", 
                                "paradas":  [
                               { 
                                    "nombre_p":"Bocagrande",
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
                                    "nombre_p":"Manga",
                                    "numero_p":"3",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""     
                                }
                        ]
                        }
                    ]
                    
            },
            {
                    "nombre": "Ruta 2",
                    "origen": "Mamonal",
                    "destino": "bocagrande",
                    "trayecto": [
                        {
                                "nombre": "Bocagrande - Crespo",
                                "origen": "Mañana",
                                "paradas":  [
                                { 
                                    "nombre_p":"Centro",
                                    "numero_p":"1",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""
                                },
                                {
                                    "nombre_p":"Marbella",
                                    "numero_p":"2",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""         
                                },
                                {
                                    "nombre_p":"Crespo",
                                    "numero_p":"3",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""     
                                }
                                ]
                    
                    
                        },

                    ]
                    
            },
            {
                    "nombre": "Ruta 3",
                    "origen": "Crespo",
                    "destino": "bocagrande",
                    "trayecto": [
                        {

                        }
                    ]
                    
            }
        ]
        $scope.trayecto =[
            {
                    "nombre": "Bocagrande - Manga",
                    "origen": "Mañana", 
                    "paradas":  [
                               { 
                                    "nombre_p":"Bocagrande",
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
                                    "nombre_p":"Manga",
                                    "numero_p":"3",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""     
                                }
                        ]
                   
                    
            },
            {
                    "nombre": "Bocagrande - Crespo",
                    "origen": "Mañana",
                    "paradas":  [
                                { 
                                    "nombre_p":"Centro",
                                    "numero_p":"1",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""
                                },
                                {
                                    "nombre_p":"Marbella",
                                    "numero_p":"2",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""         
                                },
                                {
                                    "nombre_p":"Crespo",
                                    "numero_p":"3",
                                    "latitud":"",
                                    "longitud":"",
                                    "direccion_p":"",
                                    "descripcion_p":""     
                                }
                        ]
                    
                    
            },
            
            {
                    "nombre": "Manga - Bocagrande",
                    "origen": "Tarde",
                    "paradas":  [
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
                        ]
                   
                    
            }
        ]
       
        $scope.agregarParada =function(trayecto){
           // var i= $scope.buscarTrayecto(trayecto);
            //$scope.trayectotrayecto[i].paradas.push
            $scope.data.push
            ({
                nombre_p: $scope.nombre_p,
                numero_p: $scope.numero_p,
                latitud: $scope.latitud,
                longitud: $scope.longitud,
                direccion_p: $scope.direccion_p,
                descripcion_p: $scope.descripcion_p
                
            });
            $('#agregar_parada').modal('hide');
            $scope.nombre_p= '';
            $scope.numero_p= '';
            $scope.latitud= '';
            $scope.longitud= '';
            $scope.direccion_='';
            $scope.descripcion_p= '';

        }
        $scope.buscarTrayecto = function(trayecto){
              for (i=0; i < $scope.trayectotrayecto.length; i++)
                    if ($scope.trayectotrayecto[i].nombre === trayecto)
                        return i;    
        }
        $scope.eliminarParada =function(parada, nombre_trayecto){
              var i= $scope.buscarTrayecto(nombre_trayecto);     
              
              for (y=0; y < $scope.trayectotrayecto[i].paradas.length; y++)
                if($scope.trayectotrayecto[i].paradas[y] === parada)
                    $scope.trayectotrayecto[i].paradas.splice(y,1);
        

        }
        $scope.agregar = function(){
            $scope.trayecto.push({nombre: $scope.nombre, origen: $scope.origen, destino: $scope.destino });
            $('#modal_user').modal('hide');
            $scope.nombre='';
            $scope.origen='';
            $scope.destino='';
        }

        $scope.verParada =function(text){
            
            for (i=0; i < $scope.trayecto.length; i++)
                    if ($scope.trayecto[i].nombre === text)
                            $scope.data = $scope.trayecto[i].paradas;
        }
        $scope.eliminar =function(text){
        
               for (i=0; i < $scope.trayecto.length; i++){
                    if ($scope.trayecto[i].nombre === text){
                            $scope.trayecto.splice(i,1);
                    }  
               }
        }
        $scope.cambiausuario = function(usuario){

            $scope.usuario = usuario;
            $scope.usuarios = null;
            
        }

}