// kết nối vs mongoDB
const mongoose = require('mongoose');

//gọi schema
const schemaCategory = mongoose.Schema({
    id_user: mongoose.Types.ObjectId,
    name : {
        type : String,
        require : true,
        unique:true
    },
    type: {
        type : Boolean,
        default : 0
    },
    parents : Array,
    listProduct : Array,
    content : String,
    sort : String,
    status : {
        type : Boolean,
        default : 0
    },
    trash : {
        type: Boolean,
        default:1
    }
});

// tạo collection
module.exports = mongoose.model('categories', schemaCategory);