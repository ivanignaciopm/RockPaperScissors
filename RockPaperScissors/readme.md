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

### ¿Es equilibrado el método `getRandomInt`?

La función `getRandomInt` que utiliza `Math.random()` y `Math.floor()` para generar números enteros en un rango específico es generalmente considerada equilibrada y justa. Aquí está el razonamiento detrás de esto:

### Fórmula:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

1. **Rango de `Math.random()`**:

   - Produce un valor en el intervalo [0, 1).
2. **Multiplicación por `(max - min + 1)`**:

   - Esto transforma el intervalo a [0, max - min + 1).
3. **Aplicación de `Math.floor()`**:

   - Redondea hacia abajo al entero más cercano. Esto resulta en un valor entero en el intervalo [0, max - min].
4. **Adición de `min`**:

   - Desplaza el rango para que esté entre `min` y `max`.

### Ejemplo:

Si `min = 0` y `max = 10`:

- `Math.random() * (10 - 0 + 1)` produce un número en el rango [0, 11).
- `Math.floor` redondea este número a un entero en el rango [0, 10].
- Entonces, el resultado es un número entero entre 0 y 10, inclusive.

### Prueba de Equilibrio

Vamos a escribir una pequeña función que genere muchos números aleatorios y cuente la frecuencia de cada uno para asegurarnos de que la distribución es uniforme.

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function testRandomInt(min, max, iterations) {
  let results = {};
  for (let i = min; i <= max; i++) {
    results[i] = 0;
  }

  for (let i = 0; i < iterations; i++) {
    let randomNumber = getRandomInt(min, max);
    results[randomNumber]++;
  }

  return results;
}

// Ejecutar la prueba
let min = 0;
let max = 10;
let iterations = 1000000;
let results = testRandomInt(min, max, iterations);

console.log(`Resultados después de ${iterations} iteraciones:`);
for (let i = min; i <= max; i++) {
  console.log(`Número ${i}: ${results[i]} veces (${(results[i] / iterations * 100).toFixed(2)}%)`);
}
```

### Análisis de los Resultados

Si ejecutas este código, deberías ver que cada número en el rango tiene una frecuencia aproximada del 10% (si `min = 0` y `max = 10`), lo cual indicaría una distribución uniforme.

### Conclusión

El método `Math.random()` combinado con `Math.floor()` para generar números enteros en un rango es equilibrado y justo. La distribución debería ser aproximadamente uniforme si generas suficientes números aleatorios. Este método es generalmente adecuado para la mayoría de las aplicaciones que requieren generación de números aleatorios.
