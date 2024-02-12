import express from 'express'

class Server {

    public app = express()

    constructor(port: string){
        this.start(port)
    }

    private start(port: string) {
        this.app.listen(port)
        console.log(`Server running on port ${port}`)
    }
}

export default Server