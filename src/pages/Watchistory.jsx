import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllVideoHistoryApi } from '../services/allAPI.JS'
import { deleteVideoHistoryApi } from '../services/allAPI.JS'



function Watchistory() {


  const[deleteHistoryVideoStatus,setDeleteHistoryVideoStatus]=useState(false)
  const[videoHistory,setVideoHistory] = useState([])

  // function to get all video from backend
  const getAllVideo=async()=>{
        const response =await getAllVideoHistoryApi()
        
        setVideoHistory(response.data)

  }
  console.log(videoHistory);

  useEffect(()=>{
    getAllVideo()
    setDeleteHistoryVideoStatus(false)
  },[deleteHistoryVideoStatus])

  // function to delete a particular variable 

  const handleHistoryDelete = async(id)=>{
    const response = await deleteVideoHistoryApi(id)
    console.log(response);
    setDeleteHistoryVideoStatus(true)
    console.log(deleteHistoryVideoStatus);
  }

  return (
    <>
       <div className="d-flex align-items-center mx-4 mb-5 mt-5">
           <h4>Watch HIstory</h4>
           <Link to={'/home'} className='ms-auto'  style={{textDecoration:'none'}}  ><h5><FontAwesomeIcon className='me-2' icon={faArrowLeft}/><span id='back'>Back Home</span><FontAwesomeIcon icon={faHouse} className='ms-2 me-3'/></h5></Link>
       </div>

     <div className="row mx-4 mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 p-4" style={{overflowX:'auto'}}>
        {videoHistory?.length>0? <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>CAPTION</th>
                <th>URL</th>
                <th>TIME STAMP</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
             {videoHistory?.map((item,index)=>( <tr>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td><a href={item?.url} target='_blank' >{item?.url}</a></td>
                <td>{item?.timeStamp}</td>
                <td ><FontAwesomeIcon icon={faTrash} className='btn btn-outline-danger' onClick={()=>handleHistoryDelete(item?.id)}/></td>
              </tr>))}
            </tbody>
        </table>:
        <p className='text-warning mt-5 fs-5'>Watch history is clean</p>
  }
      </div>
      <div className="col-md-1"></div>
     </div>

    </>
  )
}

export default Watchistory
