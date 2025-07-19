import { useDispatch } from "react-redux";
import { CARD_URL } from "../utils/constants";
import { addItem,removeItem } from "../utils/cartSlice";
const ItemList =({items})=>{
  console.log(items)
  const disptach = useDispatch();
   
    const handleAddItem =(item)=>{
      // dispatch action
      disptach(addItem(item));
    }
      const handleDeleteItem = (item)=>
        disptach(removeItem(item));
    
return( 
    <div>
        {items.map(item=>
            <div key ={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200">
                <div className="flex items-start">
                  <div className="flex-1 pr-4">
                  
                    <span className="py-2 ">{item.card.info.name}</span>
                    <span>- ₹{item.card.info.price/100 || item.card.info.variantsV2.pricingModels[0]?.price/100}</span>
                    <p className="text-xs text-left">{item.card.info.description}</p>
                </div>
                <div className="relative">
      <img src={CARD_URL + item.card.info.imageId} className="w-40 object-cover" />
      <div className="flex absolute top-2/2 right-1 ">
      <button className="p-2 bg-white shadow-lg  text-sm rounded hover:cursor"  onClick={()=>handleAddItem(item)}
      >
        Add +
      </button>
      <button className="p-2 bg-white shadow-lg  text-sm rounded  hover:cursor-pointer" onClick={()=>handleDeleteItem(item)}
      >
        Del -
      </button>
      </div>
     

    </div>
              </div>
              </div>

                 
        )}
    </div>
)
}
export default ItemList;