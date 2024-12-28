import React, { useState } from "react";

export default function RandomColor  ()  {
    const [hexColor,setHexcolor]=useState('hex')
    const [color,setcolor]=useState('#000000')

    function randomUnit (length){
        return Math.floor(Math.random()*length)
    }
    console.log(randomUnit())

    function handelRandomhexcolor  () {
      
        const hex =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexxcolor="#";

        for(let i=0;i<6;i++){
            hexxcolor += hex[randomUnit(hex.length)]
            console.log(hexxcolor)
            
        }
        setcolor(hexxcolor)
    }

    function handelRandomrgbcolor  (){
        const r=randomUnit(256)
        const g=randomUnit(256)
        const b=randomUnit(256)

        setcolor(` ${r},${g},${b}`)
    }

  return (
    <div style={{
        width:'100vw',
        height:'200vh',
        background:color
    }}>
        <button onClick={()=>setHexcolor('hex')}>Creat HEX Color</button>
        <button onClick={()=>setHexcolor('rgb')}>Creat RGB Color</button>
        <button onClick={hexColor === 'hex' ? handelRandomhexcolor : handelRandomrgbcolor }>General Random Color</button>

        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'#fff',
            fontSize:'60px',
            marginTop:'50px',
            flexDirection:'column',
            gap:'20px'

        }}>
            <h3>{hexColor === 'rgb' ? 'RGB colour':'HEX colour'}</h3>
            <h1>{color}</h1>    
        </div>
    </div>
  )
}

