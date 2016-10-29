/**
 *
 * ruta - estudiante
 *
 */

angular
    .module('homer')
    .controller('rutaEstudianteCtrl', rutaEstudianteCtrl)

function rutaEstudianteCtrl($scope) {

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

                $scope.usuarios =[
            {
                    "nombre": "James",
                    "apellido": "Meza",
                    "nombre_usuario": "james007",
                    "codigo":"001",
                    "grado":"septimo",
                    "parada":"Bocagrande",
                    "direccion":"Manga 2da avenida #21-3",
                    "edificio":"Palmetto",
                    "barrio":"Manga",
                    "grupo":""              
            },
            {
                    "nombre": "Carolina",
                    "apellido": "Paez",
                    "nombre_usuario": "Caro",
                    "codigo":"015",
                    "grado":"noveno",
                    "parada":"Centro",
                    "direccion":"Centro, San Diego, Calle del Curato #38-72",
                    "edificio":"Colpatria",
                    "barrio":"Centro",
                    "grupo":""              
            },
            {
                    "nombre": "Luisa",
                    "apellido": "Zarate",
                    "nombre_usuario": "luZ",
                    "codigo":"026",
                    "grado":"octavo",
                    "parada":"Getsemani",
                    "direccion":"Calle 1 A No. 3 - 159. Av Almirante Brión, El Getsemani ",
                    "edificio":"Nuevo conquistador",
                    "barrio":"Getsemani",
                    "grupo":""              
            },
            {
                    "nombre": "Gabriel",
                    "apellido": "Navarro",
                    "nombre_usuario": "Gabo",
                    "codigo":"004",
                    "grado":"cuarto",
                    "parada":"Manga, Dian",
                    "direccion":"Bella vista",
                    "edificio":"120, Tv. 17 #26",
                    "barrio":"Manga",
                    "grupo":""              
            },
            {
                    "nombre": "Samir",
                    "apellido": "Galvis",
                    "nombre_usuario": "Samix",
                    "codigo":"017",
                    "grado":"Decimo",
                    "parada":"Pie de la popa",
                    "direccion":"156, Carrera 20 24ABIS #24",
                    "edificio":"Luna del mar",
                    "barrio":"Pie de la popa",
                    "grupo":""              
            },
            {
                    "nombre": "Nicol",
                    "apellido": "Kelsu",
                    "nombre_usuario": "nicolk",
                    "codigo":"022",
                    "grado":"octavo",
                    "parada":"Manga, Dian",
                    "direccion":"61, Cl. 10 #",
                    "edificio":"Porto fino",
                    "barrio":"Manga",
                    "grupo":""              
            },
            {
                    "nombre": "James",
                    "apellido": "Meza",
                    "nombre_usuario": "james007",
                    "codigo":"001",
                    "grado":"septimo",
                    "parada":"Getsemani",
                    "direccion":"77, Cl. 5 #7",
                    "edificio":"Ventura",
                    "barrio":"Getsemani",
                    "grupo":""              
            },
            {
                    "nombre": "Carolina",
                    "apellido": "Paez",
                    "nombre_usuario": "Caro",
                    "codigo":"015",
                    "grado":"noveno",
                    "parada":"Pie de la popa",
                    "direccion":"24, Cl. 6 #5 A",
                    "edificio":"Grand bay club",
                    "barrio":"Pie de la popa",
                    "grupo":""              
            },
            {
                    "nombre": "Luisa",
                    "apellido": "Zarate",
                    "nombre_usuario": "luZ",
                    "codigo":"026",
                    "grado":"octavo",
                    "parada":"Bocagrande",
                    "direccion":" 59, San Martín #10",
                    "edificio":"Sky",
                    "barrio":"Bocagrande",
                    "grupo":""              
            }
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
        
               for (i=0; i < $scope.usuarios.length; i++)
                    if ($scope.usuarios[i].nombre_usuario === text)
                            $scope.usuarios.splice(i,1);
                      
               
        }

        $scope.selectRuta = function(dia, ruta){
                if ("lunes_am"=== dia)
                    $scope.lunes_am = $scope.trayecto(ruta);        
                if ("martes_am"=== dia)
                    $scope.martes_am = $scope.trayecto(ruta);
                if ("miercoles_am"=== dia)
                    $scope.miercoles_am = $scope.trayecto(ruta);
                if ("jueves_am"=== dia)
                    $scope.jueves_am = $scope.trayecto(ruta);
                if ("viernes_am"=== dia)
                    $scope.viernes_am = $scope.trayecto(ruta);
                if ("sabado_am"=== dia)
                    $scope.sabado_am = $scope.trayecto(ruta);
                if ("domingo_am"=== dia)
                    $scope.domingo_am = $scope.trayecto(ruta);
                 if ("lunes_pm"=== dia)
                    $scope.lunes_pm = $scope.trayecto(ruta);
                if ("martes_pm"=== dia)
                    $scope.martes_pm = $scope.trayecto(ruta);
                if ("miercoles_pm"=== dia)
                    $scope.miercoles_pm = $scope.trayecto(ruta);
                if ("jueves_pm"=== dia)
                    $scope.jueves_pm = $scope.trayecto(ruta);
                if ("viernes_pm"=== dia)
                    $scope.viernes_pm = $scope.trayecto(ruta);
                if ("sabado_pm"=== dia)
                    $scope.sabado_pm = $scope.trayecto(ruta);
                if ("domingo_pm"=== dia)
                    $scope.domingo_pm = $scope.trayecto(ruta);
        }
        
        $scope.selectTrayecto = function(dia, nombre_trayecto){
            
                if ("lunes_am"=== dia)
                    $scope.p_lunes_am = $scope.parada($scope.lunes_am, nombre_trayecto); 
                if ("martes_am"=== dia)
                    $scope.p_martes_am = $scope.parada($scope.martes_am, nombre_trayecto); 
                if ("miercoles_am"=== dia)
                    $scope.p_miercoles_am = $scope.parada($scope.miercoles_am, nombre_trayecto); 
                if ("jueves_am"=== dia)
                    $scope.p_jueves_am = $scope.parada($scope.jueves_am, nombre_trayecto); 
                if ("viernes_am"=== dia)
                    $scope.p_viernes_am = $scope.parada($scope.viernes_am, nombre_trayecto); 
                if ("sabado_am"=== dia)
                    $scope.p_sabado_am = $scope.parada($scope.sabado_am, nombre_trayecto); 
                if ("domingo_am"=== dia)
                    $scope.p_domingo_am = $scope.parada($scope.domingo_am, nombre_trayecto); 
                if ("lunes_pm"=== dia)
                    $scope.p_lunes_pm = $scope.parada($scope.lunes_pm, nombre_trayecto); 
                if ("martes_pm"=== dia)
                    $scope.p_martes_pm = $scope.parada($scope.martes_pm, nombre_trayecto); 
                if ("miercoles_pm"=== dia)
                    $scope.p_miercoles_pm = $scope.parada($scope.miercoles_pm, nombre_trayecto); 
                if ("jueves_pm"=== dia)
                    $scope.p_jueves_pm = $scope.parada($scope.jueves_pm, nombre_trayecto); 
                if ("viernes_pm"=== dia)
                    $scope.p_viernes_pm = $scope.parada($scope.viernes_pm, nombre_trayecto); 
                if ("sabado_pm"=== dia)
                    $scope.p_sabado_pm = $scope.parada($scope.sabado_pm, nombre_trayecto); 
                if ("domingo_pm"=== dia)
                    $scope.p_domingo_pm = $scope.parada($scope.domingo_pm, nombre_trayecto);                 

        }

        $scope.trayecto = function(temp) {

            pos_ruta = $scope.buscarRuta(temp);            
            return $scope.rutas[pos_ruta].trayecto;
        
        }
        $scope.parada = function(trayectos, nombre) {
              
                for (i=0; i < trayectos.length; i++)
                    if (trayectos[i].nombre === nombre)
                            return trayectos[i].paradas;
        }
       
        $scope.buscarRuta = function(ruta){
            
            for (i=0; i < $scope.rutas.length; i++)
                    if ($scope.rutas[i].nombre === ruta)
                            return i;
        }
}