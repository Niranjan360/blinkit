import { useEffect, useState } from "react";

const Home = () => {
    let[groceries , setGroceries] = useState(null);
    let[pending , setPending] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json();})
            .then((data)=>{
                console.log(data);  
                setGroceries(data);
                setPending(false);
            })   
        } , 3000)
    } , [])

    return ( <div className="home-cont">

                {pending && <div id="loader"></div>}

                {groceries &&   <div className="grocery-list">
                                    <h1>All Grocery</h1>
                                    <div className="card-list">
                                    {
                                        groceries.map((v,i,a)=>{
                                            return(<div className="card" key={i}>
                                                        <img src={v.image} alt="" />
                                                        <h2>{v.gname}</h2>
                                                        <h3>{v.price} &#8377; </h3>
                                                    </div>)
                                        })
                                    }    
                                    </div>
                                </div> }
            </div> );
} 
 
export default Home;
