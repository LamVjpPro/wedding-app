const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const path = require('path');
const multer = require('multer');
const uploadCloud = require('./src/routes/cloudinary-upload');
const uploadVideos = require('./src/routes/cloudinary-upload')
const congraModel = require('./src/models/info.model');
const {connectDB} = require('./src/configs/config')
require('dotenv').config();

const port = process.env.PORT

connectDB()

const createCongratulation = async (req, res) => {
  try {
    const newCongra = req.body;
    const congra = await congraModel.create({ ...newCongra });
    return res.status(201).json(congra);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getCongratulation = async (req, res) => {
  try {
    const congra = await congraModel.find();
    res.status(201).json(congra);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


// app.post('/api/congratulations', createCongratulation);
// app.get('/', getCongratulation);
app.use('/upload', uploadCloud);
app.use('/upload', uploadVideos)




app.listen(port, () => {
    console.log(`App is running port ${port}`);
})

