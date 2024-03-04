const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const ProcessModel = require('./models/Processes');
const processModel = require('./models/Processes');


const app = express();
app.use(cors())
app.use(express.json())

//set up server
app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running on " + process.env.SERVER_PORT)
})


//connect to mongoose
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Successfully connected to DB.")
        //listen on port
        app.listen(process.env.REACT_APP_DB_PORT, () => {
            console.log("Listening on port", process.env.DB_PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



// CREATE ENTRY

app.post("/create", (req, res) => {
    ProcessModel.create(req.body)
        .then(processes => res.json(processes))
        .catch(err => res.json(err))
})

//GET ALL ENTRIES

app.get('/', (req, res) => {
    processModel.find({}).
        then(processes => res.json(processes))
        .catch(err => res.json(err))
})

//GET ENTRY

app.get('/getProcess/:id', (req, res) => {
    const id = req.params.id;
    ProcessModel.findById({ _id: id })
        .then(process => res.json(process))
        .catch(err => res.json(err))
})

//UPDATE ENTRY

app.put('/updateProcess/:id', (req, res) => {
    const id = req.params.id;

    ProcessModel.findByIdAndUpdate({ _id: id },
        {
            name: req.body.name,
            description: req.body.description,
            serviceArea: req.body.serviceArea
        })
        .then(process => {
            res.json(process)
        })
        .catch(err => {
            res.json(err)
        })
})

// DELETE ENTRY

app.delete('/deleteProcess/:id', (req, res) => {
    const id = req.params.id;
    ProcessModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})