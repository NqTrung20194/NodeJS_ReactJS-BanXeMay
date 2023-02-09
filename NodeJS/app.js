// Gọi framework express
const express =  require('express');
const app = express();

// Gọi body-parser
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

// Gọi database
require('./database');

//Gọi js
app.use(bodyParser.json())

// tạo đường truyền tỉnh
app.use(express.static(__dirname + '/public'));



app.get('/index',(req,res)=>{
    res.send("hello");
})

// tạo cổng localhost 
app.listen(3000,()=>{
    console.log('server đã sằn sàng');
})