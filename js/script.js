function escopo () {
    const form = document.querySelector('#form');
    
    function recebeEvento (evento) {
    
    evento.preventDefault();
        
    const campoDeMudanca = document.querySelector('#container');
    const valor = document.querySelector('.texto')
    
    campoDeMudanca.style.background =  valor.value
    }
    
    
    form.addEventListener('submit', recebeEvento);

}



escopo ()