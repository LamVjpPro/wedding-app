const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const path = require('path');
const multer = require('multer');
const cors = require("cors");
const uploadCloud = require('./src/routes/cloudinary-upload');
const uploadVideos = require('./src/routes/cloudinary-upload');
const cloudinary = require('cloudinary').v2;
const congraModel = require('./src/models/info.model');
const {connectDB} = require('./src/configs/config')
const deleteImage = require('./src/models/deleteImage')
require('dotenv').config();


const port = process.env.PORT

connectDB()

app.use(cors());
app.use(cors({
origin: 'http://localhost:3000' }));


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

// const deleteImage = async (req, res) => {
//    const public_id = req.params.public_id;
//    console.log(public_id);
   

//   try {
//     const result = await cloudinary.uploader.destroy(public_id, function(err, result) { console.log(result) });
//     res.status(200).json({ message: 'Image deleted successfully'});
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred', message: error.message });
//   }
// }


// // delete image
// app.delete("/delete-image/:cloudinary_id", (request, response) => {
//   // unique ID
//   const { cloudinary_id } = request.params;
//   console.log(cloudinary_id);

//   // delete image from cloudinary first
//   cloudinary.uploader
//     .destroy(cloudinary_id)

//     // delete image record from postgres also
//     .then(() => {
//       db.pool.connect((err, client) => {

//       // delete query
//       const deleteQuery = "DELETE FROM images WHERE cloudinary_id = $1";
//       const deleteValue = [cloudinary_id];

//       // execute delete query
//       client
//         .query(deleteQuery, deleteValue)
//         .then((deleteResult) => {
//           response.status(200).send({
//             message: "Image Deleted Successfully!",
//             deleteResult,
//           });
//         })
//         .catch((e) => {
//           response.status(500).send({
//             message: "Image Couldn't be Deleted!",
//             e,
//           });
//         });
//       })
//     })
//     .catch((error) => {
//       response.status(500).send({
//         message: "Failure",
//         error,
//       });
//     });
// });

app.delete('/delete-image/:publicId', async (req, res) => {
  const publicId = req.params.publicId;
  console.log(publicId);

  try {
    await deleteImage(publicId);
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the image' });
  }
});

app.post('/api/congratulations', createCongratulation);
app.get('/', getCongratulation);
app.use('/upload', uploadCloud);
app.use('/upload', uploadVideos)
// app.delete('/delete-image/:public_id', deleteImage)



app.listen(port, () => {
    console.log(`App is running port ${port}`);
})

