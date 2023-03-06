import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { danhMucXe, deleteOne } from "../../../Redux/Actions/adminAction";

export default function Categories() {
  const { categories } = useSelector((rootReducer) => rootReducer.adminReducer);
  const dispatch = useDispatch();
  // console.log(categories);

  const deleteone = (id)=>{
console.log(id)
// $(id).remove()
const action = deleteOne(id);
dispatch(action);
  }


  const renderCategories = () => {
    
    let stt2 = 0;
    if (categories !== "") {
      return categories.map((danhMuc, index) => {
        if (danhMuc.parents =='') {
          let stt = 0;
          stt++;
          // const numEndChilds = Number(danhMuc.childs.length) - 1;
          // console.log(danhMuc.childs.length);
          // console.log(danhMuc.childs[numEndChilds].name);
          return (
            <tr className="row" id={danhMuc._id} key={index}>
              <td className="col-1">{stt}</td>
              {/* điều hướng tới trang detail từng danh mục */}
              <td className="col-4">
                <NavLink to={`categories/` + danhMuc._id}>
                  {danhMuc.name}
                </NavLink>
              </td>
              <td className="col-4">
                <ul className="row">
                  {danhMuc.childs != ""
                    ? danhMuc.childs.map((danhMuccon, index) => {
                        let dm = danhMuccon;
                        stt2++;
                        return (
                          <li key={index} id={dm._id} className="row">
                            <span className="col-1">{stt2}</span>

                            {/* điều hướng tới trang detail từng danh mục */}
                            <NavLink
                              className="col-6"
                              to={`categories/` + dm._id}
                            >
                              {dm.name}{" "}
                            </NavLink>

                            <button className=" m-2 btn btn-danger col-2 p-1" onClick={()=>{
                  deleteone(dm._id)
                }}>
                              Delete
                            </button>

                            <button className="btn btn-primary col-2  m-2">
                            <NavLink className="text-light" to={`categories/` + dm._id}>
                              Edit
                            </NavLink>
                            </button>
                          </li>
                        );
                      })
                    : ""}
                </ul>
              </td>
              <td className="col-3">
              <button className="btn btn-primary col-2  m-2">
                            <NavLink className="text-light" to={`categories/` + danhMuc._id}>
                              Edit
                            </NavLink>
                            </button>

                <button className=" m-2 btn btn-danger"  onClick={()=>{
                  deleteone(danhMuc._id)
                }}>Delete</button>
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
      <div className="row m-0">
        <table className="table ">
          <thead>
            <tr className="row ">
              <th className="col-1 ">Stt</th>
              <th className="col-4 ">Tên danh mục</th>
              <th className="col-4 ">Tên danh mục con</th>
              <th className="col-3">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>{renderCategories()}</tbody>
        </table>
      </div>
    </div>
  );
}
