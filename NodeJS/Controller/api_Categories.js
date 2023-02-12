const express = require("express");
const router = express.Router();
// gọi categories model
const categories_model = require("../Models/Categories_model");

// Thêm danh mục xe
router.post("/add", (req, res) => {
  var name,
    parents,
    content,
    listProduct,
    sort,
    err,
    flag = 1;
  // lấy dử liệu
  name = req.body.name;
  parents = req.body.parents;
  content = req.body.content;
  listProduct = req.body.listProduct;

  // kiểm tra dử liệu
  if (name.trim(" ") === "") {
    err = "Tên không dược rỗng";
    flag = 0;
  }
  // tạo 1 object từ các thông tin trên
  obj_insert = {
    name: name,
    parents: parents,
    content: content,
    listProduct: listProduct,
  };

  // tổng kết
  if (flag === 1) {
    categories_model.create(obj_insert, (err, data) => {
      if (err) {
        res.send({ kq: 0, err: err });
      } else {
        res.send({ kq: 1, data: data });
      }
    });
  }
});

// Lấy danh mục xe 
router.get('/',(req,res)=>{
    categories_model.aggregate([{
       "$lookup":{
        "from": "categories",
        "localField": "name",
        "foreignField": "parents",
        "as": "childs"
      } 
    }]).exec((err,data)=>{
        if(err){
            res.send({kq:0,err:err});
        }else{
            res.send({kq:1,data:data});
        }
    })
});

module.exports = router;
