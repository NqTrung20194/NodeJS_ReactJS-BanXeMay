import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { danhMucXe } from "../../../../Redux/Actions/adminAction";

export default function AdminProducts() {

  const {categories} = useSelector((rootReducer) => rootReducer.adminReducer);
console.log(categories)
const dispatch = useDispatch();

useEffect(() => {
  const action = danhMucXe();
  dispatch(action);
}, []);
  return (
    <div className="container">
      <div className="row theXe">
        <table className="table">
          <thead>
            <tr>
              <th>
              Danh Mục
              </th>
              </tr>
            <tr>
              <th >Stt</th>
              <th >Tên</th>
              <th >Hình Ảnh</th>
              <th >Giá</th>
              <th >Danh Mục</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
