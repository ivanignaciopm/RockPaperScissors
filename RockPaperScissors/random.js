function exampleOfRandom() {
  
  // get 3 random numbers with 3 decimals
  console.log('Three random numbers:')
  let num1 = Math.random().toFixed(3)
  let num2 = Math.random().toFixed(3)
  let num3 = Math.random().toFixed(3)

  console.log(`num1 = ${num1}\nnum2 = ${num2}\nnum3 = ${num3}`)

  
  // Display the numbers with 3 decimals
  console.log(`num1 = ${num1.toFixed(3)}\nnum2 = ${num2.toFixed(3)}\nnum3 = ${num3.toFixed(3)}`);

  // Multiply by 3
  num1 *= 3;
  num2 *= 3;
  num3 *= 3;

  // Display the numbers with 3 decimals after multiplication
  console.log(`\nAfter multiplying by 3:\nnum1 = ${num1.toFixed(3)}\nnum2 = ${num2.toFixed(3)}\nnum3 = ${num3.toFixed(3)}`);

  // Apply Math.floor
  let floor1 = Math.floor(num1);
  let floor2 = Math.floor(num2);
  let floor3 = Math.floor(num3);

  console.log(`\nConverting to the greatest integer less than or equal to:\nnum1 = ${floor1}\nnum2 = ${floor2}\nnum3 = ${floor3}`);

  // Multiply by 2
  num1 = floor1 * 2;
  num2 = floor2 * 2;
  num3 = floor3 * 2;

  // Display the numbers with 3 decimals after multiplication
  console.log(`\nAfter multiplying by 2:\nnum1 = ${num1.toFixed(3)}\nnum2 = ${num2.toFixed(3)}\nnum3 = ${num3.toFixed(3)}`);
}

exampleOfRandom();
