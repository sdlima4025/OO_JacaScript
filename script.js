// Classe - Template Molde Modelo
 class Person {
    // variavéis Globais
    age = 10;
    // steps = 0;

    constructor(name) {
        this.name = name;
    }
 }
// Classes Herança
    class Stundent extends Person {

        constructor(name, id) {
            super(name);
            this.id = id;
        }
    }


    // constructor(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    // Ações do contrutor
    // takeAStep() {
    //     this.steps++;
    // }
    // get fullName() {
    //     return(`${this.firstName} ${this.lastName}`);
    // }
    // get age() {
    //     return this._age;
    // }
    // set age(x) {
    //     if(typeof x === 'number') {
    //         this._age = x;

    //     }else {
    //         console.log("O Campo só aceita Números!")
    //     }
    // }

    // setAge(newAge) {
    //     if(typeof newAge == 'number') {
    //         this.age = newAge;
    //     }else {
    //         console.log("O campo sóm aceita Números!");
    //     }
    // }


 // Instâmcia da classe | p1 é a criação de Objeto.
//  let p1 = new Person("Sérgio", "Lima");
//  let p2 = new Person("Gilton", "Lima");
//  let p3 = new Person("Reinaldo", "Lima");

//  p1.age = '52';
//  console.log(`${p2.fullName} tem ${p1.age} anos!`);

 
//  p1.takeAStep();
//  console.log(`Passos de ${p1.name}: ${p1.steps}`);
//  console.log(`Passos de ${p2.name}: ${p2.steps}`);
 
//  p1.age = 52;
//  console.log(`${p1.name} tem ${p1.age} anos`);
//  console.log(`${p2.name} tem ${p2.age} anos`);
//  console.log(`${p3.name} tem ${p3.age} anos`);
