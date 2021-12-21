import  mongoose  from "mongoose";
import environmentVariables from "../config/environment";

class MongoConnection {
    public async connect():Promise<void>{
        if(typeof environmentVariables.MONGO_CONNECTION !== "string"){
            throw new Error("Não é possivel conectar ao banco de dados");
        } 
        
        try {
            await mongoose.connect(environmentVariables.MONGO_CONNECTION)
            console.log('Database Connected')
        } catch (error) {
            console.error(error)
            process.exit()
        }
    }
}

export default new MongoConnection