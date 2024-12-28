import React, { useRef } from 'react'

const ScrolltoSection = () => {
    const ref=useRef()

    const data = [
        {
            id:1,
            lable:'Card 1',
            style:{
                width:'100%',
                height:'600px',
                background:'red'
            }
        },
        {
            id:2,
            lable:'Card 2',
            style:{
                width:'100%',
                height:'600px',
                background:'grey'
            }
        },
        {
            id:3,
            lable:'Card 3',
            style:{
                width:'100%',
                height:'600px',
                background:'blue'
            }
        },
        {
            id:4,
            lable:'Card 4',
            style:{
                width:'100%',
                height:'600px',
                background:'green'
            }
        },
        {
            id:5,
            lable:'Card 5',
            style:{
                width:'100%',
                height:'600px',
                background:'orange'
            }
        }
    ]
    function handleScroll(){
        let pos = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top:pos,
            behavior:'smooth',
        })
    }
  return (
    <div>
        <button onClick={handleScroll}> Click and scroll</button>
        {
            data.map((item,index) => 
            <div ref={index === 2 ? ref : null} key={index} style={item.style}>
                <h1>{item.lable}</h1>
            </div>)
        }
    </div>
    
  )
}

export default ScrolltoSection