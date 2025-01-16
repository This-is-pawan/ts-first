import './style.css'
// import   './experiments/01ex'
import  './experiments/01ex'
import ex from './experiments/01ex'
// console.log(ex);

interface products {
  products:String,
  price:number,
  quality:string,
}

const Product:products = ex;
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

  <div>
   MY TYPESCRIPT EXPERIMENT
   <h2>${Product.products}</h2>
   <h4>${Product.price}</h4>
   <h5>${Product.quality}</h5>
   <button class="btn">${Product.products}</button>
  </div>
`


