import { useEffect, useState } from "react";
import GroceryList from "./GroceryList";

const Home = () => {
    let[groceries , setGroceries] = useState(null);
    let[pending , setPending] = useState(true);
    let[error , setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/groceries")
            .then((res)=>{
                console.log("then");
                if(res.ok)
                {
                    return res.json();
                }
                throw new Error("Sorry !! Invalid request")
            })
            .then((data)=>{ setGroceries(data);    setPending(false);})   
            .catch((err)=>{ setError(err.message); setPending(false);})
            
        } , 3000)   

       if(localStorage.getItem("cartItems")==null)
       {
            localStorage.setItem("cartItems", "[]");
       }
    } , [])

    return ( <div className="home-cont">

                {error && <h1>{error}</h1>}

                {pending && <div id="loader"></div>}

                {groceries &&  <GroceryList groceries={groceries} title="All Grocery"/> }

                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="fruit")} title="Fruits"/> }

                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="vegetable")} title="Vegetable"/> }

            </div> );
} 
 
export default Home;