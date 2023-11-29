const mongoose = require('mongoose');

const connectionString =
    "mongodb+srv://Munachimso:victorycollins31@node-project.fjx7kzs.mongodb.net/?retryWrites=true&w=majority"

const connectDB = (url)=>{
 return mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
}

module.exports = connectDB



