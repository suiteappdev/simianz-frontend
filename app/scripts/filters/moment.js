angular
    .module('homer')
    .filter('moments', function(){
        return function(date, format){
            return window.moment(date).format(format);
        }
    })
