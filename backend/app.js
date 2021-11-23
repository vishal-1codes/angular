const express=require('express')

const mongoose=require('mongoose')
const cors=require('cors')

const user=require('./module/users')

const app=express()

app.use(cors())

app.use(express.json())

const PORT=8080

mongoose.connect('mongodb+srv://m001-student:m001122@cluster0.34cov.mongodb.net/factsbook?retryWrites=true&w=majority',(err)=>{
if(err){
    console.log("errr",err);
}
else{
    console.log("database connected");
}
});



app.get('/',(req,res)=>{
    res.status(200).send("get method call")
})

app.get("/:id",(req,res) => {
    user.findById(req.params.id).then(user => {
        res.send(user)
    }).catch(err => {
        res.send(err)
    })
})

app.post('/send',(req,res)=>{
    //here we use user schema
    var new_user=new user({
        username:req.body.username,
        email:req.body.email,
        number:req.body.number,
        city:req.body.city,
    })
    //here we save data in new_user
    new_user.save(function(err,result){
        if(err){
            console.log(err);
        }
        else{
            //data link with user
            res.status(200).send({user:result})
            console.log(result)
        }
    })
    console.log('received data',req.body);
})

app.delete("/delete/:id",(req,res) => {
    console.log(req.params)
    user.findByIdAndRemove(req.params.id).then((user) => {
        res.send({asa:true,user:user})
    }).catch((err) => {
        res.send({asa:false})

    })
})

app.put("/update/:id",(req,res)=>{
    console.log("hii")
    user.findByIdAndUpdate(req.params.id,req.body).then((user)=>{
        res.send({asa:true,user:user})
    }).catch((err)=>{
        res.send({asa:false})
    })
})

app.listen(PORT,()=>{
    console.log(`port listen on ${PORT}`);
})

