import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {deleteHistory, getAllHistory} from '../serives/allAPI'
import Button from 'react-bootstrap/Button';


function WatchHistory() {

  const [history , setHistory] = useState([])

  const WatchHistory = async()=>{
    const {data} = await getAllHistory()
    // console.log(data)
    setHistory(data)

  }
  console.log(history)

  //function to remove a particular 
  const removeAHistory = async(id)=>{
    await deleteHistory(id)
    //to get remaining history
    WatchHistory()
    


  }

  useEffect(()=>{
    WatchHistory()
  },[])
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-itens-center' style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-arrow-right"></i></Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time  stramp</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {history?.length>0?
        history?.map((item , index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
          <td>{item.timestamp}</td>
          <td><Button onClick={()=>removeAHistory(item?.id)} className="btn btn-danger"><i class="fa-solid fa-trash-can"></i></Button>
          </td>
        </tr>))
      :
      <p className='fw-bolder fs-4 text-danger m-4'>nothing to dispaly</p>  
      }
     
      </tbody>
    </table>

    </>
  )
}

export default WatchHistory