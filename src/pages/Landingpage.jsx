import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Landingpage() {
  const navigateByurl = useNavigate()
  return (
    <>

     <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center '>
      <Col></Col>
      <Col lg={5}>
        <h1>Welcome to <span className='text-warning'> Media Player</span></h1>
        <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas cumque quibusdam aspernatur fugiat. Rem cupiditate dolores non earum rerum distinctio illum ea corporis omnis, eos ad officiis animi doloribus et!</p>
        <button onClick={()=>navigateByurl('/home')} className='mt-5 btn btn-warning'>Get Start<i class="fa-solid fa-arrow-right ms-2"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
      </Col>

      
     </Row>

     <div className='conatiner mt-5 mb-5 d-flex justify-content-center align-items-center flex-column'>
     <h3>Features</h3>
     <div  className='cards d-flex justify-content-evenly align-item-center w-100'>
     <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4'style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>WatchHistory</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

     </div>

     <div className='container border border-2 border-secondary rounded w-100 p-5 mt-5 d-flex align-items-center justify-content-betwwen'>
    <Row>
      <Col lg={5}>
        <h3 className='text-warning mb-5'>Simple fast and power</h3>
        <h6 className='mb-3'><span className='fw-bolder fs-5'>Play everthing</span> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque atque id nulla ea sint dolor assumenda, ducimus ipsam repellendus sunt ex cumque modi eligendi iure accusamus rerum iste voluptates!</h6>
        <h6 className='mb-3'><span className='fw-bolder fs-5'>Play everthing</span> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque atque id nulla ea sint dolor assumenda, ducimus ipsam repellendus sunt ex cumque modi eligendi iure accusamus rerum iste voluptates!</h6>
        <h6 className='mb-3'><span className='fw-bolder fs-5'>Play everthing</span> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque atque id nulla ea sint dolor assumenda, ducimus ipsam repellendus sunt ex cumque modi eligendi iure accusamus rerum iste voluptates!</h6>

      </Col>
      <Col></Col>
      <Col lg={6}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WWr9086eWtY?si=uZYyA7Iqgna8GJgZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>


    </Row>

     </div>
     </div>

    </>
  )
}

export default Landingpage