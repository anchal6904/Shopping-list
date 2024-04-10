import './App.css';
import React from 'react'; 
import './index.css';
import {useState} from "react";
import Header from  './header.js';
import Footer from './footer.js';
import Main from './main.js';
function App(){
  const [items,setItems]=useState([]);
  const handleaddItems=(item)=>{
    setItems((items)=>[...items,item]);
  };
  const handleDeleteItems = (id) => {
    setItems((items)=>items.filter((item)=>item.id!==id));
};
  const handleDoneItems=(id)=>{
    setItems((items)=>
    items.map((item)=>item.id===id ?{...item,packed: !item.packed}:item));
    };
  const counterItems=items.length;
  const numPacked=items.filter((item)=>item.packed).length;
  const percentage=(numPacked/counterItems)*100;
  return(
    <div className='appWrapper'>
      <Header/>
      <Main items={items} handleaddItems={handleaddItems} handleDeleteItems={handleDeleteItems} handleDoneItems={handleDoneItems}/>
      <Footer counterItems={counterItems} numPacked={numPacked} percentage={percentage}/>
    </div>
  );
};

export default App;
