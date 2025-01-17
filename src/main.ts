import "./style.css";
// import './style.css'
// // import   './experiments/01ex'
// import  './experiments/01ex'
// import ex from './experiments/01ex'
// // console.log(ex);

// interface products {
//   products:String,
//   price:number,
//   quality:string,
// }

// const Product:products = ex;
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

//   <div>
//    MY TYPESCRIPT EXPERIMENT
//    <h2>${Product.products}</h2>
//    <h4>${Product.price}</h4>
//    <h5>${Product.quality}</h5>
//    <button class="btn">${Product.products}</button>
//   </div>
// `
import "./style.css";
// import   './experiments/01ex'
import "./experiments/01ex";

import "./experiments/01ex";
import ex from "./experiments/01ex";
// console.log(ex);

interface products {
  name: String;
  class: String;
  rollno: number;
  marks: number;
  percentage: String;
}


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
const Product: products[] = ex;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   

   MY TYPESCRIPT EXPERIMENT
  ${Product.map((item) => {
    console.log(item);
    return `
    <h3>${item.name}</h3>
    <span>${item.marks}</span>
    <h5>${item.rollno}</h5>
    <h6>${item.class}</h6>
    <span>${item.percentage}</span>

    `;
  })}
  <br>  <br>
  <button>click</button>

  </div>
`;
//  <h2>${Product.name}</h2>
//  <h4>${Product.rollno}</h4>
//  <h5>${Product.percentage}</h5>
//  <button class="btn">${Product.class}</button>
`;



