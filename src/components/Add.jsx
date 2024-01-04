import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import {uploadAllVideo} from '../serives/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [video ,setVideo]= useState({
      id:"",
      caption:"",
      url:"",
      embedLink:""


    })
    console.log(video)
    const emdVideoLink= (e)=>
    {
      const {value} = e.target
      console.log(value.slice(-11))
      const link =`https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }
    const handleUpload = async ()=>{
      const {id, caption,url,embedLink}=video
      //if there is no value in input box
      if (!id || !caption || !url || !embedLink) {
        toast.warning("please fill all the field")

      }
      else{
        //if value in input box
        const response = await uploadAllVideo(video)
        console.log(response);
        
        if (response.status>=200 && response.status<300) {
          setUploadVideoStatus(response.data)
          toast.success(`${response.data.caption} video uploaded sucessful`)
          //to make state into initial value
          setVideo({
            id:"",
            caption:"",
            url:"",
            embedLink:""
          })
          //to close the model
          handleClose()
        }
        else{
          console.log(response);
          toast.error('something went wrong .Try again')
        }
      }
    }
  return (
    <>
    
    <div className='d-flex align-items-center'>
        <h5>Upload Video</h5>
        <button onClick={handleShow} className='btn'><i class='fa-solid fa-cloud-arrow-up fs-5 '></i></button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please fill the form</p>
            <form className='border border-secondary p-2' action="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})} type="text" placeholder="Enter Video ID" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEm ail">
<Form.Control onChange={(e)=>setVideo({...video,caption:e.target.value})}type="text" placeholder="Enter Video Caption"/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Control onChange={(e)=>setVideo({...video,url:e.target.value})} type="text" placeholder="Enter Video Image Url" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={emdVideoLink} />
</Form.Group>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    
    
    </>
  )
}

export default Add





//<iframe width="930" height="523" src="https://www.youtube.com/embed/szvt1vD0Uug" title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>