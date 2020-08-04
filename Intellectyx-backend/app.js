const express = require('./node_modules/express');
const mongoose = require('mongoose');
const cors = require('./node_modules/cors/lib');

const app = express();

//Middlewares
app.use(express.json());

//Cors
app.use(cors({origin:'*'}));


//Routing
app.get('/',(req,res)=>{
    res.json({message:'Welcome to simple crud app'})
});

const shopRoute = require('./router/createShopRoute');
app.use('/shop',shopRoute);


//MongoDb Atlas Connection
mongoose.connect( " mongodb+srv://mahith:kingofking@cluster0.xw2f1.mongodb.net/<dbname>?retryWrites=true&w=majority ",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log('Successfully Connected to MongoDb Atlas')})
.catch(err=>console.log(err));

const port = process.env.PORT || 9000;

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});
