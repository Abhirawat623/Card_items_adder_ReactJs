import { useState } from "react";

const Cartlist =({data})=>{

const [counter , setCounter ] = useState(0);

const increasedByOne = ()=>{
    setCounter(counter+1);
}

const decreasedByOne= ()=>{
if(counter ===0){
    return;}
    

setCounter(counter-1);


}




return(
  <div className={"card-container"}>
   <img className={"image"} src={"/imagelogos/"+data.thumbnail} alt="product name" width="200px" height="200px"/>
   {/* //can use literal also `/imaelogos/${data.thmbnail} */}
 
  <div className={"prices"}>
   <span className={"new-price"}>Rs.{data.discountedPrice}</span>
       <small className={"old-price"}>
       <strike>Rs.{data.price}</strike>
       </small>
   </div>
   <div className="lower-cart">
   <h1 className="product-name">{data.title}</h1>
   <div className="counter-btns">
   <button className="counter-btn" onClick={decreasedByOne}>-</button>
    <p className="counter-container">{counter}</p>
    <button className="counter-btn" onClick={increasedByOne}>+</button>
    

   </div>
   {/* <button className="add-to-cart-btn"><span>
   Add To Cart</span><img src="/imagelogos/R.png" alt="logo" width="15px" height="15px"/></button> */}
   </div></div>


)
}
export default Cartlist;