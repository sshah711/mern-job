const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT;

// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)
//middleware
app.use(express.json())
app.use(cors())

//sshah38008 
//7Maninagar 44NMgozuGWV1xELM

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //create Db
    const db= client.db("Jobify");
    const jobsCollections = db.collection("demoJobs");

    //post jobs
    app.post("/post-job", async(req,res) => {
        const body = req.body;
        body.createAt = new Date();
        //console.log(body);
        const result = await jobsCollections.insertOne(body);
        if(result.insertedId){
            return res.status(200).send(result);
        }else{
            return res.status(404).send({
                message: "can not insert!! try again later",
                status: false
            })
        }
    } )


    //get all jobs
    app.get("/all-jobs", async(req,res) => {
        const jobs= await jobsCollections.find({}).toArray();
        res.send(jobs);
    } )

    //get jobs by email
    app.get("/my-job/:email", async(req,res) => {
        //console.log(req.params.email)
         const jobs= await jobsCollections.find({postedBy : req.params.email}).toArray();
         res.send(jobs);
    } )




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello Developer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// const express = require('express')
// const app = express()

// //load config from env file 
// require("dotenv").config()
// const PORT = process.env.PORT 

// // middleware to parse json request body
// app.use(express.json())


// //start server
// app.listen(PORT,(req,res)=>{
//     console.log("App is running successfully")
// })


// // connect to the database
// const dbConnect = require("./db")
// dbConnect()


// //default route
// app.get('/',(req,res)=>{
//     res.send("Hello I am sakshi")
// })