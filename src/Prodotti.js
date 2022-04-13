import React,{useState,useEffect} from 'react'
import axios from 'axios'

 

const Prodotti= ()=>{

const [Prodotto,setProdotto]=useState([])

const getProdotto= async()=>{await axios.get("http://localhost:3000/Prodotti").then
(res=>setProdotto(res.data)
)}


useEffect(()=>{getProdotto()}
,[])


const deletePro = async(id)=>{await axios.delete(`http://localhost:3000/Prodotti/${id}`).then(res =>
{console.log(res.data)})}

{/*
post / add function & method
*/}

const [aggiungiProd,setaggiungiProd]=useState({image:"",price:"",image:""})
const aggiungere = async ()=> {await axios.post("http://localhost:3000/Prodotti",{...aggiungiProd}).then
(res=>{console.log(res.data)})
}


const handleClick =(name)=>{
    alert(name);
}

    return ( 

        
        
        <div className="container">
            {Prodotto.map(el=>(<div key={el.id}>
               <img src={el.image}/> 
               <h2>{el.price}</h2>
               <h3>{el.prodName}</h3>
               <button onClick={()=>deletePro(el.id)}>Cancella Scelta</button>
               <button onClick={()=>handleClick(el.prodName)}>click it</button >
    
                </div>   
     ))}


     <form onSubmit={aggiungere}>
     <input onChange={(e)=>setaggiungiProd({...aggiungiProd,image:e.target.value})} type="text"/>
     <input onChange={(e)=>setaggiungiProd({...aggiungiProd,prodName:e.target.value})} type="text"/>
     <input onChange={(e)=>setaggiungiProd({...aggiungiProd,price:e.target.value})} type="text"/>
     <input  type="submit" value="Manda Aggiornamento"/>
     </form>
     </div>
     )
            }
     

export default Prodotti ;