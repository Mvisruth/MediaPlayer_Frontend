import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../serives/allAPI'

function View({uploadVideoStatus}) {
  const [allVideo , setAllVideo] = useState([])

  const [deleteVideoStatus , setdeleteVideoStatus] = useState(false)

  const getAllUploadedVideo = async()=>{
   const responce = await getAllVideo()
  //  console.log(responce)
  const {data} = responce
  // console.log(data)
  setAllVideo(data)
  }
  console.log(allVideo)
  useEffect(()=>{
    getAllUploadedVideo()
    setdeleteVideoStatus(false)
  },[uploadVideoStatus , deleteVideoStatus])
  return (
    <>


    <Row>

       { allVideo.length>0?
       allVideo.map((video)=>(  <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayVideo={video} setdeleteVideoStatus={setdeleteVideoStatus}/>
        </Col>))
        :
        <p>nothing to display</p> }
    </Row>

    </>
  )
}

export default View