
const mongoose=require('mongoose');

const messageSchema=new mongoose.Schema({
    senderName:{
        type:String,
        required:true
    },
    sendingTime:{
        type:String,
        required:true
    },
    senderMsg:{
        type:String,
        required:true
    }

})

//create the model of the above messageSchema
const Message=mongoose.model('Message',messageSchema);

module.exports=Message;