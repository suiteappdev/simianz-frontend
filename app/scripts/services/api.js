function API($q, $http, $constants, $state){

    this.get = function(){ var url = this.url; this.reset(); return $http.get(url); }
    this.post = function(data, header){  var url = this.url; this.reset(); return $http.post(url, data || {}, header || { headers : {'Content-Type': 'application/json'} }); }
    this.put = function(data){ var url = this.url; this.reset(); return $http.put(url, data || {}); }   
    this.delete = function(data){ var url = this.url; this.reset(); return $http.delete(url); }
    
    this.Headers = null;

    this.add = function(comp){ this.url += comp; return this;  }
    this.headers = function(headers){ this.Headers = headers; return this;  }
    this.reset = function(){ this.url = ""; }

    this.user = function(user){if(user) this.url = $constants.base + "user/" + user; else this.url = $constants.base + "user/"; return this;}

    return this;

   }
   
   angular.module('homer')
  .service('$API', API)
  ;