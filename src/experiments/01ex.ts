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









