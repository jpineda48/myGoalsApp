import { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import React from 'react'

const ImageUpload = () => {

    const [image, setImage] = useState()
    const [allImage, setAllImage] = useState()
    console.log('this is allImage', allImage)
 

    useEffect(()=> {
        getImage()

    },[])

    const submitImage = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('image', image)

        const result = await axios.post(
            `${apiUrl}/moods`, 
            formData,
            {
                headers: {'Content-Type': 'multipart/form-date'}
            }
        )
    }
    const onInputChange = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    const getImage = async () => {
        const result = await axios.get(`${apiUrl}/getImage`)
        console.log('this is result', result)
        setAllImage(result.data.data)
    }
  return (
    <div>
      <form onSubmit={submitImage}>
        <input type='file' accept='image/*' onChange={onInputChange}></input>
        <button type='submit'>Submit</button>
      </form>
     {/* {allImage.map((data) => {
        return <img src={data.image} alt="moods" />
     })} */}
    
    </div>
  )
}

export default ImageUpload
