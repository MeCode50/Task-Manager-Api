const mongoose = require('mongoose');

const connectionString =
    "mongodb+srv://Munachimso:victorycollins31@node-project.fjx7kzs.mongodb.net/?retryWrites=true&w=majority"

mongoose
.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
.then(()=>console.log('CONNECTED TO THE DB...'))
.catch((err) => console.log(err))

