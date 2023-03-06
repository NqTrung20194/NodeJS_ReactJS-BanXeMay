import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin(props) {


  return (
    <div className="row">
      <nav className="col-12 navbar navbar-expand-sm navbar-danger bg-danger p-2 m-2">
        <a className="navbar-brand" href="#">
          Admin
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
              <NavLink className="nav-link" to={'/'}>
                Public
              </NavLink>
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
                Danh Mục
              </a>
              <div className="dropdown-menu bg-light" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item bg-light text-dark" to={'/admin/categories'}>Categories</NavLink>
              <NavLink className="dropdown-item bg-light text-dark" to={'/admin/products'}>Products</NavLink>
              <NavLink className="dropdown-item bg-light text-dark" to={'/'}>Users</NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 m-5">
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
