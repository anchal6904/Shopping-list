import React from 'react';
const footer=({counterItems,numPacked,percentage})=>{
    return(
        <div className='footerWrapper'>
            {percentage===100 ? "Shopping Done" : `Total Item: ${numPacked}---Completed Items---${counterItems}---${percentage}%`}
        </div>
    );
};
export default footer;