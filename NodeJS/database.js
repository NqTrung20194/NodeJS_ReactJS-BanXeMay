const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb+srv://qtrung:.nqtrung.@cluster0.wdpp3.mongodb.net/NodeJS_ReactJS-BanXeMay?retryWrites=true&w=majority', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

.then(()=>{console.log('ket noi thanh cong')})
.catch(()=>{console.log('that bai')});