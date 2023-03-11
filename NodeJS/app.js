// Gọi framework express
const express =  require('express');
const app = express();

// Gọi body-parser
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

// Gọi database
require('./database');

//gọi multer
var multer = require('multer');

// mở api
app.use((req, res, next)=>{
    // port dung voi sever goi url
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

//Gọi js
app.use(bodyParser.json())

// tạo đường truyền tỉnh
app.use(express.static(__dirname + '/public'));



// app.get('/index',(req,res)=>{
//     res.send("hello");
// })

// gọi Router

const api_Router = require('./Router/Router')
app.use('/',api_Router);

// tạo cổng localhost 
app.listen(3100,()=>{
    console.log('server đã sằn sàng');
})