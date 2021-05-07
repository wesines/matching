const express = require('express')
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
const routesList = require('./routes');
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.listen(8080, () => {
    console.log("Server connected")
})

app.use('/', routesList);












// app.get('/', (req, res) => {
//     // res.send("hello")

//     res.status(200).json(currentUser)

//     // console.log("Welcome to our MOMJI_NodeJs Test")
//     // res.send("Welcome to our MOMJI_NodeJs Test")
// })
