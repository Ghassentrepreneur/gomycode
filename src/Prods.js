import React,{useState,useEffect} from 'react'
import axios from 'axios'
import UpdateModal from './UpdateModal'
 


const Prods = ()=> {

    const [Hon,setHon]=useState([])
    const getProds = async ()=>{ await axios.get("http://localhost:3000/Prodz").then(res=>
        setHon(res.data))
}

useEffect(()=>{getProds()},[])


    const del = async(id)=> {await axios.delete(`http://localhost:3000/Prodz/${id}`).then(res=>(
        console.log(res.data)
    ))

    }

    const [AddProd,setAddProd]=useState({image:'',prodName:'',price:''})

    const addProds = async(id)=> {await axios.post("http://localhost:3000/Prodz",{...AddProd}).then(res =>
    console.log(res.data)
    )
}
 
    return (  

 
        <div className="container">
            {Hon.map(el=>(<div key={el.id}>
               <img src={el.image} /> 
               <h2>{el.prodName}</h2>
               <h3>{el.price}</h3>
               <button onClick={()=>del(el.id)}>DELETE</button>
               
               </div>
            ))}


            <form onSubmit={addProds}>
                <input onChange={(e)=>setAddProd({...AddProd,image:e.target.value})} type="text"/>
                <input onChange={(e)=>setAddProd({...AddProd,prodName:e.target.value})} type="text"/>
                <input onChange={(e)=>setAddProd({...AddProd,price:e.target.value})} type="text"/>
                <input type="submit" value="Submit"/>
            </form>


        </div>
 
    )
}

export default Prods ;