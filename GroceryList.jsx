const GroceryList = ({groceries , title}) => {

    return (  <div className="grocery-list">
                <h1>{title}</h1>
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
            </div> );
}
 
export default GroceryList;