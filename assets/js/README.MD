const form = document.querySelector('.form');

    function calcularIMC(event){
        event.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        let resultado = peso.values / (altura.values * altura.values);

        switch (resultado){
            case resultado < 18.5: alert('MAGREZA!'); break;
            case resultado >= 18.5 && resultado <= 24.9: alert('NORMAL!'); break;
            case resultado >= 25.5 && resultado <= 29.9: alert('SOBREPESO!'); break;
            case resultado >= 30.0 && resultado <= 39.9: alert('OBESIDADE!'); break;
            case resultado > 40.0: alert('OBESIDADE GRAVE'); break;
        }

    };

    form.addEventListener('submit', calcularIMC);