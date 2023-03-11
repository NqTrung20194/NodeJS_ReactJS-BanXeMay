import { http } from "../../../../Utility/Setting";
import React, { useState } from "react";
import axios from "axios";

export default function adminAddProduct() {
  const [hinh, setHinh] = useState();
  console.log(hinh);

  const onFileChange = (e) => {
    setHinh(e.target.files[0]);
    
  };

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('img',hinh)
    console.log(formData)
    fetch(
        'http://localhost:3100/api/products/add/uploadimg',
        {
            method: 'POST',
            body : formData, 
            processData: false,
            Cache:false,
            contentType:false,
            success: function(result){
                console.log(result);}
        }
    ).then((response)=>response.json().then(
        (result)=>{
            console.log('success',result)
        }
    )
    .catch(err=>{
        console.error('err:',err)
    })
    )
    // console.log("File uploaded!:", hinh);

    // axios.post('http://localhost:3100/api/products/add/uploadimg',formData)
    // .then((result)=>{
    //   console.log(result);
    // })
    // .catch((err)=>{
    //   console.error(err)
    // })
  };
  return (
    <div>
        <form onSubmit={onSubmit} method='post' encType="multipart/form-data" >
      <div className="form-group mb-3">
        <label className="text-white">Select File</label>
        <input
          type="file"
          className="form-control"
          name="img"
          onChange={onFileChange}
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-outline-primary"
        >
          Store
        </button>
      </div>
      </form>
    </div>
  );
}
