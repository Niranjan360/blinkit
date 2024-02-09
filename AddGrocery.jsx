import { useRef } from "react";

const AddGrocery = () => {

    let gname = useRef();
    let price = useRef();
    let unit = useRef();
    let image = useRef();
    let desc = useRef();
    let type = useRef();
    let life = useRef();

    let handleAddGrocery = (e)=>{
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
            method : "POST",
            header : {"Content-Type":"application/json"},
            body : JSON.stringify(grocery)
        }

        fetch("http://localhost:4000/groceries" , config)
        .then(()=>{})
        .catch(()=>{})

    }


    return ( <div className="add-grocery-cont">
                <h1>Add New Grocery</h1>

                <form onSubmit={handleAddGrocery}>
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

                    <input type="submit" value="Add grocery"/>
                </form>
            </div> );
}
 
export default AddGrocery;