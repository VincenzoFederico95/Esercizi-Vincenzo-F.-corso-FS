function printAsyncName(callback, string) {
    const callInterval = setInterval(() => {
      callback();
    }, 1000);
    const nameInterval = setInterval(() => {
      console.log(string);
    }, 2000);
  }
  
  const sayHello = () => console.log("hello");
  printAsyncName(sayHello, "Chris"); 