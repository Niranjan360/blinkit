import { useEffect, useState } from "react";
import useFetch from "../custom hooks/useFetch";
import GroceryList from "./GroceryList";

const SearchGrocery = () => {

    let[groceries , setGroceries] = useState(null);
    let[keyword , setKeyword] = useState("");

    useEffect(()=>{
        fetch("http://localhost:4000/groceries")
        .then(res=>res.json())
        .then((data)=>{
            setGroceries(data.filter((v)=>{    return v.gname.toLowerCase().includes(keyword.toLowerCase()) ||
                                                      v.type.toLowerCase().includes(keyword.toLowerCase())
              }))
        });
    } , [keyword])     

    return ( <div className="search-cont">
                <div className="searchbar">
                    <label>Search</label>
                    <input type="text" placeholder="Search for any Grocery / Items"
                    value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}/>
                </div>

                {groceries && keyword!="" && groceries.length!=0 && <GroceryList groceries={groceries} title="Search result"/>}

                {(keyword=="" || groceries.length==0) && <img src="https://blinkit.com/57070263a359a92dc0fe.png" 
                                width="300px" height="300px"/>}

            </div>  );
}
 
export default SearchGrocery;