import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"



//upload video

export const uploadAllVideo = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)

}

//get all video from json server

export const getAllVideo = async()=>{
  return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api delete
export const deleteVideo = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

  //api to add data watch history
  export const addtoHistory = async(VideoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,VideoDetails)
}

///api to get all history from json -server
export const getAllHistory = async()=>{
  return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete history
export const deleteHistory = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category
export const addToCategory = async(body)=>{
  return await commonAPI('POST',`${serverURL}/category`,body) 
}

//api to get category
export const getAllCategory = async(body)=>{
  return await commonAPI('GET',`${serverURL}/category`,body) 
}

//api to delete the category
export const deleteACategory = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get a particular video
export const getAVideo = async(id)=>{
  return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update category
export const updateCategory = async(id,body)=>{
  await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}





