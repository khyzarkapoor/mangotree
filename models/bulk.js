const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const BulkSchema = mongoose.Schema({
    name:{
        type:String
    },
    encrypted:{
        type:Boolean,
        default:false
    },
    language:{
        type:String
    },
    type:{
        type:String
    },
    campaign:{
        type:String
    },
    path:{
        type:String
    },
    masking:{
        type:String
    },
    msg:{
        type:String
    },
    createdby:{
        type:String
    },
    created:{
        type:Date,
        default:Date.now
    },
    mnp:{
        type:String,
        default:'0'
    },
    intended:{
        type:String,
        default:'0'
    },
    telco:{
        type:String,
        default:'0'
    },
    priority:{
        type:String,
        default:'0'
    },
    mobileno:{
        type:String
    },
    
    sentid:{
        type:String
    },
    sentlength:{
        type:String
    },
    error:{
        type:String,
        default:'none'
    }
},{timestamps:true});

//to get this function from outside, export it
const Bulk = module.exports = mongoose.model('Bulk',BulkSchema);











