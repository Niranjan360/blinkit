import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../custom hooks/useFetch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateGrocery from "./UpdateGrocery";

const GroceryDescription = () => {

    let[popup , setPopup] = useState(false);
    let {prid} = useParams();
    let navigate = useNavigate();
    let{data : grocery , error , pending} = useFetch("http://localhost:4000/groceries/"+prid);

    let handleDeleteGrocery = ()=>{
        let res = window.confirm("Are you sure ! Do you want to delete data from DB");
        if(res)
        {
            fetch("http://localhost:4000/groceries/"+prid , {method :"DELETE" })
            .then(()=>{
                toast("Data deleted from DB.")
                setTimeout(()=>{ navigate("/") }  , 3000)
            })
        }
    }

    return ( <div className="grocery-desc">
                {error && <h1>{error}</h1>}

                {pending && <div id="loader"></div>}

                {grocery && <div className="description">
                                <div className="g-img">
                                    <img src={grocery.image} alt="" />
                                </div>
                                <div className="g-details">
                                    <h1>{grocery.gname}</h1>
                                    <h2>{grocery.price}</h2>
                                    <h2>{grocery.unit}</h2>
                                    <p>{grocery.desc}</p>
                                    <button className="delete-btn" onClick={handleDeleteGrocery}> Delete Grocery </button>
                                    <button className="update-btn" onClick={()=>{setPopup(true)}}> Update Grocery </button>

                                </div>
                            </div>}

                {popup && <UpdateGrocery grocery={grocery} setPopup={setPopup}/>}


            <ToastContainer />
            </div> );
}
 
export default GroceryDescription;