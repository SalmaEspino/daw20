function limpiarFormulario(){
	 document.getElementById("miForm").reset();

}
	var menorde3 = function(n1, n2, n3){
	
 var num1 = parseFloat(document.getElementById("numero1").value);
 var num2 = parseFloat(document.getElementById("numero2").value);
 var num3 = parseFloat(document.getElementById("numero3").value);
 
 if(num1 <= num2 && num1 <= num3)
 	m =num1;
  else if(num2 < num1 && num2 <= num3)
    m = num2;
  else
  	m = num3;

 return m;
}

