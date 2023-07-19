import { useState } from "react";
import Cartlist from "./Cartlist"
const Cartform =()=>{

//     const[title,setTitle] = useState("");

//     // const handletitle =(event)=>{
//     //     // console.log(event.target.value)
//     // //     setTitle(event.target.value)
//     // // }
    
// //    const [ discountedPrice, setDiscountedPrice] = useState(0);
   
// //    const handleDiscounted =(event)=>{
  

// //    setDiscountedPrice(event.target.value)

//    }
  

//    const [ originalPrice, setOriginalPrice] =useState(0);
   

//    const handleOriginal=(event)=>{
  
// //    setOriginalPrice(event.target.value);
      

// }

// const [thumbnail, setThumbnail]= useState("");
// const handleThumbnail=(event)=>{
//     // setThumbnail(event.target.value)
// }

//setting items 
const [item,setItem] =useState({
    discountedPrice:400,
    originalPrice:700,
    title:"Product Title",
    thumbnail:"product.png"

})

const handleInput =(event)=>{
    
    setItem({...item,
    [event.target.name]:event.target.value})
}


const submitForm=(event)=>{
    event.preventDefault();
    if(item.discountedPrice > item.originalPrice){
        alert("original price should not exceed discount price")
    }
    //prohobits the relaoding of the page
    // console.log(title,discountedPrice,originalPrice,thumbnail);
    //the page will be refreshed so add prevent default
    // setItem({
    //     title,discountedPrice,originalPrice,thumbnail
    // })
}
//for setting items in card
return(
<div className="form-container">
<form className="form-main" onSubmit={submitForm}>
    <h2 className="item-form-heading">Item Card Adder</h2>

<label htmlFor="title">Title</label>
<input 
        type="text" 
        placeholder="Enter the product Title"
        onChange={handleInput}
        //name for above input
        name="title"
        value={item.title}  
        required/>

<label htmlFor="discountedPrice">Discounted Price</label>
<input type="number" 
       placeholder="Enter the discounted price" 
       onChange={handleInput}  

       name="discountedPrice"
       value={item.discountedPrice} 
       required/>

<label htmlFor="originalPrice">Original Price</label>
<input type="number" 
       placeholder="Enter the original price" 
       onChange={handleInput} 

       name="originalPrice"
       value={item.originalPrice} 
       required/>

<label htmlFor="thumbnail">thumbnail</label>
<input type="text" 
       placeholder="Enter the Thumbnail" 
       value={item.thumbnail} 

       name="thumbnail"
       onChange={handleInput} 
       required/>


<button className="submit-btn">Submit</button>

</form>

<Cartlist data={item}></Cartlist>
</div>



)
}

export default Cartform;









