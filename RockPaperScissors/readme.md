### Cómo Funciona `Math.random() * 3`

* `Math.random()` genera un número decimal aleatorio entre 0 (incluido) y 1 (no incluido).
* Al multiplicar este número por 3 (`Math.random() * 3`), obtienes un número decimal aleatorio entre 0 (incluido) y 3 (no incluido).
* `Math.floor()` redondea hacia abajo el número decimal al entero más cercano.

Por ejemplo:

* `Math.random()` puede generar `0.2345`.
* `0.2345 * 3` es `0.7035`.
* `Math.floor(0.7035)` es `0`.

In the code we will review how this work specificly.

# Entendiendo efficientRandom.js

### ¿Cómo funciona `Math.random`?

- `Math.random()` genera un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusive). Esto significa que el número puede ser cualquier valor decimal entre 0 y 1, pero nunca será 1.

### ¿Cómo funciona `Math.floor`?

- `Math.floor()` redondea hacia abajo al entero más cercano. Por ejemplo, `Math.floor(3.9)` resulta en 3.
