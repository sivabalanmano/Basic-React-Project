import { useEffect, useState } from "react"
import AutoSugges from  './AutoSugges'


export default function SeacrchAutoComplete(){

    const [loading,setLoading]=useState(true)
    const [users,setUsers]=useState([])
    const [error,setError]=useState(null)
    const [serchParams,setSearchparams]=useState('')
    const [shoeDropdown,setShoeDropdown]=useState(false)
    const [filterData,setFilterData]=useState([])

    function handleChange(e){
       const qurey = e.target.value.toLowerCase()
       setSearchparams(qurey);
       if(qurey.length > 1){
        const filterData = users && users.length ? users.filter((item)=> item.toLowerCase().indexOf(qurey) > -1) :[]
        setFilterData(filterData)
        setShoeDropdown(true)
       }
       else{
        setShoeDropdown(false)
       }
    }

    async function fetchusers(){
        try{
            setLoading(true)
            const res = await fetch(`https://dummyjson.com/users`)
            const data = await res.json()

            console.log(data)
            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem)=>userItem.firstName))
                setLoading(false)
                setError(null)
            }

        }catch(err){
            setError(err.message)
            setLoading(false)
        }

    }
    function handleClick(e){
       console.log(e.target.innerText)
       setShoeDropdown(false)
       setSearchparams(e.target.innerText)
       setFilterData([])
    }

    useEffect(()=>{
       fetchusers()
    },[])
    
    console.log(users,filterData)

    return <div className="autocomplete-container">
       { loading ?  <h1>Loading Data !</h1>
        :<input
        value={serchParams}
        name="Search-user"
        placeholder="Search-user"
        type="text"
        onChange={handleChange} />}
         {
            shoeDropdown && <AutoSugges handleClick={handleClick} data={filterData}/>
         }
    </div>
}