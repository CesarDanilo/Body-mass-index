function calcular(){
    const form = document.querySelector('.form');
    const resposta = document.querySelector('.resposta');

    function caulculaIMC(event){
        event.preventDefault();
        
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const resultado = (parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value)));
        
        if(resultado < 18.5){
            resposta.innerHTML = 'MAGRESA';
        }else if(resultado >= 18.5 && resultado <= 24.9){
            resposta.innerHTML = 'NORMAL';
        }else if(resultado >= 25.0 && resultado <= 29.9){
            resposta.innerHTML = 'SOBREPESO';
        }else if(resultado >= 30.0 && resultado <= 39.9){
            resposta.innerHTML = 'OBESIDADE';
        }else if(resultado > 40.0){
            resposta.innerHTML = 'OBESIDADE GRAVE';
        }

    }

    form.addEventListener('submit', caulculaIMC);
    
};

calcular();
