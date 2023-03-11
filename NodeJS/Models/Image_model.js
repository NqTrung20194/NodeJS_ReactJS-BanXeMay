// kết nối vs mongoDB
const mongoose = require('mongoose');

//gọi schema
const schemaProduct = mongoose.Schema({
    id_user: mongoose.Types.ObjectId,
    name : {
        type : String,
        require : true,
        unique:true
    }
});

// tạo collection
module.exports = mongoose.model('Products', schemaProduct);