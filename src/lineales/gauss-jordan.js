// METODO DE GAUSS-JORDAN

function gaussJordan({ A, b }) {
 
  if (!Array.isArray(A) || !A.every(Array.isArray)) {
    throw new TypeError("Trazo.gaussJordan: 'A' debe ser una matriz (array de arrays).");
  }
 
  const n = A.length;
 
  if (A.some((fila) => fila.length !== n)) {
    throw new TypeError(`Trazo.gaussJordan: 'A' debe ser una matriz cuadrada (${n}×${n}).`);
  }
 
  if (!Array.isArray(b) || b.length !== n) {
    throw new TypeError(`Trazo.gaussJordan: 'b' debe ser un array de longitud ${n}.`);
  }
  
  const M = A.map((fila, i) => [...fila, b[i]]);
  const iteraciones = [];
 
  for (let k = 0; k < n; k++) {
 
    if (M[k][k] === 0) {
      let filaPivote = -1;
      for (let i = k + 1; i < n; i++) {
        if (M[i][k] !== 0) {
          filaPivote = i;
          break;
        }
      }
 
      if (filaPivote === -1) {
        throw new Error(
          `Trazo.gaussJordan: pivote nulo en la columna ${k}. ` +
          `El sistema puede ser singular o no tener solución única.`
        );
      }
 
      [M[k], M[filaPivote]] = [M[filaPivote], M[k]];
    }
 
    const pivote = M[k][k];
    for (let j = 0; j <= n; j++) {
      M[k][j] /= pivote;
    }
 
    for (let i = 0; i < n; i++) {
      if (i !== k) {
        const factor = M[i][k];
        for (let j = 0; j <= n; j++) {
          M[i][j] -= factor * M[k][j];
        }
      }
    }
 
    iteraciones.push(M.map((fila) => [...fila]));
  }
 
  const resultado = M.map((fila) => fila[n]);
 
  return {
    resultado,
    iteraciones,
  };
}
 
export { gaussJordan };