 /**
 * @file bisection.js
 * @description Implementación del método de bisección para encontrar raíces.
 */

import { create, all } from "mathjs";

const math = create(all);

function bisection(expression, a, b, tolerance = 0.001, maxIterations = 100) {
  const f = (x) => math.evaluate(expression, { x });

  const fa = f(a);
  const fb = f(b);

  if (!Number.isFinite(fa) || !Number.isFinite(fb)) {
    console.error("VALIDACIÓN FALLIDA: f(a) o f(b) no son valores válidos.");
    return null;
  }

  if (fa === 0) {
    return { root: a, iterations: 0, steps: [] };
  }

  if (fb === 0) {
    return { root: b, iterations: 0, steps: [] };
  }

  if (fa * fb > 0) {
    console.error("VALIDACIÓN FALLIDA: f(a) y f(b) deben tener signos opuestos.");
    return null;
  }

  const steps = [];
  let c = a;
  let fc = f(c);
  let iteration = 0;

  while ((b - a) / 2 > tolerance && iteration < maxIterations) {
    iteration++;

    c = (a + b) / 2;
    fc = f(c);

    steps.push({
      iteration,
      a,
      b,
      c,
      fa: f(a),
      fb: f(b),
      fc,
      error: Math.abs((b - a) / 2),
    });

    if (fc === 0) break;

    if (f(a) * fc < 0) {
      b = c;
    } else {
      a = c;
    }
  }

  return {
    root: c,
    iterations: iteration,
    steps,
  };
}

export { bisection };