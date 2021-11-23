const mongoose=require('mongoose')

const schema=mongoose.Schema

const userSchema=new schema({
    username:String,
    email:String,
    number:String,
    city:String,
})


const Model=mongoose.model('formusers',userSchema)

module.exports=Model