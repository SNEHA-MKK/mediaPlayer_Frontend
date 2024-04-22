// api for adding video 
import {commonApi} from "./commonApi"
import {serverURL} from "./baseUrl"

export const uploadVideoApi = async(reqBody)=>{
      return await commonApi('POST',`${serverURL}/videos`,reqBody)

}
// commonApi is function that have time delay thus make async await

//api to get uploaded videos

export const getUploadVideoApi = async()=>{
      return await commonApi('GET',`${serverURL}/videos`,"")
}

// api to delete a video

export const deleteVideoApi = async(id)=>{
      return await commonApi('DELETE',`${serverURL}/videos/${id}`,{})
}

// api to add history
export const addToHistory = async (reqBody)=>{
       return await commonApi('POST',`${serverURL}/history`,reqBody)
}

//api to get all video from history
export const getAllVideoHistoryApi = async()=>{
      return await commonApi('GET',`${serverURL}/history`,"")
}

//api to delete a vdo from history
export const deleteVideoHistoryApi = async(id)=>{
      return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
}

// api to add category
export const addCategoryApi = async(reqBody)=>{
      return await commonApi('POST',`${serverURL}/Category`,reqBody)
}

// api to get all category
export const getAllCategoryApi = async()=>{
      return await commonApi('GET',`${serverURL}/Category`,"")
}

//api to delete a category
export const deleteCategoryApi = async(id)=>{
      return await commonApi('DELETE',`${serverURL}/Category/${id}`,{})
}

// api to get a particular video
export const getAVideo = async(id)=>{
      return await commonApi('GET',`${serverURL}/videos/${id}`,"")
}

// api to update the category
export const updateCategoryApi = async (id,reqBody)=>{
      return await commonApi('PUT',`${serverURL}/Category/${id}`,reqBody)
}