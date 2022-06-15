const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Technology:{
        type:String,
        required:true
    },
    isSubscribed:{
        type:Boolean,
        required:true,
        default:false,
    }
})
module.exports=mongoose.model('User',userSchema);