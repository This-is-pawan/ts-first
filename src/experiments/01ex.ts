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







