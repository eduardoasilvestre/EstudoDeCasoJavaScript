function validaFormulario() {
	
	var formulario = "";
	var nome = document.getElementById("element_1");
	
	if (nome == null || nome.value.length < 10) {
		alert('O nome deve ter pelo menos 10 caracteres válidos.');
		return false;
	}
	formulario += "Nome: " + nome.value + "\n";
	
	alert(formulario);
	return true;
}