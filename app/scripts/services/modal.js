function modalService($modal, sweetAlert){
        return {
        	showLoading : function(params, callback){
		        window.modal = $modal.open({
		            templateUrl: 'views/modal/loader.html',
		            size: 'sm'
		        });
        	},
        	show : function(params, onAccept, onCancel){
		       
		        window.modal = $modal.open({
		            templateUrl: params.templateUrl,
		            size: params.size || 'md',
		            scope : params.scope,
		            controller : function($scope){
		                $scope.ok = function(persist){
		                	$scope.persist = persist || false;
		                	onAccept($scope);
		                }

		                $scope.cancel = function(){
		                	if(onCancel){
		                    	onCancel($scope);
		                		return;
		                	}

		                    $scope.$close();
		                }
		            }
		        });

        	},

        	confirm : function(options, callback){
        		var _default = {
	        	   confirmButtonColor: "#DD6B55", 
	               confirmButtonText: "Si",
	               cancelButtonText: "No",
	               showCancelButton: true,
	               closeOnConfirm: false,
	               closeOnCancel: true 
        		}

                window.sweet = sweetAlert.swal(angular.extend(_default, options), callback);
        	},

        	removeConfirm : function(options, callback){
        		
        		var _default = {
        		   title: "Está Seguro?",
                   text: "Una vez eliminado este registro, no podrá volver a usarlo.",
                   type: "warning",
	        	   confirmButtonColor: "#DD6B55", 
	               confirmButtonText: "Eliminar",
	               cancelButtonText: "Cancelar",
	               showCancelButton: true,
	               closeOnConfirm: false,
	               closeOnCancel: true 
        		}

                window.sweet = sweetAlert.swal(angular.extend(_default, options), callback);
        	},
        	EditConfirm : function(options, callback){
        		
        		var _default = {
        		   title: "confirmar los cambios?",
                   text: "Confirma que desea guardar los cambios para este registro.",
                   type: "success",
	        	   confirmButtonColor: "#DD6B55", 
	               confirmButtonText: "Aceptar",
	               cancelButtonText: "Cancelar",
	               showCancelButton: true,
	               closeOnConfirm: false,
	               closeOnCancel: true 
        		}

                window.sweet = sweetAlert.swal(angular.extend(_default, options), callback);
        	},

        	incompleteForm : function(callback){

        		   var options = {
                        confirmButtonText: "Ok",
                        showCancelButton: false,
                        title: "Formulario no completado",
                        text: "Los campos con (*) son obligatorios",
                        type: "error"
                    };

                window.sweet = sweetAlert.swal(options, callback);


        	}

        }
   }
angular.module('homer')
  .service('$modalService', modalService)
  ;