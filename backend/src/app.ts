import connect from './Core/Database/database'
import Server from './server'

class Application {

    constructor(){
      this.start()
    }

    private async start() {
        await this.database()
        this.server()
    }

    private async database() {
       const mongoUri = process.env.MONGO_URI 
       if(!mongoUri) throw new Error('Mongo URI is not defined')
       await connect(mongoUri) //connect from ./Core/Database/database.ts
    }


    private server() {
     const port = process.env.PORT || '3000'
     new Server(port) //from ./server.ts
    }

}


new Application()