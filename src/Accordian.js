import React from 'react';
import { useState }  from 'react';
import data from './data';

export default function Accordian ()  {
    
   const [selection, setSelection] = useState(null);

   function handisleSingle(getid){
    console.log(getid)
    console.log(selection)
    setSelection(getid === selection ? null : getid)
   }
  return (
    <div className='Accordian'>
        <div>
            {
                data && data.length >0 ? 
                data.map(dataItem=> <div onClick={()=>handisleSingle(dataItem.id)}>
                    <h3>{dataItem.question}</h3>
                    <div className='icon'><span>+</span>
                    <br></br>
                    <div>
                        {
                            selection === dataItem.id ? <div>{dataItem.answer}</div> : null
                        }
                    </div>
                    </div>
                </div>)
                : <div> No Data Found</div>
            }
        </div>
    </div>
  )
}
