

/**
 *
 * Usuario
 *
 */

angular
    .module('homer')
    .controller('colegioCtrl', colegioCtrl)

function colegioCtrl($scope) {

        
          $scope.usuarios =[
            {
                    "nombre": "La salle",
                    "apellido": "Urbanización Seguros Tequendama, Cartagena, Bolívar",
                    "nombre_usuario": "Cartagena",
                    "codigo":"Bolivar",
                    "grado":"Colombia"           
            },
            {
                    "nombre": "britanico ",
                    "apellido": "Cl. 7 #2-71",
                    "nombre_usuario": "Cartagena",
                    "codigo":"Bolivar",
                    "grado":"Colombia"                
            },

        ]
        
        $scope.agregar = function(){
            $scope.usuarios.push({nombre: $scope.nombre, apellido: $scope.apellido, nombre_usuario: $scope.nombre_usuario, codigo: $scope.codigo, grado: $scope.grado });
            $('#modal_user').modal('hide');
            $scope.nombre='';
            $scope.apellido='';
            $scope.nombre_usuario='';
            $scope.codigo='';
            $scope.grado='';
        }

        $scope.eliminar =function(text){
        
               for (i=0; i < $scope.usuarios.length; i++){
                    if ($scope.usuarios[i].nombre_usuario === text){
                            $scope.usuarios.splice(i,1);
                    }  
               }
        }
       

}