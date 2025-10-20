const readline = require('readline');

// Criando a interface para capturar entradas do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Verificar se número é positivo
function verificarNumeroPositivo() {
    rl.question("Digite um número: ", (num) => {
        if (num > 0) {
            console.log("O número é positivo.");
        } else {
            console.log("O número não é positivo.");
        }
        rl.close();
    });
}

// 2. Número par ou ímpar
function numeroParOuImpar() {
    rl.question("Digite um número: ", (num) => {
        if (num % 2 === 0) {
            console.log("O número é par.");
        } else {
            console.log("O número é ímpar.");
        }
        rl.close();
    });
}

// 3. Boas-vindas por turno
function boasVindasPorTurno() {
    rl.question("Digite M (manhã), T (tarde) ou N (noite): ", (turno) => {
        if (turno === "M") {
            console.log("Bom dia!");
        } else if (turno === "T") {
            console.log("Boa tarde!");
        } else if (turno === "N") {
            console.log("Boa noite!");
        } else {
            console.log("Opção inválida.");
        }
        rl.close();
    });
}

// 4. Maior de dois números
function maiorDeDoisNumeros() {
    rl.question("Digite o primeiro número: ", (num1) => {
        rl.question("Digite o segundo número: ", (num2) => {
            if (num1 > num2) {
                console.log(`O maior número é ${num1}.`);
            } else {
                console.log(`O maior número é ${num2}.`);
            }
            rl.close();
        });
    });
}

// 5. Uso do operador ternário
function positivoOuNegativo() {
    rl.question("Digite um número: ", (num) => {
        let resultado = (num >= 0) ? "Positivo" : "Negativo";
        console.log(resultado);
        rl.close();
    });
}

// 6. Menu simples com switch
function menuSimples() {
    rl.question("Escolha uma opção:\n1. Início\n2. Sobre\n3. Sair\n", (opcao) => {
        switch (opcao) {
            case "1":
                console.log("Bem-vindo ao Início!");
                break;
            case "2":
                console.log("Aqui é a página sobre.");
                break;
            case "3":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida!");
        }
        rl.close();
    });
}

// 7. Contador de 1 a 5 com while
function contador1a5() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
    rl.close();
}

// 8. Contagem regressiva com do...while
function contagemRegressiva() {
    let i = 5;
    do {
        console.log(i);
        i--;
    } while (i >= 1);
    rl.close();
}

// 9. Imprimir de 1 a 10 com for
function imprimir1a10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    rl.close();
}

// 10. Somar números de 1 a 10
function somar1a10() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    console.log(`A soma dos números de 1 a 10 é: ${soma}`);
    rl.close();
}

// 11. Imprimir elementos de um array com for
function imprimirArray() {
    let array = [1, 2, 3, 4, 5];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    rl.close();
}

// 12. Usar for...of com array
function forOfComArray() {
    let nomes = ["Ana", "Carlos", "João", "Maria"];
    for (let nome of nomes) {
        console.log(nome);
    }
    rl.close();
}

// 13. Usar for...in com objeto
function forInComObjeto() {
    let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
    for (let chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
    rl.close();
}

// 14. Parar contagem com break
function contarComBreak() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
    rl.close();
}

// 15. Pular número com continue
function contarComContinue() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }
        console.log(i);
    }
    rl.close();
}


// 16. Classificar nota do aluno
function classificarNota() {
    rl.question("Digite a nota do aluno: ", (nota) => {
        if (nota < 6) {
            console.log("Reprovado");
        } else if (nota >= 6 && nota <= 7.9) {
            console.log("Recuperação");
        } else {
            console.log("Aprovado");
        }
        rl.close();
    });
}

// 17. Tabuada de um número
function tabuada() {
    rl.question("Digite um número para ver sua tabuada: ", (numero) => {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        rl.close();
    });
}

// 18. Contar elementos numéricos em um array misto
function contarElementosNumericos() {
    let array = [1, "texto", 2, true, 3, null, 4];
    let count = 0;
    for (let item of array) {
        if (typeof item === "number") {
            count++;
        }
    }
    console.log(`Existem ${count} números no array.`);
    rl.close();
}


// 19. Verificar se uma palavra é palíndromo
function verificarPalindromo() {
    rl.question("Digite uma palavra: ", (palavra) => {
        let palavraInvertida = palavra.split("").reverse().join("");
        if (palavra === palavraInvertida) {
            console.log("A palavra é um palíndromo.");
        } else {
            console.log("A palavra não é um palíndromo.");
        }
        rl.close();
    });
}

// 20. Menu interativo com switch e while
function menuInterativo() {
    let opcao;
    function exibirMenu() {
        rl.question("Escolha uma opção:\n1. Início\n2. Sobre\n3. Sair\n", (opcao) => {
            switch (opcao) {
                case "1":
                    console.log("Bem-vindo ao Início!");
                    break;
                case "2":
                    console.log("Aqui é a página sobre.");
                    break;
                case "3":
                    console.log("Saindo...");
                    rl.close();
                    return;
                default:
                    console.log("Opção inválida!");
            }
            exibirMenu(); // Reexibe o menu após a escolha
        });
    }
    exibirMenu(); // Chama a função para exibir o menu
}

// Escolha um exercício para testar
// Chame qualquer função abaixo para rodar o código:
verificarNumeroPositivo();
//numeroParOuImpar();
//boasVindasPorTurno();
//maiorDeDoisNumeros();
//positivoOuNegativo();
//menuSimples();
