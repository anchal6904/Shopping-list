const List=({item,handleDeleteItems,handleDoneItems})=>{
    const {quantity,product,packed,id}=item;
    return(
        <li className="listWrapper">
            <span>{quantity}</span>
            <p style={packed ? {textDecoration:"line-through"}:{}}>{product}</p>
            <div>
                <button onClick={()=>handleDoneItems(id)} className="donebtn">Done</button>
                <button onClick={() => handleDeleteItems(id)} className="deletebtn">Delete</button>

            </div>
        </li>
    );
};
export default List;