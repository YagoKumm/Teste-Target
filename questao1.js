function checkFibonacci(num) {
    let fibonacci = [0, 1];
    let nextFib = 1;
    while(nextFib <= num){
        nextFib = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if(nextFib <= num){
            fibonacci.push(nextFib);
        }
    }

    if (fibonacci.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
        console.log(`Sequência de Fibonacci até ${num}: ${fibonacci.join(', ')}`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

console.log('Digite um número:');
process.stdin.on('data', (data) => {
    const num = parseInt(data.toString().trim());
    
    if (isNaN(num)) {
        console.log('Por favor, insira um número válido.');
    } else {
        checkFibonacci(num);
    }

    process.stdin.end();
});