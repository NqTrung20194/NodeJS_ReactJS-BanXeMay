import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImg, addProducts, danhMucXe } from "../../../../Redux/Actions/adminAction";

export default function AdminAddProduct(props) {
  const { imgProductName,categories } = useSelector ((rootReducer) => rootReducer.adminReducer);
  const [hinh, setHinh] = useState ('');
  const [product, setProduct] = useState ();
  const dispatch = useDispatch ();
  console.log(product);

  const loadImg =()=>{
    if(imgProductName != ''){
      return imgProductName.map((hinh,index)=>{
        return (<img src={`/Img_Upload/` + hinh.name} key = {index} width = '50'/>)
      })
      
    }
  }

  //Lấy thông tin form
  const handleChange = (e)=>{
    let { value, name } = e.target;
    
    setProduct({
      ...product,
      [name]: value,
    });
  }

  //gửi thông tin form
  const submitForm =(e)=>{
    e.preventDefault();
    const action = addProducts(product);
    dispatch(action);
  }

  const danhMucCha = () => {
   
    if (categories != "") {
      // kiểm tra dử liệu
      // console.log(categories);
      return (
        <div>
          <select
            className="form-control"
            name="parents"
            id="parents"
            onChange={handleChange}
          >
            <option >
              Chọn
            </option>
            {categories.map((danhMucCha, index) => {
              // console.log(danhMucCha.name)
              if(danhMucCha.parents !=''){
                return (
                  <option key={index}>{danhMucCha.name}</option>
               );
              }
            })}
          </select>
        </div>
      );
    }
  };


  const onFileChange = (e) => {
    setHinh(e.target.files);
  };
  

  const onSubmitImg = (e) => {
    e.preventDefault();
    // const formData = new FormData();

    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(`img`, file, file.name);
    });


    //key ('img') phải đúng với tên thanh phần được gọi ở phần BackEnd
    //vd: const upload = multer({ storage: storage,limits:limits }).single('img');
    formData.append("img", hinh);
    const action = addImg(formData);
    dispatch(action);
  };

  const files = hinh ? [...hinh] : [];
  useEffect(()=>{
    if(imgProductName != ''){
      setProduct({
        ...product,
        ['img']: imgProductName,
      });
    }
    const action = danhMucXe();
    dispatch(action);
  },[imgProductName])
  return (
    <div className="container">
      <form onSubmit={submitForm} >
  <div className="form-group" >
    <label htmlFor="name">Tên Sản Phẩm:</label>
    <input type="text" name = 'name' className="form-control" placeholder="Nhập Tên Sản Phẩm" id="name" onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="price">Giá Sản Phẩm:</label>
    <input  type="text" name="price" className="form-control" placeholder="Nhập Giá Sản Phẩm" id="price" onChange={handleChange} />
  </div>
  <div className="form-group">
  <label htmlFor="parents">Danh Mục Sản Phẩm:</label>
    {danhMucCha()}
    </div>

  <div className="form-group">
    <label htmlFor="price">Hình Sản Phẩm:</label>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Chọn Hình
    </button> <br/>
    <div>
      {loadImg()}
    </div>

  </div>
  <div className="form-group">
    <label htmlFor="content">Mô Tả Sản Phẩm:</label>
    <textarea
        type="text"
        name="content"
        id="content"
        className="form-control"
        placeholder="Nội dung"
        onChange={handleChange}
      ></textarea>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

{/* The Modal */}
<div className="modal" id="myModal" >
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
            multiple
          />
        </div>
        <div className="text-dark">
          <label className="modal-title">Hình Đã Tải Lên</label> <br/>
          {loadImg()}
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
