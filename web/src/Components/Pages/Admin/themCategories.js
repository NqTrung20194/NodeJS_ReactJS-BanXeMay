import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDanhMuc, danhMucXe } from "../../../Redux/Actions/adminAction";

export default function ThemCategories(props) {
  const { categories } = useSelector((rootReducer) => rootReducer.adminReducer);
//   console.log(categories);
  const dispatch = useDispatch();
  let [detail, setDetail] = useState({
    ["name"]: "",
    ["content"]: "",
    ["parents"]: "",
    ["type"]: 0,
  });
  const danhMucCha = () => {
    if (categories != "") {
      // kiểm tra dử liệu
      console.log(detail);
      return (
        <div>
          <select
            className="form-control"
            name="parents"
            id="parents"
            onChange={handlechange}
          >
            <option>Chọn</option>
            {categories.map((danhMucCha, index) => {
              return <option key={index}>{danhMucCha.name}</option>;
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
    if (detail.name === "" && detail.parents === "") {
      flag = 0;
      console.log("nội dung không có gì thay đổi");
    } 

    if (flag === 1) {
        const action = addDanhMuc(detail)
        dispatch(action);
    //   console.log(detail);
    }
  };

  useEffect(() => {
    const action = danhMucXe();
    dispatch(action);
  }, []);

  return (
    <div>
      <form className="container" method="get" onSubmit={handleSubmit}>
        <label>Tên Danh Mục</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Tên danh mục"
          onChange={handlechange}
        />

        <label>Loại Xe: </label>
        <select
        className="form-control"
        name="type"
        id="type"
        onChange={handlechange}
        >
          <option>Chọn</option>
          <option value={'0'} >Xe 2 Bánh</option>
          <option value={'1'} >Xe 4 Bánh</option>
        </select>

        <label>Nội Dung</label>
        <textarea
          type="text"
          name="content"
          id="content"
          className="form-control"
          placeholder="Nội dung"
          onChange={handlechange}
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
    </div>
  );
}
