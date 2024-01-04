import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'



function Home() {

  const [ uploadVideoStatus , setUploadVideoStatus] = useState({})
  return (
    <>
    
    <div className='container mt-5 mb-3 d-flex justify-content-between align-items-center'>
      <div className='add-video'>
        <Add setUploadVideoStatus = {setUploadVideoStatus}/>
      </div>
      <Link to={'/watch-history'} style={{TextDecoder:'none',color:'white',fontsize:'30px'}}>WatchHistory</Link>
    </div>

    <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between'>
      <div className='all-video col-lg-9'>
        <h4 className='mb-5'>All video</h4>
        <View uploadVideoStatus = {uploadVideoStatus}/>
        </div>
        <div className='Category col-lg-3'>
          <Category/>
      </div>
    </div>

    
    
    
    
    </>
  )
}

export default Home