import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../custom hooks/useFetch";

const GroceryDescription = () => {

    let {prid} = useParams();

    let{data : grocery , error , pending} = useFetch("http://localhost:4000/groceries/"+prid);

    return ( <div className="grocery-desc">

                {error && <h1>{error}</h1>}

                {pending && <div id="loader"></div>}

                {/* template to show grocery details */}

            </div> );
}
 
export default GroceryDescription;