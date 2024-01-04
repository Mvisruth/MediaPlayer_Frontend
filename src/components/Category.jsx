import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { addToCategory, deleteACategory, getAVideo, getAllCategory, updateCategory } from '../serives/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col,Row } from 'react-bootstrap'
import VideoCard from './VideoCard';



function Category() {
  const [show, setShow] = useState(false);
  const [CategoryName , setCategoryName] = useState("")
  const [Category, setCategory]= useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// function to add category 

const handleAddCategory = async()=>{
  console.log(CategoryName)
  if(CategoryName){
   let body ={
    CategoryName,
    allvideos:[]

   }
   const response = await addToCategory(body)
   console.log(response)
   if(response.status>=200 && response.status<300){
    toast.success('category added successfully')
    //to empty the state 
    setCategoryName("")
    //close modal
    handleClose()
   }
   else{
    toast.error('somthing went wrong please try')
   }
    

   }
   else{
    toast.warning('please fill the category name ')
   }
 
}

//function to get all category
const allCategory = async()=>{
  const {data} = await getAllCategory()
  // console.log(data)
  setCategory(data)

}
console.log(Category);


//function to delete category

const removeCategory = async(id)=>{
  await deleteACategory(id)
  //to get the remaining category
  allCategory()
}

//function to prevent reload
const dragOver = (e)=>{
  e.preventDefault();
}

//function to drop video card to category
const videoDrop = async(e,categoryid)=>{
  console.log(`category in which is VideoCard is Droped:${categoryid}`);
  let videoID = e.dataTransfer.getData("videoID")
  console.log(videoID);

  //api to get a video
   const {data}= await getAVideo(videoID)
   console.log(data)

   let seletedCategory = Category.find((item)=>item?.id==categoryid)
   seletedCategory.allvideos.push(data)
   console.log(seletedCategory);


   await updateCategory(categoryid,seletedCategory)
   allCategory()

}



useEffect(()=>{
  allCategory()
},[])
  return (
    <>


    <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add Category</button>
    </div>
    
    {Category?.length>0?
    Category?.map((item)=>(<div className='m-5 border border-secondary p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
    <div className="d-flex justify-content-between align-items-center">
    <h6>{item.CategoryName}</h6>
    <Button onClick={()=>removeCategory(item?.id)} className="btn btn-danger"><i class="fa-solid fa-trash-can"></i></Button>
    </div>
    
    <Row>
      <Col>
     
      {
        item?.allvideos.length>0?
        item?.allvideos.map((card)=>(<VideoCard displayVideo={card} isPresent={true}/>)) 
        :<p>nothing</p>
      }

      </Col>
    </Row>

    </div>))
  :<p className='fw-bolder fs-5 text-danger m-3'>nothing to display</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning"></i>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the form complet</p>
          <form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
             <Form.Control type="text" placeholder="Enter Category ID" onClick={(e)=>setCategoryName(e.target.value)}/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter Category Name"/>
          </Form.Group> */}

            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />






    </>
  )
}

export default Category