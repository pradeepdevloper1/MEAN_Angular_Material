var mongoose =require('mongoose');
var Employee=mongoose.model('employees',{
    empid: {type:String},
    city: {type:String},
    department:{type:Number},
    email: {type:String},
    fullName: {type:String},
    gender:{type:String},
    hireDate: {type:String},
    isPermanent:{type:Boolean},
    mobile:{type:String}
 });
module.exports={Employee};