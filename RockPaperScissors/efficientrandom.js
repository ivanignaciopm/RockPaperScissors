// Efficient function to get 3 random numbers.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function exampleOfRandom() {
    // Get 3 random numbers
    console.log('Three random numbers:');
    let num1 = getRandomInt(2,10);
    let num2 = getRandomInt(2,10);
    let num3 = getRandomInt(2,10);
  
    // Display the numbers with 3 decimals
    console.log(`num1 = ${num1}\nnum2 = ${num2}\nnum3 = ${num3}`);
  
  }
  
  exampleOfRandom();
  