/**
 *
 * Usuario
 *
 */

angular
    .module('homer')
    .controller('conductorCtrl', conductorCtrl)

function conductorCtrl($scope) {

        $scope.monitor =[];

        $scope.monitores =[
            {
                "nombres":"Julian",
                "apellidos":" Garcia Peñalosa",
                "n_documento":"1.254.123.365",
                "t_documento":"cedula",
                "f_nacimiento":"25/05/90",
                "imagen":"",
                "direccion":"Manga 2da avenida",
                "barrio":"Manga",
                "ciudad":"Cartagena",
                "pais":"Colombia",
                "t_movil":"3004789632",
                "t_fijo":"",
                "email":"julain@gmail.com",
                "nacionalidad":"Colombia",
                "c_nacimiento":"Bogotá",
                "c_licencia":"1145789",
                "categoria":"1A",
                "arl":"sura",
                "f_expedicion":"21/01/14",
                "f_expiracion":"21/01/20",
                "eps":"sura"
            },
            {
                "nombres":"Margarita",
                "apellidos":" Martinez Lozano",
                "n_documento":"1.123.485.285",
                "t_documento":"cedula",
                "f_nacimiento":"14/04/92",
                "imagen":"",
                "direccion":"Pie de la popa 3da avenida n#35-20",
                "barrio":"Pie de la popa",
                "ciudad":"Cartagena",
                "pais":"Colombia",
                "t_movil":"3112587895",
                "t_fijo":"66025478",
                "email":"margui@gmail.com",
                "nacionalidad":"Colombia",
                "c_nacimiento":"Barranquilla",
                "c_licencia":"54789632",
                "categoria":"2A",
                "arl":"Cafesalud",
                "f_expedicion":"28/05/10",
                "f_expiracion":"15/01/24",
                "eps":"Concafan"
            }
        ]




        
        $scope.agregar = function(){
            
            $scope.monitores.push({
                    nombres: $scope.nombres,
                    apellidos: $scope.apellidos,
                    n_documento: $scope.n_documento,
                    t_documento: $scope.t_documento,
                    cedula: $scope.cedula,
                    f_nacimiento: $scope.f_nacimiento,
                    imagen: $scope.imagen,
                    direccion: $scope.direccion,
                    barrio: $scope.barrio,
                    ciudad: $scope.ciudad,
                    pais: $scope.pais,
                    t_movil: $scope.t_movil,
                    t_fijo: $scope.t_fijo,
                    email: $scope.email,
                    nacionalidad: $scope.nacionalidad,
                    c_nacimiento: $scope.c_nacimiento,
                    c_licencia: $scope.c_licencia,
                    categoria: $scope.categoria,
                    arl: $scope.arl,
                    f_expedicion: $scope.f_expedicion,
                    f_expiracion: $scope.f_expiracion,
                    eps: $scope.eps
            });
            $('#modal_user').modal('hide');
            $scope.nombres='';
            $scope.apellidos='';
            $scope.n_documento='';
            $scope.t_documento='';
            $scope.cedula='';
            $scope.f_nacimiento='';
            $scope.imagen='';
            $scope.direccion='';
            $scope.barrio='';
            $scope.ciudad='';
            $scope.pais='';
            $scope.t_movil='';
            $scope.t_fijo='';
            $scope.email='';
            $scope.nacionalidad='';
            $scope.c_nacimiento='';
            $scope.c_licencia='';
            $scope.categoria='';
            $scope.arl='';
            $scope.f_expedicion='';
            $scope.f_expiracion='';
            $scope.eps='';
        }
        $scope.verParada =function(text){
            $scope.monitor = [];
            for (i=0; i < $scope.monitores.length; i++){
            
                    if ($scope.monitores[i].n_documento === text){
                            console.log($scope.monitores[i].n_documento+" ="+text);
                            $scope.monitor.push($scope.monitores[i]);
                            console.log($scope.monitor[0]);
                    }  
               }
        }
        $scope.eliminar =function(text){
        
               for (i=0; i < $scope.monitores.length; i++){
                    if ($scope.monitores[i].n_documento === text){
                            $scope.monitores.splice(i,1);
                    }  
               }
        }
        $scope.cambiausuario = function(usuario){

            $scope.usuario = usuario;
            $scope.usuarios = null;
            
        }

}