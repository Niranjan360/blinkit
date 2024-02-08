import { useEffect, useState } from "react";

const useFetch = (api) =>                                                       // accept dynamic api
{
    let[data , setData] = useState(null);                                       // use genric names to save data
    let[pending , setPending] = useState(true);
    let[error , setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(api)                                                         // fetch data based on dynamic api passed in param
            .then((res)=>{
                console.log("then");
                if(res.ok)
                {
                    return res.json();
                }
                throw new Error("Sorry !! Invalid request")
            })
            .then((data)=>{ setData(data);    setPending(false);})            // save the data to state
            .catch((err)=>{ setError(err.message); setPending(false);})
            
        } , 1000)   

       if(localStorage.getItem("cartItems")==null)
       {
            localStorage.setItem("cartItems", "[]");
            localStorage.setItem("items", "[]");
       }
    } , [])

    return {data , pending , error}                                          // return data , error & pending as object properties
}
 
export default useFetch;