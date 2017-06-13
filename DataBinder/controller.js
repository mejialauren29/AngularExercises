angular.module("miAplicacion",[])
.controller("controlador1",function($scope){

	$scope.nombre="Lauren mejia";
	$scope.nuevocomentario={};

	$scope.comentarios=[
		{

			comentario:"",
			username:""
		}
	];


	$scope.agregarcomentario=function(){

		$scope.comentarios.push($scope.nuevocomentario);
		$scope.nuevocomentario={};
	}
	
});
