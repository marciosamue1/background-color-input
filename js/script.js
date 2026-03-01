function escopo () {
    
    
    function recebeEvento (evento) { //Evento de submit
    
    evento.preventDefault();
        

    
    campoDeMudanca.style.background =  valor.value; //Aqui estou adicionando a cor, que está no input
    
    
    //Aqui eu estou adicionando o nome da cor e já estou adicionando uma cor para o elemento
    corAtual.innerHTML = valor.value;
    corAtual.style.color = valor.value;
    
    if(valor.value === "black") {
        corAtual.style.color = 'white';
    }
}
    
    
    form.addEventListener('submit', recebeEvento);

}

const campoDeMudanca = document.querySelector('#container'); //Aqui estamos pegando o conteiner

const valor = document.querySelector('.texto'); //Aqui estamos escolhendo o campo do input

const form = document.querySelector('#form'); // selecionei o form

const corAtual = document.querySelector('.SuaCorAtual');

escopo ()