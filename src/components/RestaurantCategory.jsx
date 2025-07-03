import { useState } from "react";
import ItemList from "./ItemList.jsx";
const RestaurantCategory =({data,showItems,setshowIndex})=>{
    

   const handleClick = ()=>{
      setshowIndex();
   }

    return(
        <div>
            {/* Header */}
            <div className='w-6/12 bg-gray-50 shadow-lg py-4 mx-auto my-4 '>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                
                <span>⬇️</span>
                
                </div>
                {showItems && <ItemList items ={data.itemCards}/>}
            </div>
       

        </div>
    )
}
export default RestaurantCategory;