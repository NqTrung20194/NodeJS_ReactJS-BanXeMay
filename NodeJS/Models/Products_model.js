// kết nối vs mongoDB
const mongoose = require('mongoose');

//gọi schema
const schemaProduct = mongoose.Schema({
    id_user: mongoose.Types.ObjectId,
    name : {
        type : String,
        require : true,
        unique:true
    },
    price:{
        type: Number,
        default:0
    },
    parents : Array,
    content : String,
    sort : String,
    img : {
        type : Array,
        require : true
    },
    status : {
        type : Boolean,
        default : 0
    },
    ViewProduct : {
        type : Number,
        default:0
    },
    trash : {
        type: Boolean,
        default:0
    }
});

// tạo collection
module.exports = mongoose.model('Products', schemaProduct);