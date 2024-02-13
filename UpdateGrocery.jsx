import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateGrocery = ({grocery , setPopup}) => {

    let gname = useRef();
    let price = useRef();
    let unit = useRef();
    let image = useRef();
    let desc = useRef();
    let type = useRef();
    let life = useRef();

    let navigate = useNavigate();

    useEffect(()=>{
        gname.current.value = grocery.gname;
        price.current.value = grocery.price;
        unit.current.value = grocery.unit;
        image.current.value = grocery.image;
        desc.current.value = grocery.desc;
        type.current.value = grocery.type;
        life.current.value = grocery.shelf_life;
    } , [])

    let handleUpdateGrocery = (e)=>{
        e.preventDefault();
        let grocery = {
            gname: gname.current.value,
            price: price.current.value,
            unit: unit.current.value,
            image: image.current.value,
            desc: desc.current.value,
            type: type.current.value,
            shelf_life: life.current.value
        }
        let config = {
            method : "PUT",
            header : { "Accept-Type":"application/json" , "Content-Type":"application/json" },
            body : JSON.stringify(grocery)
        }
        fetch("http://localhost:4000/groceries/"+grocery.id , config)
        .then(()=>{
            toast.success("Data Update successfuly to the DB");
            window.location.reload();
        })
    }

    return ( <div className="update-grocery-cont">
                <h1>Update Grocery</h1>
                <form onSubmit={handleUpdateGrocery}>
                    <div className="inp-grp">
                        <label>Grocery Name</label>
                        <input type="text" ref={gname} required/>
                    </div>
                    <div className="inp-grp">
                        <label>Grocery Price</label>
                        <input type="number" ref={price}/>
                    </div>
                    <div className="inp-grp">
                        <label>Unit</label>
                        <select ref={unit}>
                            <option>--select--</option>
                            <option value="1">l</option>
                            <option value="ml">ml</option>
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                            <option value="piece">piece</option>
                        </select>
                    </div>
                    <div className="inp-grp">
                        <label>Grocery Image</label>
                        <input type="url" ref={image}/>
                    </div>
                    <div className="inp-grp">
                        <label>Grocery Description</label>
                        <textarea name="" cols="20" rows="5" ref={desc}></textarea>
                    </div>
                    <div className="inp-grp">
                        <label>Type</label>
                        <select ref={type}>
                            <option>--select--</option>
                            <option value="fruit">fruit</option>
                            <option value="vegetable">vegetable</option>
                            <option value="dairy">dairy</option>
                            <option value="Soft drink">Soft drink</option>
                            <option value="snack">snack</option>
                        </select>
                    </div>
                    <div className="inp-grp">
                        <label>Shelf life</label>
                        <input type="number" ref={life}/>
                    </div>

                    <input type="submit" value="Update grocery"/>
                </form>
                <button onClick={()=>{setPopup(false)}}> close </button>
                <ToastContainer />
            </div> );
}
 
export default UpdateGrocery;