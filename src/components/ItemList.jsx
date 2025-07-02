import { CARD_URL } from "../utils/constants";
const ItemList =({items})=>{

    console.log(items)
return( 
    <div>
        {items.map(item=>
            <div key ={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200">
                <div className="flex items-start">
                  <div className="flex-1 pr-4">
                  
                    <span className="py-2 ">{item.card.info.name}</span>
                    <span>- ₹{item.card.info.price/100}</span>
                    <p className="text-xs text-left">{item.card.info.description}</p>
                </div>
                <div className="relative">
      <img src={CARD_URL + item.card.info.imageId} className="w-40 object-cover" />
      <button className="p-2 bg-white shadow-lg absolute bottom-1 right-1 text-sm rounded hover:cursor-pointer">
        Add +
      </button>
    </div>
              </div>
              </div>

                 
        )}
    </div>
)
}
export default ItemList;