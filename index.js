const express = require('express');
// const CategoryRoutes = require('./routes/CategoryRoutes.js');
// const database = require('./config/Database.js');

const app = express();
const port = process.env.PORT;

//check connection database
// try{
    
//     database.authenticate();

//     console.log("Database connected...");

// }catch(error){

//     console.log("Database not connected...", error);

// }

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({extended: true}));

//Route API
// app.use('/api/category/',CategoryRoutes);
app.use('/api/category/',(req, res)=>{

    res.send({

        "message" : "success"
        
    })

});

//server running
app.listen(port,()=>{

    console.log(`Server running at port ${port} `);

});

module.exports = app;