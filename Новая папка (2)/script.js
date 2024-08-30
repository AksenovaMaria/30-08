// let a = {
// name: "Masha",
// color: "red"
// }

// let b = {
//     __proto__: a,
//     fontSize: "40px"
// }

// console.log(b);
// console.log(b.hasOwnProperty("fontSize"));




// const employee = {
//     name: null,
//     job: null,
// }

// class Employee {
//     constructor(name, job="нет работы"){
//         this.name = name;
//         this.job = job;
//     }
//     info (){
//         console.log(`Привет, ${}`)
//     }
// }

//  const user = new Employee("Маша", "Веб-разработчик");
//  console.log(user);





//  class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     info(){
//         console.log(`это животное-  ${this.name}`);
//     }
    
//  }


//  class Dog extends Animal {
//     constructor(name, age){
//         this.age = age;
//         super(name);
//     }

//     speak(){
//         console.log(`Собака ${this.name}, ${this.age} лает`)
//     }
//  }

//  const Dog = new dog ("Lon" , 5);
//  dog.info();
//  dog.speak();



// class Animal {
//     constructor (name = "Нет значений", age = "Нет значений"){
//         this.name = name;
//         this.age = age;
//     }
//     makeSound(){
//         console.log("Животные издают разные звуки")
//     }
//     move(){
//         console.log("move");
//     }
// }

// class Dog extends Animal{
//     constructor(name, age){
//         super(name, age)
//     }
//     makeSound(){
//         console.log("Собака лает" + this.name);
//     }

//     move(){
//         console.log("move")
//     }
// }

// class Cat extends Animal{
//     constructor(name, age){
//         super(name, age)
//     }
//     makeSound(){
//         console.log("Кот мяукает" + this.name);
//     }
    
// }

// class Bird extends Animal{
//     constructor(name, age){
//         super(name, age)
//     }
//     makeSound(){
//         console.log("Птица чирикает" + this.name);
//     }
    
// }


// const dogs = new Dog ("Buddy", 5); 
// const cat = new Cat ("jon", 10); 
// const bird = new Bird ("Ivan", 3); 




// dogs.makeSound();
// cat.makeSound();
// bird.makeSound();
// dogs.move();





class Employee{
    constructor(name, surname, salary){
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }
    dataEmloy(){
        console.log(`mane ${this.name}; surname ${this.surname}; salary ${this.salary};`);
    }
}

const emp = new Employee ("Jon", " Marker", " 100000");

emp.dataEmloy();


