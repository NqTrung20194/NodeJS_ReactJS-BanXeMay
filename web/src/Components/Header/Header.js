import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { danhMucXe } from "../../Redux/Actions/adminAction";
export default function Header(props) {
  const { categories } = useSelector((rootReducer) => rootReducer.adminReducer);
  console.log(categories);
  const dispatch = useDispatch();

  const danhMucSanPham = () => {
    if (categories !== "") {
      return categories.map((danhMuc, index) => {
        if(danhMuc.childs.lenght !== 0){
          return(
              <div className=" dropright" key={index}>
    <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">
    {danhMuc.name}
</button>

    <div className="dropdown-menu ">
  <a className="dropdown-item" href="#">Link 1</a>
  <a className="dropdown-item" href="#">Link 2</a>
  <a className="dropdown-item" href="#">Link 3</a>
</div>

  </div>

          )
          

        }else{
          return (
            <a className="dropdown-item" key={index} href="#">
              {danhMuc.name}
            </a>
          );
        }
        
      });
    }
  };

  //Lấy dử liệu lần đầu
  useEffect(() => {
    const action = danhMucXe();
    dispatch(action);
  }, []);

  return (
    <div className="row">
      <nav className="col-12 navbar navbar-expand-sm navbar-danger bg-danger p-2 m-2">
        <a className="navbar-brand" href="#">
          Public
        </a>
        <button
          className="navbar-toggler d-lg-none mr-2"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Danh Mục Sản Phẩm
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                {danhMucSanPham()}
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
