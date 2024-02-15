import { Request, Response } from "express";
import userM from "../Models/userM";


type User = {
    name: string, 
    password: string
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

  register(req: Request, res: Response) {

  }
}

export default new UserC()