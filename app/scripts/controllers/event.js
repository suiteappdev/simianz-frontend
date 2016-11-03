/**
 *
 * events
 *
 */

angular
    .module('homer')
    .controller('eventCtrl', eventCtrl)

function eventCtrl($scope, $rootScope, $API, $storage, sweetAlert, $state, $modalService, DTOptionsBuilder, DTColumnDefBuilder) {
    $scope.records = [];
    $scope.Records = false;
    
    $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(20);
   
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(4).notSortable(),
        DTColumnDefBuilder.newColumnDef(5).notSortable()
    ];

    $scope.viewUbication = function(){
        $scope.ubicacion = this.record.ubicacion;
        $modalService.show({templateUrl : 'views/simianz/modal/view-ubication.html', size :'md', scope : $scope}, function($scope){
            $scope.$close();
        });
    }

    $scope.viewAssistance = function(){
      $state.transitionTo('asistentes', {asistentes: this.record._asistentes});
    }

    $scope.load = function(){
        /*$API.eventos.get().success(function(res){
            $scope.records = res || [];
        });*/

        $scope.records = [
                             { "_id" : "ksadasdasdas8d12721731237123",
                               "nombre" : "Tomorrowland",
                               "fecha" : "Jun 2017",
                               "duracion" : "3d",
                               "ubicacion" : [{"lat" : "51.08608", "lng" : "4.36633"} ],
                               "_asistentes" : [
                                           {
                                   "first_name" : "Jafid",
                                   "last_name" : "Castro"
                                           },
                                           {
                                   "first_name" : "Geo",
                                   "last_name" : "Castro"
                                         } 
                                       ] 
                             }
        ]
    }

    $scope.logIn = function(){
        $account.usuario().ingresar($scope.form.data).then(function(res){
            if(res.token){
                $storage.save('token', res.token);
                $storage.save('user', res.user);
                var user = res.user;
                $rootScope.fullUserName = user.first_name + " " + user.last_name.split(" ")[0];
                $state.go('dashboard');
            }

        }, function(status){
            if(status == 401){
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            }
        } )
    }
}