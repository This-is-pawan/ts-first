 // console.log('this is a code of ts');
let text: String = "This is a code of typescript";
// we can also overide this text e.g
text = "https://github.com/This-is-pawan";
// let a=text.charAt(3);
// let a=text.replace('/This-is-pawan','htknksdjjnk');
let app:any='this is  code of ts';
app=673426563;
 app=[{
 name:'This is code ts ',
 class:'12th',
 rollno:234,
 marks:324,
 percentage:'80%',
}]

// type datas = {
//   products: String;
//   price: number;
//   quality: number;
// };
// const data: datas = {
//   products: "products is milk",
//   price: 23,
//   quality:1,
// };

const target = (ts:any): string => {

 return ts; 
};
let expt=target(app)
  export default  expt
// console.log(data);

console.log(text);
let num1: number = 4387;
let num2: number = 9843;
console.log(num1 + num2);
let bol: boolean = num1 <= num2;
let result = !bol;
console.log(result);



console.log(app);

// let car:[{brand:string,year:number,car:string}]=[{brand:'toyota',year:2021,car:'This is a car of japan'},{company:'mahindra',experiences:30,country:'This is a car of india '}]
// let cars:any[]=[...car]
// let ex=cars.map((item)=>item   )
// console.log(ex);
// that  is way is not allow 

let car: { brand: string; year: number; car: string }[] = [
  { brand: 'toyota', year: 2021, car: 'This is a car of japan' },
  { brand: 'mahindra', year: 2023, car: 'This is a car of india' },
];

let cars:any[] = [...car];
let ex = cars.map((item) => item);
console.log(ex);
// ########################### functions 
function calculate(price:type) {
 const hs=true;
 if (!hs){
  return 'this a code of ts'

 }
 return price*8
}
let final=calculate(234);
console.log(final);

function name(Num:any) {
 let another:number=8
 return Num + another
}

const re=name(9);
const someValue=re
console.log(someValue);
// someValue.myMethod(); //#####run time get error

#####const names:string[]=['john','jane','jim','jill'];
function isNameInList(name:string):boolean{
 return names.includes(name)
}
let nameTocheck='jane'
if (isNameInList(nameTocheck) ){
 console.log(`${nameTocheck} is in the list`);
}else{
 console.log(`${nameTocheck} is not the list`);
}
######
####function calculatePrice(price: number, discount?: number):number {
  return price - (discount || 0) ;
}
let priceAfterDiscount = calculatePrice(200, 20);

console.log(priceAfterDiscount);

function Price(price: number, discount: number):number {
 return price - (discount ) ;
}
let Discount = Price(200); // it will complaine number=0 above

console.log( Discount);
// ######



// function sum(message:string,...numbers:number[]):string{
// const doubled=numbers.map((num)=>num * 2)
// console.log(doubled);

// let total=numbers.reduce((p,c)=>{
//  return p + c
// },0)
// return `${message}${total}`
// }
// let res=sum('The total is:',1,3,4,56,)
// console.log(res);
// #####
// function processInput(input:string | number){
// console.log(input *2 );// it get an error  this sense is can not use in it
//  if (typeof input==='number') {
//   console.log(input * 2 )
//  }else{
// console.log(input);

//  }
// }
// processInput(10);
// processInput('hello');

// #####

// function createEmployee({id}:{id:number}):{id:number;isActive:boolean}{
// return {id,isActive:id % 2===0};
// }
// const first=createEmployee({id:1})
// const second=createEmployee({id:2})
// console.log(first,second);
// alternative #########
// function createStudent(student:{id:number,name:string,email:string}):void{
// console.log(`${student.id}) welcome to the course ${student.name.toUpperCase()}!!!!and ${student.email.toLowerCase()}`);

// }
// const newStudent={
//  id:1,
//  name:'anna',
//  email:'anna@gmail.com'
// }

