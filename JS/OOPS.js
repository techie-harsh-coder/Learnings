//                                                  (Objects in JS & OOPs in JS)

// const car = {
//   make: "Maruti",
//   model: "Dezire",
//   Manufacture: 1999,
//   start: function () {
//     console.log(`${this.model} has started`);
//   },
//   stop: function () {
//     console.log(`${this.model} has stopped`);
//   },
//   accersories:{
//     available: 3,
//     inUse:7
//   },
//   color:["red","blue","black"]
// };
 
// // const key = "model";
// // console.log(car["make"]);
// // console.log(car.make);
// // console.log(car[key]);
// // // console.log(typeof car.color);
// // console.log(car.accersories.inUse);
// // console.log(car.color[2]);

// // const car1 = {
// //   Name: "Suzuki",
// //   make: "Maruti",
// //   year: 1998,
// // };
// // const car2 = {
// //   Name: "Verna",
// //   make: "Hyndai",
// //   year: 1998,
// // };
// // const car3 = {
// //   Name: "Slavia",
// //   make: "Skoda",
// //   year: 1998,
// // };
// // const car4 = {
// //   Name: "i10",
// //   make: "Hyundai",
// //   year: 1998,
// // };
// // const car5 = {
// //   Name: "Defender",
// //   make: "Land Rover",
// //   year: 1998,
// // };

//                                         <-------- Constructor in JS ----------->
// function Car(make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.start = function(){
//         console.log(`${this.make} has started`);
//     };
//     this.stop = function () {
//       console.log(`${this.make} has stopped`);
//     };
// };

//                                         <-------- Classes in JS ----------->

// class Car{
//     constructor(make,model,year,price){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.price = price
//     }
//     start(){
//         console.log(`${this.make} has started`);
//     }
//     stop(){
//         console.log(`${this.make} has stopped`);
//     }
//     tax(tax){
//         console.log(`Actual Price => ${this.price} , ${this.model} price after tak imposed => ${this.price + (this.price * (tax/100))}`);
//     }
// }
// const car1 = new Car("Suzuki","Maruti800",1999,10000);
// const car2 = new Car("Suzuki", "Fortuner", 1996,80000);
// const car3 = new Car("Hyundai", "Creta", 2000,100000);
// const car4 = new Car("Honda", "Amaze", 2013,60000);
// const car5 = new Car("Honda", "City", 2010,95000);
// car1.tax(1.5);
// car2.tax(5);
// car3.tax(15);
// car4.tax(10);
// car5.tax(8);

//                                            <-------- static keyword in JS ----------->
// Example 1 ----->>
// class Circle{
//     static PI = 3.12;

//     circumference(r){
//         return 2*Circle.PI*r;
//     }

//     static area(r){
//         return Circle.PI * Math.pow(r,2);
//     }
// }

// const circle1 = new Circle();
// console.log(circle1.circumference(12));
// console.log(Circle.area(12));
// console.log(Circle.PI);

// Example 2 ----->>
// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++
//     }

//     sayHello(){
//         return `Hello ${this.username} , You are ${User.userCount} number of user`
//     }
// }

// const user1 = new User('Ramesh');
// console.log(user1.sayHello());
// const user2 = new User("Suresh");
// const user3 = new User("Mahesh");
// console.log(user3.sayHello());

// const user4 = new User("Paresh");

// console.log(User.userCount);


//                                            <-------- Inheritance in JS ----------->

// class Animal {
//     alive = true;
//   eat(name) {
//     console.log(`${name} eats`);
//   }
//   sleep(name) {
//     console.log(`${name} sleeps`);
//   }
// }

// class Aquatic extends Animal {
//   //   constructor(name) {
//   //     this.name = name;
//   //   }
//   swim() {
//     console.log("These animals can swim");
//   }
// }

// class Terrestrial extends Animal{
//     // constructor(name){
//     //     this.name = name;
//     // }
//     run(){
//         console.log("These animals can run");
//     }
// }

// class Aerial extends Animal {
//   //   constructor(name) {
//   //     this.name = name;
//   //   }
//   fly() {
//     console.log("These animals can fly");
//   }
// }

// const lion = new Terrestrial();
// const eagle = new Aerial();
// const dolphin = new Aquatic();

// lion.eat('lion');
// eagle.eat("eagle");
// dolphin.eat("dolphin");

// lion.sleep("lion");
// eagle.sleep("eagle");
// dolphin.sleep("dolphin");

// lion.swim();
// dolphin.swim();
// eagle.fly();



//                                           <-------- super keyword in JS --------->

// class Animal {
//     alive = true;
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//   eat() {
//     console.log(`${this.name} eats`);
//   }
//   move(speed){
//     console.log(`The ${this.name} moves at ${speed}kmph`)
//   }
//   sleep() {
//     console.log(`${this.name} sleeps`);
//   }
// }

// class Aquatic extends Animal {
//     constructor(name,age,swimSpeed) {
//         super(name,age);
//       this.swimSpeed = swimSpeed;
//     }
//   swim() {
//         console.log(`${this.name} can swim`);
//         super.move(this.swimSpeed);
//   }
// }

// class Terrestrial extends Animal{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`${this.name} can run`);
//         super.move(this.runSpeed);

//     }
// }

// class Aerial extends Animal {
//     constructor(name,age,flySpeed) {
//       super(name,age);
//       this.flySpeed = flySpeed;
//     }
//   fly() {
//     console.log(`${this.name} can fly`);
//         super.move(this.flySpeed);

//   }
// }

// const lion = new Terrestrial('Lion',10,50);
// const eagle = new Aerial('eagle',12,70);
// const dolphin = new Aquatic('Dolphin',20,88);

// lion.eat();
// dolphin.sleep()
// lion.run();
// dolphin.swim();
// eagle.fly()


//                                          <-------- getters & setters in JS --------->

// Example 1 ---->
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   get height() {
//     return this._height;
//   }

//   get width() {
//     return this._width;
//   }
//   get area(){
//     return this._height * this._width;
//   }
//   set width(newWidth) {
//     if (newWidth > 0 && typeof newWidth == "number") {
//       this._width = newWidth;
//     } else {
//       console.error(`Enter a valid width`);
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0 && typeof newHeight == "number") {
//       this._height = newHeight;
//     } else {
//       console.error(`Enter a valid height`);
//     }
//   }
// }

// const rect1 = new Rectangle(-1000,20);

// // console.log(rect1.height);
// console.log(rect1.width);
// console.log(rect1.height);
// console.log(rect1.area);

// Example 2 ----->
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  set firstName(newFirstName) {
    if (newFirstName.length > 2 && typeof newFirstName == "string") {
      this._firstName = newFirstName;
    } else {
      console.error(`Enter a valid first Name`);
    }
  }

  set lastName(newLastName) {
    if (newLastName.length > 2 && typeof newLastName == "string") {
      this._lastName = newLastName;
    } else {
      console.error(`Enter a Valid last Name`);
    }
  }
}

const user1 = new User("rahul", "grover");

console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.fullName)








