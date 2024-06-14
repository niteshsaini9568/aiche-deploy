require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const contactRouter = require('./routes/contact.js');
const registrationRouter = require('./routes/registration.js');
const buyRouter = require('./routes/buy.js');
const path = require("path");

let port = process.env.PORT || 5000;

app.use(cors(
    {
        "origin" : "*",
    }
)); 
app.use(express.json()); 
app.use("/", contactRouter);
app.use("/", registrationRouter);
app.use("/", buyRouter);

const buildPath = path.join(__dirname, "../Frontend/dist");
app.use(express.static(buildPath));

app.get('*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
    console.log("Server is listening at the port", port);
});
