import { Request, Response } from "express";
import userM from "../Models/userM";


type User = {
    name: string, 
    password: string,
    bankBalance?: string,
    uniformBankCode?: string
}

class UserC {
  constructor() {}

  async startSession(req: Request, res: Response) {
    const {name, password} = req.body as User
    
    const createdUser = await userM.create({name, password});
    
    const user = {
            name: createdUser.name, 
            password: createdUser.password
        }        
    res.status(201).json({ msg: `user created with sucess.`, user })
  }

  async register(req: Request, res: Response) {
    const { name, password, uniformBankCode} = req.body as User;
    
    const doesUserExists = await userM.findOne({name,password})
  
    if(doesUserExists) {
     doesUserExists.uniformBankCode = uniformBankCode
     const savedUser = await doesUserExists.save()

     const registeredUser = {
      name: savedUser.name, 
      password: savedUser.password
    }
     return res.status(201).json({msg: `user registered with sucess.`, registeredUser})
    }

    const user = await userM.create({name, password, uniformBankCode})
    res.status(201).json({ msg: `user created with sucess.`, user });
  }
}

export default new UserC()