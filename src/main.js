import { useState } from 'react';
import List from './list.js';
import Head from './mainHead.js'
const Main=({items,handleaddItems,handleDeleteItems,handleDoneItems})=>{
    const [SortBy,SetSortBy]=useState("input");
    let sortedItems;
    if(SortBy==="input"){
        sortedItems=items;
    }
    if(SortBy==="packed"){
        sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
    }
    return(
        <div>
            <Head handleaddItems={handleaddItems}/>
            <ul className='mainWrapper'>
            {sortedItems.map((item)=>(<List item={item} key={item.id} handleDeleteItems={handleDeleteItems} handleDoneItems={handleDoneItems} />))}
        </ul>
        <select className="select" value={SortBy} onChange={(e)=>SetSortBy(e.target.value)}>
            <option value="input">Sort by input</option>
            <option value="packed">Sort by packed</option>  
        </select>
        </div>
    ); 
};
export default Main;