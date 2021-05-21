//Aqui eu pesquisei , não sabia madar imprimir (console) em numero décimal , sabia a lógica da questao , inicializei as variáveis ,
//fiz os cálculos e depois  uma colinha no site "https://stackoverflow.com/questions/3163070/javascript-displaying-a-float-to-2-decimal-places"

let valordojantar = 56;
const  percentualdogarçom = 10;

let taxagarcom = valordojantar * (percentualdogarçom/100);

let valortotal = valordojantar + taxagarcom;
//console.log(taxagarcom,valortotal);


console.log ("Valor do garçon: R$ %f e Valor total do jantar: R$ %f", parseFloat(taxagarcom.toFixed(2)), parseFloat(valortotal.toFixed(2)));

