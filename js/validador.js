/**
 * @author Administrador
 */
function validaDados(){
	var form="";
	
	
	//Nome
	var nome = document.getElementById("element_1");
	if (nome == null || nome.value.length < 10) {
		alert ('O nome deve ter no mínimo 10 caracteres.');
		return false;
	} 
	form += "Nome: " + nome.value + "\n\n";
	
		
	//Sexo
	var sexo = document.getElementById("element_8_1");
	
	var estaMarcado = false;
	for (i = 0; i < document.form_139127.element_8.length; i++) {
       if (document.form_139127.element_8[i].checked) {
		   form += "Sexo: " + document.form_139127.element_8[i].value + "\n\n";
		   estaMarcado = true;
	   }
	}
	if (!estaMarcado) {
		alert('Preencha corretamenta o sexo.');
		return false;
	}
	
		
	//Nascimento
	var dia = document.getElementById("element_2_1");
	var mes = document.getElementById("element_2_2"); 
	var ano = document.getElementById("element_2_3");
	if (dia == null || dia.value == "") {
		alert('Preencha o dia de nascimento.');
		return false;
	}
	if (mes == null || mes.value.length < 2) {
		alert('Preencha o mês de nascimento.');
		return false;
	}	
	if (ano == null || ano.value.length < 4) {
		alert('Preencha o ano de nascimento.');
		return false;
	}
	form += "Data de nascimento: " + dia.value + "/" + mes.value + "/" + ano.value + "\n\n";
	
	
	//Endereço
	//Rua
	var rua = document.getElementById("element_7_1");
	
	
	if (rua == null || rua.value.length < 15) {
		alert('Preenha os dados da rua corretamente.');
		return false;
	}
	form += "Rua: " + rua.value + "\n\n";
	
	//CPF
	
	
	//Estado civil
	var civil = document.getElementById("element_9");
	if (civil.options.length > 0) {
		var status = civil.options[civil.selectedIndex];
		if (status == null || status.value == "") {
			alert('Preencha o estado civil corretamente.');
			return false;
		}
	}
	form += "Estado civil: " + status.value + "\n\n";
	
	//Interesses
	//var todos = document.getElementById("element_10_0");
	var html = document.getElementById("element_10_1");
	var css = document.getElementById("element_10_2");
	var js = document.getElementById("element_10_3");
	var php = document.getElementById("element_10_4");
	var java = document.getElementById("element_10_5");
	var mysql = document.getElementById("element_10_6");
	var cplus = document.getElementById("element_10_7");

	var contadorInteresses = 0;
	var interesses = "";
	if (html.checked == true) {
		interesses += html.value + "\n";
		contadorInteresses++;
	}
	if (css.checked == true) {
		interesses += css.value + "\n";
		contadorInteresses++;
	}
	if (js.checked == true) {
		interesses += js.value + "\n";
		contadorInteresses++;
	}
	if (php.checked == true) {
		interesses += php.value + "\n";
		contadorInteresses++;
	}
	if (java.checked == true) {
		interesses += java.value + "\n";
		contadorInteresses++;
	}
	if (mysql.checked == true) {
		interesses += mysql.value + "\n";
		contadorInteresses++;
	}
	if (cplus.checked == true) {
		interesses += cplus.value + "\n";
		contadorInteresses++;
	}
	if (contadorInteresses == 0) {
		form += "Interesses: ESTE USUÁRIOS NÃO TEM NENHUM INTERESSE :(" + "\n";
	} else{
		form += "Interesses: " + interesses + "\n";
	}

	//Comentários
	var comentarios = document.getElementById("element_6");
	if (comentarios == null || comentarios.value < 10) {
		alert('Preencha os comentarios corretamente.');
		return false;
	}
	form += "Comentários: " + comentarios.value;
	
	alert(form);
	return true;
}

/**
 * Permite apenas numeros
 */
function SomenteNumero(e){
    var tecla = (window.event) ? event.keyCode : e.which;
    
	if ((tecla > 47 && tecla < 58)) {
		return true;
	} else if (tecla == 8 || tecla == 0) {
			return true;
	} else {
		return false
	}
}

/**
 * Permite apenas NAO numeros
 */
function SomenteNaoNumero(e){
    var tecla = (window.event) ? event.keyCode : e.which;
    
	if ((tecla > 47 && tecla < 58)) {
		return false;
	}
}

function trataCheckbox(){
	var todos = document.getElementById("element_10_0");
	var html = document.getElementById("element_10_1");
	var css = document.getElementById("element_10_2");
	var js = document.getElementById("element_10_3");
	var php = document.getElementById("element_10_4");
	var java = document.getElementById("element_10_5");
	var mysql = document.getElementById("element_10_6");
	var cplus = document.getElementById("element_10_7");
	
	if (todos.checked == true) {
		html.checked = false;
		css.checked = false;
		js.checked = false;
		php.checked = false;
		java.checked = false;
		mysql.checked = false;
		cplus.checked = false;
	} else if (todos.checked == false) {
		html.checked = true;
		css.checked = true;
		js.checked = true;
		php.checked = true;
		java.checked = true;
		mysql.checked = true;
		cplus.checked = true;
	} 
}

function trataRadio() {
	var nome = document.getElementById("element_1");
	if (nome == null || nome.value < 10) {
		alert('Preencha um nome primeiro');
		return false;
	}
	var nomes = nome.value.split(" ");
	if (nomes.length < 2) {
		alert('E necessario ter 2 nomes para este teste.');
		return false;
	}
	var primeiro = nomes[0];
	var ultimoCaractere = primeiro.charAt(primeiro.length - 1);
	if (ultimoCaractere == 'o' || ultimoCaractere == 'O') {
		//masculino
		var masculino = document.getElementById("element_8_1");
		masculino.checked = true;
		
	
		var feminino = document.getElementById("element_8_2");
		var gay = document.getElementById("element_8_3");
		
		masculino.disabled = true;
		feminino.disabled = true;
		gay.disabled = true;
	} else if (ultimoCaractere == 'a' || ultimoCaractere == 'A') {
		//feminino
		var feminino = document.getElementById("element_8_2");
		feminino.checked = true;
		
	
		var masculino = document.getElementById("element_8_1");
		var gay = document.getElementById("element_8_3");
		
		masculino.disabled = true;
		feminino.disabled = true;
		gay.disabled = true;
	}
	return false;
}

function validaTextArea () {
	
	var textarea = document.getElementById("element_6");
	textarea.value = "";
	
}
