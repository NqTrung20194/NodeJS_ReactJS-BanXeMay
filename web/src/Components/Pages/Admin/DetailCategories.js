import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chiTietdanhMucXe, editDetail } from "../../../Redux/Actions/adminAction";

export default function DetailCategories(props) {
  
  const { detailCategories,categories } = useSelector((rootReducer) => rootReducer.adminReducer);

  const dispatch = useDispatch();
  const id = props.match.params.id;
    // console.log(detailCategories.parents[0]);
  let [detail, setDetail] = useState({['id']:id,['name']:'',['content']:'',['parents']:''});
  // console.log('detail', detail);

  
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
            onChange={handlechange}
          ><option >
          {detailCategories.parents}
        </option>
            {categories.map((danhMucCha, index) => {
              // console.log(danhMucCha.name)
              if (danhMucCha.name != detailCategories.parents) {
                
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

  const handlechange = (event) => {
    let { value, name } = event.target;
    setDetail({
      ...detail,
      [name]: value,
    });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let flag = 1;
    if(detail.name === '' && detail.parents === ''){
      flag = 0;
      console.log('nội dung không có gì thay đổi')
    }else{
      console.log(detail);

    }
   
    if(flag ===1 ){
      const action = editDetail(detail)
      dispatch(action);
    }
  }
    
  

  useEffect(() => {
  
    const action = chiTietdanhMucXe(id);
    dispatch(action);
  }, [id]);

  return (
    <form className="container" method="get" onSubmit={handleSubmit}>
      <label>Tên Danh Mục</label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        placeholder="Tên danh mục"
        onChange={handlechange}
        defaultValue={detailCategories.name}
      />

      <label>Nội Dung</label>
      <textarea
        type="text"
        name="content"
        id="content"
        className="form-control"
        placeholder="Nội dung"
        onChange={handlechange}
        defaultValue={detailCategories.content}
      ></textarea>
      <label />

      <small id="helpId" className="text-muted">
        Danh Mục Cha
      </small>
      <div className="form-group">{danhMucCha()}</div>

      <button type="submit" className="btn btn-primary">
        Xác Nhận
      </button>
    </form>
  );
  }
