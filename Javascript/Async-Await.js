function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 200);
    });
  }
  
  const msg = async function() { //Async Function Expression
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  const msg1 = async () => { //Async Arrow Function
    const msg = await helloWorld(2);
    console.log('Message:', msg);
  }
  
  msg(); // Message: Hello World! <-- after 2 seconds
  msg1(); // Message: Hello World! <-- after 2 seconds
  
  // Prints 3 thrice, not what we meant.

