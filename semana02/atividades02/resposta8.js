// A condicional if  é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.
//Montei a questão usando a estrutura condicional IF e ELSE .


let nota1 = 5;
let nota2 = 0;
let nota3 = 10;

let media = (nota1 + nota2 + nota3)/3;
console.log(media);

if ( media >= 7){
    console.log("Aprovado");
}
else if (media >= 5 && media < 7){
    console.log("Recuperação");
}
else if (media < 5){
    console.log("Reprovado");
}