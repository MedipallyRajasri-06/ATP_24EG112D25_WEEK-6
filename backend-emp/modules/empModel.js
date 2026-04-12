 import {Schema,model} from 'mongoose'

//create emp schema
const empSchema = new Schema({
    //structure of emp resource
      EMPName:{
        type:String,
        required:[true,"EMPName is required"],
        minLength:[4,"Min length of EMPName is 4 chars"],
        maxLength:[20,"EMPName size exceed 20 chars"],
      },
      email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email already existed"]
      },
      mobile:{
        type:Number,
        required:[true,"mobile is required"],
        unique:[true,"mobile already existed"]
      },
      designation:{
        type:String,
        required:[true,"designation is required"],
      },
      companyName:{
        type:String,
        required:[true,"companyName is required"],
      }

},{
  versionKey:false,
  timestamps:true,
},
)


//generate empModel
export const empModel=model("emp",empSchema)