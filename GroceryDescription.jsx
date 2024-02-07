import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GroceryDescription = () => {

    let {prid} = useParams();

    return ( <div className="grocery-desc">
        <h1>This is Grocery Description page</h1>
        <h2>{prid}</h2>
    </div> );
}
 
export default GroceryDescription;