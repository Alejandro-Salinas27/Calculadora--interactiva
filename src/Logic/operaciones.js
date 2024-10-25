import operate from "./operate"; 
import isNumber from "./isNumber";

export default function operaciones(estado, nombreDeBoton) {
  if (nombreDeBoton === "AC") {
    return {
      total: null,
      siguiente: null,
      operador: null,
      expresion: '',
    };
  }

  if (isNumber(nombreDeBoton)) {
    if (estado.operador) {
      return {
        siguiente: (estado.siguiente || '') + nombreDeBoton,
        expresion: `${estado.expresion} ${nombreDeBoton}`,
        total: estado.total, // Aquí no modificamos total
      };
    }

    return {
      siguiente: (estado.siguiente === '0' ? nombreDeBoton : (estado.siguiente || '') + nombreDeBoton),
      expresion: `${estado.expresion}${estado.siguiente === '0' ? '' : ' '}${nombreDeBoton}`,
      total: estado.total, // Aquí tampoco modificamos total
    };
  }

  if (nombreDeBoton === '=') {
    if (estado.siguiente && estado.operador) {
      const resultado = operate(estado.total || '0', estado.siguiente, estado.operador);
      return {
        total: resultado,
        siguiente: null,
        operador: null,
        expresion: `${estado.expresion} = ${resultado}`,
      };
    }
    return {};
  }

  if (estado.siguiente && estado.operador) {
    const total = operate(estado.total || '0', estado.siguiente, estado.operador);
    return {
      total,
      siguiente: null,
      operador: nombreDeBoton,
      expresion: `${total} ${nombreDeBoton}`,
    };
  }

  return {
    operador: nombreDeBoton,
    total: estado.siguiente, // Aquí se está asignando el valor de siguiente a total
    siguiente: null,
    expresion: `${estado.siguiente} ${nombreDeBoton}`,
  };
}
