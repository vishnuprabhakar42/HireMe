const mongoose = require('mongoose');

const CompanySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    notifications:[String]


});

//Naming the created schema 'CompanySchema'
const Company=mongoose.model('Company',CompanySchema);
//then export it to use 
module.exports=Company;