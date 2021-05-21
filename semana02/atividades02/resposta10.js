//Aqui usei a declaração de função junto com os comando IF e ELSE .
//concedi os valores  as variaveis e a função e o return para saber o resultado  da função , atribui a condicional if e else ,
//para testar a condição do bloco e me retornar o valor da expressão.

const idade = 18;
const anoatual = 2021;

function maioridade(ano){ 
    let texto;

    if (anoatual - ano >= idade){
        texto = "maior de idade";
    }else {
        texto = "menor de idade";
    }
    return texto; 
}

console.log(maioridade(1981));