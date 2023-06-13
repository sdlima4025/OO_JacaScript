// Classe - Template Molde Modelo
 class Person {
    // variavéis Globais
    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
      
    }
    // Ações do contrutor
    takeAStep() {
        this.steps++;
    }
    setAge(newAge) {
        if(typeof newAge == 'number') {
            this.age = newAge;
        }else {
            console.log("O campo sóm aceita Números!");
        }
    }
 }

 // Instâmcia da classe | p1 é a criação de Objeto.
 let p1 = new Person("Sérgio");
 let p2 = new Person("Gilton");
 let p3 = new Person("Reinaldo");

p1.setAge(52);
 console.log(`${p1.name} tem ${p1.age} anos!`);

 
 p1.takeAStep();
 console.log(`Passos de ${p1.name}: ${p1.steps}`);
 console.log(`Passos de ${p2.name}: ${p2.steps}`);
 
//  p1.age = 52;
//  console.log(`${p1.name} tem ${p1.age} anos`);
//  console.log(`${p2.name} tem ${p2.age} anos`);
//  console.log(`${p3.name} tem ${p3.age} anos`);
//Objetos