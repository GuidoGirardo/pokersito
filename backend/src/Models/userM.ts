import { model, Schema } from "mongoose";


const userSchema = new Schema({
  name: { 
    type: String, 
    required: true,
    unique: true
  },
  password: { 
    type: String,
    required: true 
  },
  uniformBankCode: { 
    type: String,
    minLength:22,
    maxLength: 22 
  },
  bankBalance: { 
    type: String, 
    default: "0" 
  },
});

const userM = model('userCollection', userSchema)

export default userM