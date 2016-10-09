(function(angular) {
	var restApp;

	restApp = angular.module('restApp', []);

	restApp.controller('restController', [ '$scope', '$http', restController ]);

	// myApp.service('cargaService', [ '$http', cargaService ]);

	function restController($scope, $http) {
		console.log("init cargaController");

		var successFunction = function(response) {
			var responseData = response.data;
			$scope.pocs = responseData;
			console.log("responseData", responseData);
		}

		var errorFunction = function(response) {
			console.log("error", response);
			alert("Algo salio mal :S, checa el log");
		}

		$scope.get = function() {
			var getURI = "/rest-back/ws/rest/poc";
			var promise = $http.get(getURI);
			promise.then(successFunction, errorFunction);
		}

		$scope.post = function(model) {
			var postURI = "/rest-back/ws/rest/pocURL";
			var promise = $http.post(postURI, model);
			promise.then(successFunction, errorFunction);
		}

	}
})(window.angular);
