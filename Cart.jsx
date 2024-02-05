import { useEffect, useState } from "react";

const Cart = () => {

    let[cartItems , setCartItems] = useState(null);
    let[cartPrice , setCartPrice] = useState(0);


    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("cartItems"));
        setCartItems(data);
        let sum = data.reduce( (sum,v)=>{return sum + v.price * v.quantity } , 0);
        setCartPrice(sum);
    } , [])

    let increaseQuantity = (grocery)=>{
        // update the quantity for one object
        let temp = [...cartItems];
        let i = temp.findIndex((v)=>{return v.id==grocery.id});
        temp[i].quantity++;
        setCartItems(temp);

        // update total cart price
        let sum = temp.reduce( (sum,v)=>{return sum + v.price * v.quantity } , 0);
        setCartPrice(sum);

        // reflect the data back to LS 
        localStorage.setItem("cartItems" , JSON.stringify(temp));
    }

    let decreaseQuantity = (grocery)=>{
        // update the quantity for one object
        let temp = [...cartItems];
        let i = temp.findIndex((v)=>{return v.id==grocery.id});
        temp[i].quantity--;
        setCartItems(temp);

        // update total cart price
        let sum = temp.reduce( (sum,v)=>{return sum + v.price * v.quantity } , 0);
        setCartPrice(sum);

        // reflect the data back to LS 
        localStorage.setItem("cartItems" , JSON.stringify(temp));
    }

    return ( <div className="cart-products">

                {cartItems && cartItems.length==0 && 
                <div className="no-items">
                    <img src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png" 
                    alt="" width="500px" height="500px"/>
                    <h1>You don't have any items in your cart</h1>
                    <p>Your favourite items are just a click away</p>
                </div>}

                {cartItems && cartItems.length!=0 &&
                <div className="cart-container">
                    <h1>Your Cart List</h1>
                    <div className="cartitem-list">
                    {
                        cartItems.map((v,i,a)=>{
                            return <div className="cartitem">
                                        <img src={v.image} alt="" />
                                        <div className="description">
                                            <h2>{v.gname}</h2>
                                            <p>unit : {v.unit}</p>
                                            <p>Amount : {v.price} &#8377; / {v.unit}</p>
                                            <h3>{v.price * v.quantity} &#8377;</h3>
                                            <h3>
                                                <button onClick={()=>{decreaseQuantity(v)}}>-</button>
                                                {v.quantity} 
                                                <button onClick={()=>{increaseQuantity(v)}}>+</button>
                                            </h3>
                                        </div>
                                    </div> })
                    }
                    </div>

                    <h2>Total Cart Price :  {cartPrice}</h2>
                    <button> checkout </button>
                </div> }

            </div> );
}
 
export default Cart;