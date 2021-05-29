

function calculadora(num1 , num2) {
let conta = 'multiplicacao'
switch(conta){
    case 'soma':
        return num1 + num2
        break
   case 'subtracao':
        return num1 - num2
        break
    case 'multiplicacao':
        return num1 * num2
        break   
    case 'divisao':
        return num1 / num2
              break
              default:
                  console.log( 'erro de calculo')
}   }
    console.log(calculadora(60,8))
