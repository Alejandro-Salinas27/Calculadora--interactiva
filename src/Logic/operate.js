import Big from 'big.js';

export default function operate(numeroUno, numeroDos, operador) {
  const uno = Big(numeroUno || "0");
  const dos = Big(numeroDos || "0");

  switch (operador) {
    case '+':
      return uno.plus(dos).toString();
    case '-':
      return uno.minus(dos).toString();
    case 'x':
      return uno.times(dos).toString();
    case '/':
      return dos.eq(0) ? 'Error' : uno.div(dos).toString();
    default:
      return '0';
  }
}
