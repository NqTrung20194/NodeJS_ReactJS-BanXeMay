const express = require("express");
const router = express.Router();
// gọi Products_model 
const Products_model = require("../Models/Products_model");
const Categories_model = require('../Models/Categories_model');

//thêm danh sách xe
// lấy danh mục xe
router.get('/add',(req,res)=>{
    Categories_model.find((err,data)=>{
        if(err){
            res.send({kq:0,err:err});
        }else{
            res.send({kq:1,data:data});
        }
})
});
// tạo danh sách sản phẩm
router.post('/add',(req,res)=>{
    var name,price,id_parents, parents,obj_update, content,listProducts, sort, err, flag = 1;
    //lấy dử liệu
    name = req.body.name;
    parents = req.body.parents;
    content = req.body.content;
    price = req.body.price;

    // kiểm tra dử liệu
    if (name=='') {
        err ='tên không được rỗng';
        flag = 0;
    }
    if (parents=='') {
        err ='danh mục không được rỗng';
        flag = 0;
    }
    if(flag===1){
        Categories_model.find({_id:parents},(err,data)=>{
            if(err){
                res.send({kq:0,err:err});
            }else{
                res.send({kq:1,data:data});
            }
        })
    }
});





module.exports = router;
