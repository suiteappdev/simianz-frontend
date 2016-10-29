/**
 *
 * Usuario
 *
 */

angular
    .module('homer')
    .controller('asistenciaCtrl', asistenciaCtrl)

function asistenciaCtrl($scope) {
            $scope.rutas =[
                    {
                            "nombre": "Ruta 1",
                            "origen": "Plazuela",
                            "destino": "centro",
                            "trayectos": [
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
                                            "nombre_p":"Puente Roman",
                                            "numero_p":"3",
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
                            "trayectos": [
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
                            "trayectos": [
                                {

                                }
                            ]
                            
                    }
                ]
            $scope.trayectos =[
            {
                    "nombre": "Bocagrande - Manga",
                    "origen": "Mañana", 
                    "paradas":  [
                               {
                                        "nombre": "Centro",
                                        "numero": 1,
                                        "hora":"7:15 am"           
                                },
                                {
                                        "nombre": "Getsemani",
                                        "numero": 2,
                                        "hora":"7:30 am"           
                                },
                                {
                                        "nombre": "Puente roman",
                                        "numero": 2,
                                        "hora":"7:30 am"           
                                },
                                {
                                        "nombre": "Manga",
                                        "numero": 3,
                                        "hora":"7:45 am"         
                                }
                        ]
                   
                    
            },
            {
                    "nombre": "Bocagrande - Crespo",
                    "origen": "Mañana",
                    "paradas":  [
                               {
                                        "nombre": "Centro",
                                        "numero": 1,
                                        "hora":"7:15 am"           
                                },
                                {
                                        "nombre": "Marbella",
                                        "numero": 2,
                                        "hora":"7:30 am"           
                                },
                                {
                                        "nombre": "Crespo",
                                        "numero": 3,
                                        "hora":"7:45 am"         
                                }
                        ]
                    
                    
            },
            {
                    "nombre": "Manga - Bocagrande",
                    "origen": "Tarde",
                    "paradas":  [
                               {
                                        "nombre": "Manga",
                                        "numero": 1,
                                        "hora":"7:15 am"           
                                },
                                {
                                        "nombre": "Centro",
                                        "numero": 2,
                                        "hora":"7:30 am"           
                                },
                                {
                                        "nombre": "Getsemani",
                                        "numero": 3,
                                        "hora":"7:30 am"           
                                },
                                {
                                        "nombre": "Bocagrande",
                                        "numero": 4,
                                        "hora":"7:45 am"         
                                }
                        ]
                   
                    
            }
        ]
         $scope.usuarios =[
            {
                    "nombre": "James",
                    "apellido": "Meza",
                    "nombre_usuario": "james007",
                    "codigo":"001",
                    "grado":"septimo",
                    "parada":"Bocagrande"           
            },
            {
                    "nombre": "Carolina",
                    "apellido": "Paez",
                    "nombre_usuario": "Caro",
                    "codigo":"015",
                    "grado":"noveno",
                    "parada":"Centro"           
            },
            {
                    "nombre": "Luisa",
                    "apellido": "Zarate",
                    "nombre_usuario": "luZ",
                    "codigo":"026",
                    "grado":"octavo",
                    "parada":"Getsemani"           
            },
            {
                    "nombre": "Gabriel",
                    "apellido": "Navarro",
                    "nombre_usuario": "Gabo",
                    "codigo":"004",
                    "grado":"cuarto",
                    "parada":"Manga"           
            },
            {
                    "nombre": "Samir",
                    "apellido": "Galvis",
                    "nombre_usuario": "Samix",
                    "codigo":"017",
                    "grado":"Decimo",
                    "parada":"Pie de la popa"           
            },
            {
                    "nombre": "Nicol",
                    "apellido": "Kelsu",
                    "nombre_usuario": "nicolk",
                    "codigo":"022",
                    "grado":"octavo",
                    "parada":"Manga"           
            },
            {
                    "nombre": "James",
                    "apellido": "Meza",
                    "nombre_usuario": "james007",
                    "codigo":"001",
                    "grado":"septimo",
                    "parada":"Getsemani"           
            },
            {
                    "nombre": "Carolina",
                    "apellido": "Paez",
                    "nombre_usuario": "Caro",
                    "codigo":"015",
                    "grado":"noveno",
                    "parada":"Pie de la popa"           
            },
            {
                    "nombre": "Luisa",
                    "apellido": "Zarate",
                    "nombre_usuario": "luZ",
                    "codigo":"026",
                    "grado":"octavo",
                    "parada":"Bocagrande"           
            }
        ]
        
        $scope.paradas=[];
        $scope.asistentes=$scope.usuarios;
        $scope.trayecto =[];

        $scope.buscarRuta =  function(nombre){
            
            for (i=0; i < $scope.rutas.length; i++)
                    if ($scope.rutas[i].nombre === nombre)
                        return i
        }
        $scope.seleccionarRuta = function() {

                $scope.trayecto =[];
                var i = $scope.buscarRuta($scope.ruta);
                $scope.trayecto = $scope.rutas[i].trayectos;
        }
         $scope.buscarTrayecto =  function(pos_ruta, nombre){
           
            var ruta = $scope.rutas[pos_ruta];
            for (i=0; i < ruta.trayectos.length; i++)
                    if (ruta.trayectos[i].nombre === nombre)
                        return ruta.trayectos[i];
        }
        $scope.seleccionarTrayecto = function(){
                console.log("Entro a seleccionar trayecto");
                var pos_ruta = $scope.buscarRuta($scope.ruta);
                var trayecto = $scope.buscarTrayecto(pos_ruta, $scope.trayecto_asociado);
                $scope.paradas =trayecto.paradas;
                
                

                console.log($scope.paradas)
          
        }
        $scope.paradaAsistencia = function(text){
            $scope.asistentes=[];
            console.log(text);
            for (i=0; i < $scope.usuarios.length; i++)

                if ($scope.usuarios[i].parada === text)
                    $scope.asistentes.push($scope.usuarios[i]);
        }

        $scope.getAll = function(){
            $scope.asistentes=$scope.usuarios;
        }
         
        
        $scope.buscar_ruta = function(text){
             
               for (i=0; i < $scope.rutas.length; i++)
                    if ($scope.rutas[i].nombre === text)
                        return $scope.rutas[i].estudiantes;       
        }

        
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