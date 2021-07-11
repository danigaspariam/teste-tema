
async function somaDeNumeros() {


    const inteiro = document.getElementById('numbers');
    const response = await fetch('http://localhost:3030/?inteiro'+ inteiro);
    const data = await response.json();
    

    document.getElementById('size').innerHTML = data; 
    
}








