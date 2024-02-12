import mongoose from "mongoose"

class Database {
    constructor(){}
    
    public async connect(mongoUri: string) {
        try {
            await mongoose.connect(mongoUri)
            console.log('connected to database');
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default new Database().connect