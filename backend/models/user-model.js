const mongoose=require('mongoose')

const industrialSchema=new mongoose.Schema({
    sno:Number,
    firmname:String,
    doorno:Number,
    street:String,
    area:String,
    city:String,
    pincode:Number,
    mobile:Number,
    product:String
})

const industrialModel=mongoose.model('industrialData',industrialSchema)

module.exports=industrialModel