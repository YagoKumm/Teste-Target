let name = 'Achei um anel na esquina!'

let ContaString = 0;

for (let i = 0; i < name.length; i++) {

    if (name[i].toLowerCase() === 'a') {
        ContaString++; 
    }
}

console.log(`A letra 'a' ocorre ${ContaString} vezes na string.`);