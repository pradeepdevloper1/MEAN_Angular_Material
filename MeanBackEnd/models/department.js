var mongoose =require('mongoose');
var Department=mongoose.model('departments',{
   departmentid: {type:Number},
    name: {type:String}
 });
module.exports={Department};