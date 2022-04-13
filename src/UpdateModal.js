import { useState } from "react";
import {Button,Modal}from "react-bootstrap";
import axios from "axios";


const UpdateModal = ({el}) =>{

const [UpdateProd,setUpdateProd]=useState({
    image:el.image,
    prodName:el.prodName,
    price:el.price
})

const modifyProd = async ()=>{
    await axios.put(`http://localhost:3000/Prodz/${el.id}`,{...UpdateProd}).then
    (res=>{console.log(res.data)})
}
const handleChange =(e)=>{
    setUpdateProd({...UpdateProd,[e.target.name]:e.target.value})
}


const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (  

        <div>
         <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body >add details
          <form onSubmit={modifyProd}>
            < input type="text" name="image" onChange={(e)=>handleChange(e)} defaultValue={UpdateProd.image} />
            <input type="text" name="image" onChange={(e)=>handleChange(e)} defaultValue={UpdateProd.prodName} />
            <input type="text" name="image" onChange={(e)=>handleChange(e)} defaultValue={UpdateProd.price}  />
            <input type="submit" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        
    );
}

export default UpdateModal ;