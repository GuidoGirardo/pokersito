import express, { NextFunction, Request, Response } from 'express'
import router from './Routes/router'
import cors from 'cors'
class Server {

    public app = express()

    constructor(port: string){
        this.middlewares()
        this.startRouter()
        this.startServer(port)
    }

    private middlewares(){
     this.app.use(cors())
     this.app.use(express.json())
    }

    private startServer(port: string) {
        this.app.use((error: Error, req: Request, res: Response)=>{
           console.log(error.stack);
           
           res.status(500).json(error.message)
        })
        this.app.listen(port)
        console.log(`Server running on port ${port}`)
    }
    private startRouter(){
        this.app.use(router)
    }
}

export default Server