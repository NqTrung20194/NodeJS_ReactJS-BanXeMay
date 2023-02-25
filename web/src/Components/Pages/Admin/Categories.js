import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { danhMucXe } from "../../../Redux/Actions/adminAction";

export default function Categories() {
  const { categories } = useSelector((rootReducer) => rootReducer.adminReducer);
  const dispatch = useDispatch();
  console.log(categories);
  const renderCategories = () => {
    let stt = 0;
    let stt2 = 0;
    if (categories !== "") {
      return categories.map((danhMuc, index) => {
        if (danhMuc.parents == "") {
          stt++;
          const numEndChilds = Number(danhMuc.childs.length) - 1;
          console.log(danhMuc.childs.length);
          console.log(danhMuc.childs[numEndChilds].name);
          return (
            <tr className="row" key={index}>
              <td className="col-1">{stt}</td>
              <td className="col-4">{danhMuc.name}</td>
              <td className="col-4">
                <ul className="row">
                  {danhMuc.childs != ""
                    ? danhMuc.childs.map((danhMuccon, index) => {
                        let dm = danhMuccon.name;
                        stt2++;
                          return (
                            <li key={index} className="row">
                              <span className="col-1">{stt2}</span>
                              <NavLink className="col-6" to={`/` + dm + `'`}>{dm} </NavLink>

                              <button className=" m-2 btn btn-danger col-2">Delete</button>

                              <button className="btn btn-primary col-2  m-2">Edit</button>
                              
                            </li>
                          );
                      })
                    : ""}
                </ul>
              </td>
              <td className="col-3">
                <button className="btn btn-primary">Edit</button>

                <button className=" m-2 btn btn-danger">Delete</button>
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
