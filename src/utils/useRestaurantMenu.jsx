import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { useParams } from "react-router-dom";

const useRestaurantMenu = (resId)=>{

 
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();  
    },[])
    const fetchMenu = async () => {
        try {
          const data = await fetch(MENU_API + resId);
          const json = await data.json();
          console.log(json);
          setResInfo(json);
        } catch (error) {
          console.error("Error fetching menu:", error);
        }
      };
    return resInfo ;
} 
export default useRestaurantMenu;