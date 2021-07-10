
async function somaDeNumeros() {

    const response = await fetch('http://localhost:3030/');
    const data = await response.json();
    const inteiro = document.getElementById('numbers');

    let somar = data.push(inteiro);
    document.getElementById('size').innerHTML + somar; 
    
}

somaDeNumeros()




