// Trabalhei a declaraçaõ de função , usei a condicional IF e ELSE  , de acordo o problema.
// Bem , para declarar uma função : nome da função , lista de argumentos entre parenteses separado por virgulas .
//A função consiste em uma instruçao que indica para retornar o argumento da função.
//A declaração return especifica o valor retornado da função .
// colinha https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions

let entrada = 8;

function parouimpar(num){ 
    let texto;

    if (num % 2 === 0){
        texto = "par";
    }else {
        texto = "impar";
    }
    return texto; 
}

console.log(parouimpar(entrada));