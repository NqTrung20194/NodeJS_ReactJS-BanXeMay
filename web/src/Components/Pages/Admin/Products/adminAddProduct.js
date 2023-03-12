import React, { useState } from "react";
import { addImg } from "../../../../Redux/Actions/adminAction";
import { useDispatch, useSelector } from "react-redux";

export default function adminAddProduct() {
  const { imgProductName } = useSelector((rootReducer) => rootReducer.adminReducer);
  const [hinh, setHinh] = useState('');
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  console.log(imgProductName);

  const loadImg =()=>{
    
  }

  const handleChange = (e)=>{
    let { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }


  const onFileChange = (e) => {
    setHinh(e.target.files[0]);
  };

  const onSubmitImg = (e) => {
    e.preventDefault();
    const formData = new FormData();
    //key ('img') phải đúng với tên thanh phần được gọi ở phần BackEnd
    //vd: const upload = multer({ storage: storage,limits:limits }).single('img');
    formData.append("img", hinh);
    const action = addImg(formData);
    dispatch(action);
  };
  return (
    <div>
      <form >
  <div className="form-group">
    <label htmlFor="name">Tên Sản Phẩm:</label>
    <input type="text" name = 'name' className="form-control" placeholder="Nhập Tên Sản Phẩm" id="name" onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="price">Giá Sản Phẩm:</label>
    <input  type="text" name="price" className="form-control" placeholder="Nhập Giá Sản Phẩm" id="price" onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="price">Hình Sản Phẩm:</label>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Chọn Hình
    </button>

  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

{/* The Modal */}
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      {/* Modal Header */}
      <div className="modal-header">
        <h4 className="modal-title">Chọn Hình Ảnh Sản Phẩm</h4>
        <button type="button" className="close" data-dismiss="modal">×</button>
      </div>
      {/* Modal body */}
      <form onSubmit={onSubmitImg} method="post" encType="multipart/form-data">
      <div className="modal-body">        
        {/* Form úp hình */}
        
        <div className="form-group mb-3">
          <label className="text-white">Select File</label>
          <input
            type="file"
            className="form-control"
            name="img"
            onChange={onFileChange}
          />
        </div>
      
      </div>
      {/* Modal footer */}
      <div className="modal-footer">
      <button type="submit" className="btn btn-success" >
            Upload
          </button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
      </form>
    </div>
  </div>
</div>


      
    </div>
  );
}
