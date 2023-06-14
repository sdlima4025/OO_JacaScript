// Classe: Template Molde Modelo
 class Person {

    // variavéis | Métodos static
    // static hands = 2;
    // variavéis Globais
    static age = 10;
    // steps = 0;

    constructor(name) {
        this.name = name;
    // }
    // sayHi() {
    //     console.log(`Oi, eu sou ${this.name} minha idade é: ${Person.age} anos  e tenho ${Person.hands} mãos!`);
    // 
    }
   
}
// classes: Factory
function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}
// Objeto do Factory createPerson
let p1 = createPerson("Sérgio", 52);
console.log(`${p1.name} tem ${p1.age} aos!`);
// let p1 = new Person("Sérgio");
// Person.age = 52;
// p1.sayHi();

// Classes|Função: Herança
    // class Stundent extends Person {

    //     constructor(name, id) {
    //         super(name);
    //         this.id = id;
    //     }
    //     sayHello() {
    //         super.sayHi();
    //         // console.log(`${this.name} é um estudadnte e diz Olá!`);
    //     }
    // }
    
    // let p1 = new Stundent("Sérgio", 1970);
    // p1.age = 52;
    // p1.sayHello();
    // console.log(`${p1.name} tem ${p1.age} anos e matricula  #${p1.id}`)

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
