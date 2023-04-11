import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { danhMucXe, deleteOne } from "../../../Redux/Actions/adminAction";

export default function Categories() {
  const { categories } = useSelector((rootReducer) => rootReducer.adminReducer);
  const dispatch = useDispatch();
  console.log(categories);

  const deleteone = (id)=>{
console.log(id)
// $(id).remove()
const action = deleteOne(id);
dispatch(action);
  }


  const renderCategories = (type) => {
    
    
    if (categories !== "") {
      let stt = 0;
      
          
      return categories.map((danhMuc, index) => {
        
        if (danhMuc.parents == type ) {
          stt++;
          let stt2 = 0;
          return (
            <tr className="row" id={danhMuc._id} key={index}>
              <td className="col-1">{stt}</td>
              {/* điều hướng tới trang detail từng danh mục */}
              <td className="col-3">
                <NavLink to={`categories/` + danhMuc._id}>
                  {danhMuc.name}
                </NavLink>
              </td>
              <td className="col-5">
                <ul className="row">
                  {danhMuc.childs != ""
                    ? 
                    (danhMuc.childs.map((danhMuccon, index) => {
                        stt2++;
                        return (
                          <li key={index} id={danhMuccon._id} className="row col-12 p-0 m-0">
                            <span className="col-1">{stt2}</span>

                            {/* điều hướng tới trang detail từng danh mục */}
                            <NavLink
                              className="col-5 "
                              to={`categories/` + danhMuccon._id}
                            >
                              {danhMuccon.name}{" "}
                            </NavLink>

                            <button className="btn btn-danger col-3 pr-0 pl-0" onClick={()=>{deleteone(danhMuccon._id)}}>
                              Delete
                            </button>
                            <button className="btn btn-primary col-2 ml-1 pr-0 pl-0">
                            <NavLink className="text-light" to={`categories/` + danhMuccon._id}>
                              Edit
                            </NavLink>
                            </button>
                          </li>
                        );
                      }))
                    : ""}
                </ul>
              </td>
              <td className="col-3">
              <button className="btn btn-primary col-3">
                            <NavLink className="text-light" to={`categories/` + danhMuc._id}>
                              Edit
                            </NavLink>
                            </button>

                <button className=" m-2 btn btn-danger"  onClick={()=>{deleteone(danhMuc._id)}}>
                  Delete
                </button>
              </td>
            </tr>
          );
        }
      });
    }
  };

  useEffect(() => {
    const action = danhMucXe();
    dispatch(action);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <NavLink className="btn btn-success add" to={'/admin/categories/add'}>Thêm</NavLink>
      </div>
      <div>Xe 2 Bánh</div>
      <div className="row m-0">
        <table className="table ">
          <thead>
            <tr className="row ">
              <th className="col-1 ">Stt</th>
              <th className="col-3 ">Tên danh mục</th>
              <th className="col-5 ">Tên danh mục con</th>
              <th className="col-3">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>{renderCategories('Xe 2 Bánh')}</tbody>
        </table>
      </div>
      <div>Xe 4 Bánh</div>
      <div className="row m-0">
        <table className="table ">
          <thead>
            <tr className="row ">
              <th className="col-1 ">Stt</th>
              <th className="col-3 ">Tên danh mục</th>
              <th className="col-5 ">Tên danh mục con</th>
              <th className="col-3">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>{renderCategories('Xe 4 Bánh')}</tbody>
        </table>
      </div>
    </div>
  );
}
