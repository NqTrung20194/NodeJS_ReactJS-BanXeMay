const express = require("express");
const router = express.Router();
//gọi multer
var multer = require('multer');
const cors = require('cors')
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
    var name,price, parents, id_Parents, obj_add, content,img, categories_update, listProducts, sort, err, flag = 1;
    //lấy dử liệu
    name = req.body.name;
    parents = req.body.parents;
    content = req.body.content;
    price = req.body.price;
    img=req.body.img
    id_Parents=[]
    

    // kiểm tra dử liệu
    if (name==='') {
        err ='tên không được rỗng';
        flag = 0;
    }
    if (parents ==='') {
        err ='danh mục không được rỗng';
        flag = 0;
    }
    if (img ==='') {
        err ='Không được thiếu hình ảnh';
        flag = 0;
    }
    if(flag===1){
        Categories_model.find({name:parents},(err,data)=>{
            if(err){
                res.send({kq:0,err:err});
            }else{
                id_Parents.push(data[0]._id);

                obj_add = {
                    name :name,
                    parents :id_Parents,
                    content:content,
                    price:price,
                    img:img
                }
            Products_model.create(obj_add,(err,data)=>{
                if (err) {
                    res.send({ kq: 0, err: err });
                  } else {
                    
                    res.send({ kq: 1, data: data });
                  }
            })          
            }
        })
    }


   
});

router.use(cors());
// cấu hình đường dẫn lưu ảnh
var fileName ='';
var arrName ;
const storage = multer.diskStorage({
    // đường dẫn lưu file
    destination: (req, file, cb)=>{
        cb(null, 'public/../../web/public/Img_Upload');
    },

    // kiểm tra
    // 1. kiểm tra ảnh có tồn tại trong server hay chưa
    // 2. kiểm tra đuôi ảnh
    // 3. kiểm tra kích thước ảnh

    filename: (req, file, cb)=>{
        
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            fileName = Date.now()+'-'+file.originalname;
            arrName.push({['name']:fileName});
            
            cb(null, fileName);
        }
        else
        {
            return cb('file khong dung dinh dang');
        }
        
    }
});

// 3. kiểm tra kích thước ảnh
const limits = {filesize:1024*50};
// gọi ra sử dụng, single: úp 1 tấm ảnh, array: nhiều tấm ảnh
const upload = multer({ storage: storage,limits:limits }).array('img');

router.post('/add/uploadimg', (req, res)=>{
    // const file = req.body.FormData;
    arrName =[]

    upload(req, res, (err)=>{
        
        if(err){
            res.send({kq:0, err:err});
        }else{
            res.send({kq:1, message: 'File úp thành công.',data:arrName});
            
        }
    });
});

module.exports = router;
