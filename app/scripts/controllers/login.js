/**
 *
 * Estudiante
 *
 */

angular
    .module('homer')
    .controller('loginCtrl', loginCtrl)

function loginCtrl($scope, $rootScope, $API, $storage, sweetAlert, $state, $modalService, $account) {

    $scope.load = function(){
        if($storage.get('token')){
            $state.go('dashboard');
        }
    }

    $scope.logIn = function(){
        $account.usuario().ingresar($scope.form.data).then(function(res){
            if(res.token){
                $storage.save('token', res.token);
                $storage.save('user', res.user);
                var user = res.user;
                $rootScope.fullUserName = user.name + " " + user.last_name.split(" ")[0];
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