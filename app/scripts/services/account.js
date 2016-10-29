function account($http, $q, $constants, $storage, $rootScope, $stateParams, $state, $timeout){
    this.usuario = function(){
        return {
          ingresar : function(data){
              var async = $q.defer();

                $http.post($constants.base + 'login', data)
                .success(function(data, status, headers, config) {
                    async.resolve(data);
                    
                  })
                .error(function(data, status, headers, config) {
                    async.reject(status);
                  });

              return async.promise;
          },

          password_reset : function(data){
              var async = $q.defer();

                $http.post($constants.base + 'password-reset/', data)
                .success(function(data, status, headers, config) {
                    async.resolve(data);
                    
                  })
                .error(function(data, status, headers, config) {
                    async.reject(status);
                  });

              return async.promise;
          },


          salir : function(){
            if($storage.get('token')){
               $storage.delete('token');
               $storage.delete('user');
               window.localStorage.clear();
               window.location = '#/login';
            }
          }
        }
    }

    return this;
}

angular.module('homer').service('$account', account);