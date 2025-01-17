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











