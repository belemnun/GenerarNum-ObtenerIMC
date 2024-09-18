var promedio = 0;
var numRegistros = 0;

function generar(){
    let edad = document.getElementById('edad');
    let altura= document.getElementById('altura');
    let peso= document.getElementById('peso');

    let aleatorioEdad = (Math.floor(Math.random()*(99 - 18) + 18));

    edad.value = aleatorioEdad;
    
    let aleatorioAltura = (Math.random()*(2.5 - 1.5) + 1.5).toFixed(2);
    
    altura.value = aleatorioAltura;

    let aleatorioPeso = (Math.random()*(130 - 20) + 20).toFixed(2);

    peso.value = aleatorioPeso;

}

function calcular() {
    let edad = document.getElementById('edad').value;
    let altura= document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let nivel = document.getElementById('nivel');

    let imc = (peso / Math.pow(altura, 2));
    
    document.getElementById('imc').value = imc.toFixed(2);

    if(imc < 18.5){
        nivel.value = "Bajo peso";
    }else if(imc >= 18.5 && imc <= 24.9){
        nivel.value = "Peso Saludable";
    }else if(imc >= 25 && imc <= 29.9){
        nivel.value = "Sobrepeso";
    }else if(imc >= 30) {
        nivel.value = "Obesidad";
    }

}

function registrar(){
    let edad = document.getElementById('edad').value;
    let altura= document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let imc = document.getElementById('imc').value
    let nivel = document.getElementById('nivel').value;

    let registros = document.getElementById('registros');

    if(edad == ""){
        alert('Presione el boton de Generar');

    }else if(imc == ""){
        alert('Presione el boton de Calcular');
    }else{

        var convertido = parseFloat(document.getElementById("imc").value);

        numRegistros += 1;
        promedio += convertido;

        document.getElementById("imcPromedio").innerHTML = (promedio / numRegistros).toFixed(2);

        registros.innerHTML += `<tr>
		<td>${numRegistros}</td>
		<td>${document.getElementById("edad").value}</td>
		<td>${document.getElementById("altura").value}</td>
		<td>${document.getElementById("peso").value}</td>
		<td>${document.getElementById("imc").value}</td>
		<td>${document.getElementById("nivel").value}</td>
	</tr>`;
    }


}

function borrar(){
    registros.innerHTML = "";
    document.getElementById("imc").value = "";
    document.getElementById("nivel").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("imcPromedio").innerText = "";
    promedio = 0;
    numRegistros = 0;
}


