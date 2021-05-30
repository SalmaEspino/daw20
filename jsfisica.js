function limpiarFormulario(){
	 document.getElementById("miForm").reset();

}
	var velocidad = function(n1, n2){
	
 var dis = parseFloat(document.getElementById("dis").value);
 var tie = parseFloat(document.getElementById("tie").value);
 var resultado = dis/tie;


 return resultado;
}
