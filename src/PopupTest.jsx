import { useState } from "react"
import Popup from "./Popup"



export default function PopupTest(){
    const [showPopup,setShowPopup]= useState(false)

    function handlePopup (){
        setShowPopup(!showPopup)
    }
    return(
            <div className="container">
                <button onClick={handlePopup}>OpenPopup</button>
                {
                    showPopup && <Popup
                    body={<div>Custiom Body</div>}
                    handlePopup={handlePopup} />
                }
            </div>
)}
