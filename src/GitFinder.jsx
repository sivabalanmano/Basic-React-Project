import { useEffect, useState } from "react"
import GitUser from "./GitUser"
import './gitrepo.css'


export default function Githubfinder(){
    const  [userName,setUsername]=useState('sivabalanmano')
    const [userData,setUserData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [errormessage,setErrormessage]=useState(null)

    async function fetchGithubData(){
        try{
          setLoading(true)
          const res = await fetch(`http://api.github.com/users/${userName}`)
          if(!res.ok) throw Error  ("Data Not Received");
          const data =await res.json()
          if(data){
            setUserData(data)
            setLoading(false)
            setUsername('')
          }

          console.log(data)
        }catch(err){
            setErrormessage(err.message)
            setLoading(false)
        }
       
        
    }


    function handleSupmit(){
       fetchGithubData()
    }
    

    useEffect(()=>{
        fetchGithubData()
    }, [])
    if(loading){
        return( <h1>Loading Data..........</h1>
       )}

       if (errormessage !== null){
        return <div>Error {errormessage}</div>
    }
    

    return <div className="github-finder">
       <div className="input-wrap">
        <input 
        type="text" 
        name="user-namme"
        value={userName}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="Search GitHub UserName......."
        />
        <button onClick={handleSupmit}>Search</button>
       </div>
       {
        userData !==null ? <GitUser user={userData} /> : null
       }
    </div>
}