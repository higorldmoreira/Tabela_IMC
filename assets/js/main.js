/* Capturar o evento de submit do formulario */
const form = document.querySelector('#form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que o formulário seja enviado
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (peso <= 2) {
        setResultado("Peso Invalido", false);
        return;
    }
    if (altura <= 54) {
        setResultado("Altura Invalido", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Magreza grave','Magreza moderada', 'Magreza leve', 'Peso ideal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II ou severa', 'Obesidade grau III ou mórbida'];

    if (imc >= 40) return nivel[7];
    if (imc >= 35) return nivel[6];
    if (imc >= 30) return nivel[5];
    if (imc >= 25) return nivel[4];
    if (imc >= 18.6) return nivel[3];
    if (imc >= 17) return nivel[2];
    if (imc > 16) return nivel[1];
    if (imc < 16) return nivel[0];
}
//função para calcular IMC

function getIMC(peso, altura){
    const alturaEmMetros = altura / 100;
    const imc = peso / (alturaEmMetros **2);
    return imc.toFixed(2);
}

//Função para adicionar conteudo ao resultado

function criaP(){
        const p = document.createElement('p');
        return p;
}

function setResultado (msg,isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML= ""; 
    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('erro');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
};