const mongoose = require('mongoose');

const connectBD = async function(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            
        });

        console.log('base de datos conectada');

    }catch(error){
        console.log(error);ç
        process.exit(1);
    }
}

module.exports = connectBD;