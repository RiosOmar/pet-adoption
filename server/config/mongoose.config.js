const mongoose = require('mongoose')
const db_name = "thing_db" // change this to the database that is needed 
mongoose.connect(`mongodb://localhost/${db_name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>  console.log("Connecting Mongoose.."))
    .catch(err => console.log("MELTDOWN! MELTDOWN! MELTDOWN!",err))