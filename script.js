FormA.addEventListener('submit', function(e) {
    e.preventDefault(); 
    var inputValue = e.target.inputA.value;

    var nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = inputValue;
    nuevoElemento.style.backgroundColor = 'red'; // Establece el color de fondo azul para FormA

    document.body.appendChild(nuevoElemento);
});

FormB.addEventListener('submit', function(e) {
    e.preventDefault();
    var inputValue = e.target.inputA.value; 

    var nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = inputValue;
    nuevoElemento.style.backgroundColor = 'lightblue'; // Establece el color de fondo rojo para FormB

    document.body.appendChild(nuevoElemento);
});

