const mongoose = require('mongoose');

const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false,
}).then(() => {
    console.log("connected to database succesfully");
}).catch(err => console.log("connection falied to database"))