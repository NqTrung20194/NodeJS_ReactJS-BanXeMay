import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { danhMucXe } from "../../../Redux/Actions/adminAction";

export default function Categories() {
  const { categories } = useSelector((rootReducer) => rootReducer.adminReducer);
  const dispatch = useDispatch();
  console.log(categories);

  useEffect(() => {
    const action = danhMucXe();
    dispatch(action);
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên danh mục</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">a</td>
            <td>a</td>
            <td >
                <span>C</span>
                <span>D</span>
            </td>
          </tr>
          <tr>
            <td scope="row">a</td>
            <td>b</td>
            <td>c</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
