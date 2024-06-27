// 1.import mongoose
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://annemariya:mgoAnne@cluster0.3mmoax8.mongodb.net/sample1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
}).catch((error)=>{
    console.log(error)
})