// createStudent(newStudent)
// createStudent({id:2,name:'bob',email:'bea@gmail.com'})
// function process(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): string | number {
//   if (typeof input === "number") {
//     return input * input;
//   } else {
//     return config.reverse
//       ? input.toUpperCase().split("").reverse().join("")
//       : input.toUpperCase();
//   }
// }
// console.log(process(10));
// console.log(process("hee"));
// console.log(process("helo there", { reverse: true }));

// #####################
// type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };
// const john: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: { id: number; name: string; isActive: susan } = {
//   id: 1,
//   name: "john",
//   isActive: false,
// };
// console.log(john);
// function createUser(user: User):
// in this place use User type following{
//   id: number;
//   name: string;
//   isActive: boolean;
// } {
//   console.log(`hello there ${user.name.toLowerCase()}!!`);
//   return user;
// }
// function createUser(user: User):User {
//   console.log(`hello there ${user.name.toLowerCase()}!!`);
//   return user;
// }
// let users=createUser({id:1,name:'tah',isActive:true})
// console.log(users);
// ######### both of them use in it 
// type StringNumber=string | number;
// let value:StringOrNumber;
// value:'hello';
// value:123;

// type Theme = "light" | "dark";
// let theme: Theme = "dark";
// theme = "light";
// function setTheme(t: Theme) {
//   theme = t;
// }
// setTheme("dark");
// // #########

// @@@@@@@
// const propName='age';
// type Animal={[propName]:number;};
// let tiger:Animal={[propName]:5}

// console.log(tiger);
// ########### interface -fundametals
// allow to setup shape for objects (only object)

// interface Book {
// readonly isbn:number;
// title:string;
// author:string;
// genure?:string;
// // method
// printAuthor():void;

// }
// const deepwork:Book={
//   isbn:123,
//   title:'deep work',
//   author:'cal newport',
//   genure:'self-help',
//   printAuthor(){
//     console.log(this.author)
  
//   }
// };
// // deepwork.isbn='some value'
// deepwork.printAuthor()
// console.log(deepwork.isbn);

interface Book {
readonly isbn:number;
title:string;
author:string;
genure?:string;
// method
printAuthor():void;
printTitle(message:string):string;
printSomething:(someValue:number)=>number;
}
const deepwork:Book={
  isbn:123,
  title:'deep work',
  author:'cal newport',
  genure:'self-help',
  // printAuthor(){
  //   console.log(this.author)
  
  // },
  printTitle(message){
    return `${this.title} ${message}`
  },
  // first
  // printSomething:function(someValue){
  //   return someValue
  // }
  // second option
  // printSomething:(someValue)=>{
    // console.log(this);
  //   console.log(deepwork.author);
    
  //   return someValue
  // }
  //third option
printSomething(someValue){
return someValue
}
// printAuthor:()=>{
// console.log(deepwork.author);

// }

};
// console.log(deepwork.printSomething(34));


// deepwork.isbn='some value'
// deepwork.printAuthor('dklsjf')nothing return
// console.log(deepwork.isbn);

// const result=deepwork.printTitle('with ts code')
// console.log(result)
############# EMUM
enum ServerResponseStatus{
  Succees,
  Error,

}
console.log(ServerResponseStatus);

interface ServerResponse{
  result:ServerResponseStatus;
  date:string[];

}

function getServerResponse():ServerResponse{
  return {
    result:ServerResponseStatus.Succees,
    date:['first item','second item'],
  };
}
const response:ServerResponse=getServerResponse();
console.log(response);




// #############
interface ServerResponse{
  result:ServerResponseStatus;
  date:string[];

}

function getServerResponse():ServerResponse{
  return {
    result:ServerResponseStatus.Succees,
    date:['first item','second item'],
  };
}
const response:ServerResponse=getServerResponse();
console.log(response);


