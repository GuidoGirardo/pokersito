import express from 'express'
import userC from '../Controllers/userC'
import promiseErrorHandler from '../utils/promiseError'

class Router {
    private application = express.Router()
    
    constructor(){
        this.configRouter()
    }

    private configRouter(){
     this.application
       .post('/startsession', promiseErrorHandler(userC.startSession))
       .post('/register', promiseErrorHandler(userC.register))
    }

    get router(){
        return this.application
    }
}

export default new Router().router