import React, { useEffect, useRef, useState } from 'react'

const ToptoBotom = () => {
    const [error,setError]=useState(null)
    const [loading,setLoading]= useState(false)
    const [user,setUser]=useState([])


 async function FetchData(){
    try{
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data= await res.json()
        console.log(data)
        setUser(data)
        setLoading(false)

    }catch(e){
        console.log(e.message)
        setError(e.message)
        setLoading(false)
    }
 }
  function handleTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }
  const bottomRef = useRef(null)
  function handleBottom(){
    bottomRef.current.scrollIntoView({ behavior:"smooth"})
  }

 useEffect(()=>{
    FetchData()
 },[])

 if(loading){
    return <h1>Loading...................</h1>
 }
 if(error !== null){
    return <div>Someting Went Wron</div>
 }


  return (
    <div>
        <div className='scroll'>
            <button onClick={handleBottom}>Go To Bottom </button>
        </div>
        <ul>
            {
                user && user.length ?
                user.map((item)=>(
                    <div key={item.id} >
                           <p><li>{item.title}</li></p>
                    </div>
                ))
                :null
            }
        </ul>
        <div className='scroll'>
            <button onClick={handleTop}>Go To Top </button>
            <div ref={bottomRef}></div>
        </div>
    </div>
  )
}

export default ToptoBotom