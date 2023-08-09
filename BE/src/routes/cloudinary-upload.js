
const router = require('express').Router();
const fileUploader = require('../configs/cloudinary.config');
const uploadController = require('../controllers/upload.controller')

const storage = require('../lib/multer')

router.post('/', fileUploader.single('image'), (req, res) => {
    res.status(201).json('succses')
})

router.post('/uploadVideo', storage.single('file'), uploadController.uploadVideo);

module.exports = router;
