import { useState } from "react";
import Carts from "./carts"


const Cartform =()=>{

    const[title,setTitle] = useState("");

    const handletitle =(event)=>{
        // console.log(event.target.value)
        setTitle(event.target.value)
    }
    
   const [ discountedPrice, setDiscountedPrice] = useState(0);
   
   const handleDiscounted =(event)=>{

if(handleDiscounted <1){
    return;
}
   setDiscountedPrice(event.target.value)

   }
  

   const [ originalPrice, setOriginalPrice] =useState(0);


   const handleOriginal=(event)=>{
 if (handleOriginal<1){
    return;
 }
   setOriginalPrice(event.target.value);
      

}

const [thumbnail, setThumbnail]= useState("");
const handleThumbnail=(event)=>{
    setThumbnail(event.target.value)
}

//setting items 
const [item,setItem] =useState({
    discountedPrice: 400,
    originalPrice:700,
    title:"Product Title",
    thumbnail:"product.png"

})




const submitForm=(event)=>{
    event.preventDefault();
    //prohobits the relaoding of the page
    console.log(title,discountedPrice,originalPrice,thumbnail);
    //the page will be refreshed so add prevent default
    setItem({
        title,discountedPrice,originalPrice,thumbnail
    })
}

//for setting items in card




return(

<div className="form-container">
<form className="form-main" onSubmit={submitForm}>
    <h2 className="item-form-heading">Item Card Adder</h2>

<label htmlFor="title">Title</label>
<input type="text" placeholder="Enter the product Title" onChange={handletitle}  required/>

<label htmlFor="title">Discounted Price</label>
<input type="text" placeholder="Enter the discounted price" onChange={handleDiscounted}  required/>

<label htmlFor="title">Original Price</label>
<input type="text" placeholder="Enter the original price" onChange={handleOriginal} required/>

<label htmlFor="title">thumbnail</label>
<input type="text" placeholder="Enter the Thumbnail" onChange={handleThumbnail} required/>


<button className="submit-btn">Submit</button>

</form>

<Carts data={item}></Carts>
</div>



)
}

export default Cartform;









