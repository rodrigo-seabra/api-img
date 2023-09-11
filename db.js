const mongoose = require('mongoose');

require('dotenv').config()

mongoose.set('strictQuery' , true)

async function main(){
    await mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ac-sjpbmg5-shard-00-00.jcrzjbt.mongodb.net:27017,ac-sjpbmg5-shard-00-01.jcrzjbt.mongodb.net:27017,ac-sjpbmg5-shard-00-02.jcrzjbt.mongodb.net:27017/?ssl=true&replicaSet=atlas-bbshg7-shard-0&authSource=admin&retryWrites=true&w=majority`)
    console.log("Conectamos com sucesso")
}

main().catch((err) => console.log(err))


module.exports = main;