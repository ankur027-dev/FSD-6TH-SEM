import { MongoClient } from "mongodb";
const MONGO_URI="mongodb+srv://user:admin@crud.3c9zz1b.mongodb.net/?appName=CRUD";
const DB_NAME="users";
const client =new MongoClient(MONGO_URI);

const dbconnect =async ()=>{
    try{
        await client.connect();
        console.log("Db is connected successfully");
        return client.db(DB_NAME);
    }
    catch(error){
        console.log("db conection error ", error.message);

    }
}
// dbconnect();
export default dbconnect;