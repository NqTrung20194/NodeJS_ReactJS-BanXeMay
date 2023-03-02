import { history } from "../../App";
import { http } from "../../Utility/Setting";

export const danhMucXe = () => {
  return async (dispatch) => {
    try {
      let result = await http.get("/categories");

      // đưa dử liệu lên redux
      dispatch({
        type: "CATEGORIES",
        data: result.data.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};

export const chiTietdanhMucXe = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`/categories/detail/` + id);

      // đưa dử liệu lên redux
      dispatch({
        type: "DETAIL_CATEGORIES",
        data: result.data.data[0],
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};

export const editDetail = (detail) => {
  console.log(detail);
  return async (dispatch) => {
    try {
      let resultDetail = await http.get(`/categories/detail/` + detail.id);
      const rsDt = resultDetail.data.data[0];
      let obj_update = {};
      if (detail.name === "") {
        detail = { ...detail, ["name"]: rsDt.name };
      }
      if (detail.parents === "") {
        detail = { ...detail, ["parents"]: rsDt.parents[0] };
      }

      // console.log(detail)

      let result = await http.post(`/categories/edit/` + detail.id, detail);

      // đưa dử liệu lên redux
      dispatch({
        type: "UPDATE_DETAIL_CATEGORIES",
        data: result.data.data,
      });
      history.push("/admin/categories");
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};

export const deleteOne = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.post(`/categories/deleteone/` + id);

      // đưa dử liệu lên redux
      dispatch({
        type: "DELETEONE_DETAIL",
        data: result.data.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
