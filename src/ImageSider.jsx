import React, { useEffect, useState } from 'react'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import './imgStyle.css'

const ImageSider = ({url,limit=10,page=2}) => {
    const [images,setImages]=useState([])
    const [slide,setSlide]=useState(0)
    const [errmsg,setErrmsg]=useState(null)
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        if(url !== ''){ fetchImage(url)}
    },[url])

    async function fetchImage(getUrl) {
        try{
            setLoading(true)
            const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            console.log(response)
            const data=await response.json()
            console.log(data)

            if(data){
                setImages(data)
                setLoading(false)
            }

        }catch(e){
           setErrmsg(e.message)
           setLoading(false)
        }
    }

    

    console.log(images)

    if (loading){
        return <div>Loading please......</div>
    }
    if (errmsg !== null){
        return <div>Error {errmsg}</div>
    }
   
    function handlePevious(){
        setSlide(slide === 0 ? images.length -1 : slide -1)
    }
    function handleNext(){
        setSlide(slide === images.length -1  ? 0 : slide +1)
    }

  return (
    <div className='container'>
    <BsArrowLeft onClick={handlePevious} className='arrow left-arrow' />
    {
        images && images.length ? images.map((imageItem,index)=>(
            <img 
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={slide === index ? "current-images" :  "current-images hide-current-images"}
            
            />
        )):null}
        <BsArrowRight onClick={handleNext} className='arrow right-arrow'/>
        <span className='circul-indicator'>
            {
                images && images.length ?
                images.map((_,index)=> 
                <button
                key={index}
                className={slide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                onClick={()=>setSlide(index)}
                ></button>)
                :null
            }
        </span>
    </div>
  )
}

export default ImageSider