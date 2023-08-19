const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  person2.firstName = "Simon";
  console.log(person1);
  console.log(person2);

//per gli oggetti, come per le funzioni, vale la proprietà "pass by reference". 
//Per questo motivo, il cambiamento di un valore che equivale ad un altro agisce direttamente su quello originale.