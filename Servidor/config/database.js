const mongoose = require('mongoose');

const connectDB = async function(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('base de datos conectada');

    }catch(error){
        console.log(error);ç
        process.exit(1);
    }
}