import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { danhMucXe } from "../../../../Redux/Actions/adminAction";

export default function AdminProducts() {
  // Lấy danh sách danh mục sản phẩm
  const { categories } = useSelector((rootReducer) => rootReducer.adminReducer);

  const dispatch = useDispatch();

  const loaiXe = () => {
    if (categories) {
      // console.log(categories)
      return categories.map((danhMuc, index) => {
        if (danhMuc.parents == "") {
          let sttDanhMucCon = 0;
          return (
            <div className="row theXe" key={index}>
              <div className="col-12">
                <h4>Loại xe: {danhMuc.name} </h4>
              </div>
              {danhMuc.childs != ""
                ? danhMuc.childs.map((danhMucCon, index) => {
                    sttDanhMucCon++;
                    return (
                      <div className="row col-12" key={index}>
                        <div className="col-12">
                          <h5>
                            {sttDanhMucCon}. <span>{danhMucCon.name}</span>
                          </h5>
                        </div>
                        <div className="col-12">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Stt</th>
                                <th>Tên</th>
                                <th>Hình Ảnh</th>
                                <th>Giá</th>
                                <th>Danh Mục</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>a</td>
                                <td>b</td>
                                <td>c</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
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
        <div className="col-md-3">
          <NavLink to={"/admin/products/add"} className="btn btn-success">
            Add
          </NavLink>
        </div>
      </div>
      {loaiXe()}
    </div>
  );
}
