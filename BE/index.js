const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const app = express();
// Db connect
mongoose.connect(process.env.URI, {})
.then(() => console.log('DB connect'))

mongoose.connection.on('error', (err) => {
    console.log(`DB connection failed: ${err.message}`);
})


app.get('/', (req, res) => {
    res.send('This is the home page')
})


const port = process.env.PORT

app.listen(port, () => {
    console.log(`App is running port ${port}`);
})

