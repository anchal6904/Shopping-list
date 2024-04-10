import {useState} from "react";
const Head=({handleaddItems})=>{ 
    const [product,setProduct] = useState("");
    const [quantity,setQuantity]=useState(1);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(product){
            const newTodo={
                id:Date.now(),
                packed:false,
                product,quantity
            }; 
            handleaddItems(newTodo);
            setProduct("");
            setQuantity(1);
        }
    };
    return(
            <form className="form" onSubmit={handleSubmit}>
                <select onChange={(e)=>setQuantity(+e.target.value)} className="select" value={quantity}>
                    {[...Array(20)].map((_,index)=>(
                        <option value={index+1} key={index+1}>{index+1}</option>
                    ))}
                </select>
                <input onChange={(e)=>setProduct(e.target.value)} type="text" className="input" placeholder="Enter a name" value={product}></input>
                <button className="addbtn">Add</button>
            </form>
    );
};
export default Head;
