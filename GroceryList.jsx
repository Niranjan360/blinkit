const GroceryList = ({groceries , title}) => {


    let addTocart = (grocery)=>{
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));

        if( cartItems.some( (v)=>{return v.id==grocery.id} ) == false)
        {
            cartItems.push(grocery);
            localStorage.setItem("cartItems" , JSON.stringify(cartItems));
            alert("new item added to cart");
        }
        else
        {
            alert("Itrm already in cart list !")
        }
    }

    return (  <div className="grocery-list">
                <h1>{title}</h1>
                <div className="card-list">
                {
                    groceries.map((v,i,a)=>{
                        return(<div className="card" key={i}>
                                    <img src={v.image} alt="" />
                                    <h2>{v.gname}</h2>
                                    <h3>{v.price} &#8377; </h3>
                                    <button onClick={()=>{addTocart(v)}}>Add</button>
                                </div>)
                    })
                }    
                </div>
            </div> );
}
 
export default GroceryList;