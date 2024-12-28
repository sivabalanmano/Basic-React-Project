import { useState } from "react";
import Menulist from "./Menulist";
import {FaMinus,FaPlus} from "react-icons/fa"


export default function Menuitem ({item}){

    const [displayCurrentItem,setdisplayCurrentItem] =  useState({})
    function handleClick(getCurrentlable){
        setdisplayCurrentItem({
            ...displayCurrentItem,
            [getCurrentlable]:!displayCurrentItem[getCurrentlable]
        });
    }
    console.log(displayCurrentItem)

    return <li >
        <div  style={{display:"flex",gap:"20px"}}>
     <p >{item.lable}</p>
      {item && item.Children && item.Children.length ? <span  style={{cursor:"pointer"}} onClick={()=>handleClick(item.lable)}>
        {
            displayCurrentItem[item.lable] ? <FaMinus /> : <FaPlus />
        }
      </span> : null}
     </div>
     {
        item && item.Children && item.Children.length > 0 && displayCurrentItem[item.lable] ?
        <Menulist list={item.Children}/>
        :null
     }
     
    </li>

}