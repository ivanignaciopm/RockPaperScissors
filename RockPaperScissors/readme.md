### Cómo Funciona `Math.random() * 3`

* `Math.random()` genera un número decimal aleatorio entre 0 (incluido) y 1 (no incluido).
* Al multiplicar este número por 3 (`Math.random() * 3`), obtienes un número decimal aleatorio entre 0 (incluido) y 3 (no incluido).
* `Math.floor()` redondea hacia abajo el número decimal al entero más cercano.

Por ejemplo:

* `Math.random()` puede generar `0.2345`.
* `0.2345 * 3` es `0.7035`.
* `Math.floor(0.7035)` es `0`.
