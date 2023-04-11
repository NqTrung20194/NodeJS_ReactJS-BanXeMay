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
    type,
    err,
    flag = 1;
  // lấy dử liệu
  name = req.body.name;
  parents = req.body.parents;
  content = req.body.content;
  listProduct = req.body.listProduct;
  type = req.body.type;

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

// Lấy tất cả danh mục xe 
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

//edit 1 danh mục
router.post('/edit/:id',(req,res)=>{
var name, parents, content,id, status, listProduct, err='', flag = 1 ;

// lấy dử liệu của from từ body
name = req.body.name;
parents = req.body.parents;
content = req.body.content;
status = req.body.status;
listProduct = req.body.listProduct;
type = req.body.type;

// lấy id của phẩn tử cần update từ thanh param
id = req.params.id;

// thêm dử liệu thành 1 array
const obj_update = {
  'name' : name,
  'parents' : parents,
  'content' : content,
  'status' : status,
  'listProduct' : listProduct,
  'type' : type,
}
// res.send(obj_update);

// thự hiện update phần tử
categories_model.updateMany({_id:id},obj_update,(err,data)=>{
if(err){
  res.send({kq:0,err:err});
}else{
  res.send({kq:1,data:data});
}
});
});

//xóa 1 danh mục
router.post('/deleteone/:id',(req,res)=>{
  var id, err,mess,flag=1;

  // lấy dử liệu từ thanh param
  id = req.params.id;

  //kiểm tra dử liệu có tồn tại hay không
  if(id.trim() ===''){
    flag = 0;
    err = 'Không có kết quả';
  }
  if(flag === 1){
    // Tìm và xóa
    categories_model.findByIdAndDelete({_id:id},(err,data)=>{
      if(err){
        res.send({kq:0,err:err});
      }else{
        res.send({kq:1,data:data});
      }
    });
  }
});

// tìm thông tin chi tiết 1 danh mục
router.get('/detail/:id',(req,res)=>{
  // lấy thông tin từ param
  // var id = req.params.id;
  // res.send(id);
  categories_model
  .find({_id : req.params.id},(err,data)=>{
    if(err){
      res.send({kq:0,err:err});
    }else{
      res.send({kq:1,data:data});
    }
  });
});

module.exports = router;
