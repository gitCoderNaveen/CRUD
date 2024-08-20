const express=require('express')
const industrialPaga=require('./routes/industrialPaga')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors({}))
mongoose.connect('mongodb+srv://deployUser:Welcome123@newcluster.8zvx9.mongodb.net/Customers?retryWrites=true&w=majority&appName=NewCluster')

mongoose.connection.on('connected',()=>{
    console.log("Mongodb successfully connected")
})
app.get('/get',(req,res)=>{
    res.send("Backend server")
})
app.use('/industrials',industrialPaga)

app.use(express.json())

app.listen(4001,()=>{
    console.log("Server is running on port 4001")
})