enum UserRole{
  Admin,
  Manager,
  Employee,
}
type User ={
  id:number;
  name:string,
  role:UserRole,
  contact:[string,string];

}
function createUser(user:User):User{
  return user
}
const user:User =createUser({
  id:1,name:'john doe',
  role:UserRole.Admin,
  contact:['john@gmail.com','123-45-789']
});


console.log(user);

let SomeValue:any='this is a string';
let strlength:number=(SomeValue as string).length;

type Bird={
  name:string;

}

let birdString='{"name":"Eagle"}'
let birdObject=JSON.parse(birdString);
let bed=birdObject as Bird //type insertion

console.log(bed);
console.log(bed.name);

// #######
function runSomeCode() {
  const radom=Math.random();
  if (radom<0.5) {
    throw new Error("there was error.....");
    
  } else {
    throw new Error("some er");
    
  }
}
try {
  runSomeCode()
  
  
} catch (error) {
  // console.log(error);
  if (error instanceof Error) {
    console.log(error.message);
    
  }else{
    console.log(error);
    
  }
}
  //  %%%%%%$%#%$#445645#3333333%%$%$$$
// import newStudent,{sayHello ,person,type Student}  from "./02ex";

//  ###### NOTE IF JS FILE IN EXPORT IN TS THEN USE ALLLOWJS in tsconfig.json ########## 
// sayHello('typescript')
// console.log(newStudent);

// console.log(person);
// // above and this both using in it with export  
// const anotherStudent:Student={
//   name:'bob',
//   age:23,
// }
// console.log(anotherStudent);
// first
type ValueType=string|number|boolean;
let value:ValueType;
const radom=Math.random();
value=radom < 0.33 ? 'Hello': radom <0.66 ? 123.456 : true;
function checkTheme(value:ValueType):void{
if (typeof value ==='string') {
  console.log(value.toLowerCase());
  return;
}
if (typeof value ==='number') {
  console.log(value.toFixed());
  return;
}
console.log(`boolean : ${value}`);
}
checkTheme(value)
// second
// type Dog ={type:'dog';name:string;bark:()=>void}
// type Cat ={type:'dog';name:string;meow:()=>void}
// type Animal = Dog|Cat
// function makeSound(animal:Animal){
//   if (animal.type ==='dog') {
//     animal.bark()
//   } else {
//     animal.meow()
//   }
// }

// function makeSound(animal:Animal){
//   if('bark' in animal){
//     animal.bark()
//   }
//   else{
//     animal.meow()
//   }
// }
// function printLength(str:string|null|undefined){
//   if(str){
//     console.log(str.length);
    
//   }else{
//     console.log('no string provided');
    
//   }

// }
// printLength('hello');
// printLength('');
// printLength(null);
// printLength();
// printLength(undefined);


// third
// try {
//   throw "This is an error";
//   // throw new Error("This is an error");
  
// } catch (error) {
//   if(error instanceof Error){
//     console.log(`caught an Error object:${
//       error.message}`);
    
//   }else{
//     console.log('unknown error...');
    
//   }
// }
// function checkInput(input:Date|string):string{
//   if(input instanceof Date){
// return input.getFullYear().toString()
//   }
//   return input
// }
// const year=checkInput(new Date())
// const random=checkInput('2025-01-19')
// console.log(year);
// console.log(random);

type Student={
  name:string;
  study:()=>void;
}
type User={
  name:string;
  login:()=>void;
}
type Person =Student | User;
const randomPerson=():Person =>{
  return Math.random()>0.5
  ?{name:'john',study:()=>console.log('studing')
  }:{name:'mary',login:()=>console.log('logging in')
}
}
// const person=randomPerson(); 
// OR
const person:Person={
  name:'anna',
  study:()=>console.log('study....'),
};

console.log(person);

function isStudent (person:Person):person is Student{
  // return 'study' in person
  return(person as Student).study !==undefined
}
if (isStudent(person)) {
  person.study();
}
else{
  person.login()
}
// end






































