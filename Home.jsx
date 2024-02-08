import { useEffect, useState } from "react";
import GroceryList from "./GroceryList";
import useFetch from "../custom hooks/useFetch";
import Adds from "./Adds";

const Home = () => {
    
    let{data:groceries , error , pending} = useFetch("http://localhost:4000/groceries")

    return ( <div className="home-cont">

                {error && <h1>{error}</h1>}

                {pending && <div id="loader"></div>}

                {groceries && <Adds/>}

                {groceries &&  <GroceryList groceries={groceries} title="All Grocery"/> }

                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="fruit")} title="Fruits"/> }

                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="vegetable")} title="Vegetable"/> }

            </div> );
} 
 
export default Home;