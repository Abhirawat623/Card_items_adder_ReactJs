import Cartlist from "./CartList";
const Carts =()=>{
 return(
<div className="cart-lists">
    <div className="cart-lists-wrapper">
<Cartlist data={
{
  discountedPrice: 500,
  price:800,
  title:"Product Title",
  thumbnail:"product.png"
}
     }/>


</div></div>

    )
}

export default Carts;