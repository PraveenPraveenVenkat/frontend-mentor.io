 // Named function
// function RocketToMars() {
    //return 'BOOM!';
  //}

  class Song {
    constructor() {
      this.title;
      this.author;
    }
    
    play() {
      console.log('Song playing!');
    }
  }
  
  const mySong = new Song();
  mySong.play();
  

  class Pizza {
    constructor(size = "medium size") { // Default size is "medium"
      this.size = size;
    }
  
    bake() {
      console.log(`Bake a ${this.size} Pizza`);
    }
  }
  const myPizza = new Pizza ();
  myPizza.bake(); 
  /**
  /
  // Correctly create an instance of the Pizza class
  const myPizza = new Pizza(); // Creates a Pizza with default size "medium"
  myPizza.bake(); // Output: Bake a medium Pizza
  
  // Create another instance with a specified size
  const largePizza = new Pizza("large");
  largePizza.bake(); // Output: Bake a large Pizza
  
  
  
  
  
  
  
  const anotherPizza = new Pizza();
  
  // Assuming you want to set the size property before calling bake
  anotherPizza.size = "large"; // You can set the size to any desired value
  anotherPizza.bake(); // Output: Bake a large
  
  

  
 
    Defining the function:
  function Sum(num1, num2) {
  }
   Calling the function:
  Sum(3, 6); // 9
  console.log(Sum(3, 6)); // Outputs: 9
  
  
  const printHello = () => { 
    console.log('hello'); 
  }; 
  printHello(); // => hello
  
  // Anonymous function
  const rocketToMars = function() {
    console.log ("BOOM!");
  }
  rocketToMars("function");
  

  

  const sum = (param1, param2) => { 
    return param1 + param2; 
  }; 
  console.log(sum(2,5)); // => 7 
  
   */  
  
  