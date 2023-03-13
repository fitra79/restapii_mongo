const express = require('express');
const cors = require("cors");
const db = require("./app/models");
const app = express();
// const { MongoClient, ServerApiVersion } = require('mongodb');


const corsOptions = {
    origin: "*"
};


//-- Registar cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//--Connect to database
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// const client = new MongoClient(db.url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


// const uri = "mongodb+srv://fitra:Gemscool123_@atlascluster.8xklomu.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// // client.connect(err => {
// //   const collection = client.db("test").collection("devices");
// //   // perform actions on the collection object
// //   client.close();
// // });
// client.connect()
// .then((result) => {
//     console.log('berhasil')
// }).catch((err) => {
//     console.log(err);
// })


db.mongoose.connect(db.url, mongooseConfig)
.then((results) => {
    console.log("Success to Database Online");
}).catch((err) => {
    console.log(err);
});


//-- memanggil routes films
require("./app/routes/filmRoute")(app);
app.get('/', (req, res) => {
    res.send({
        message: "Welcome To restApi By Fitra"
    })
})


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));