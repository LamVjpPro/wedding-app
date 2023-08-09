
const Upload = require('../models/upload.model');
const cloudinary = require('../lib/cloudinary');

exports.uploadVideo = (req, res) => {
    cloudinary.uploader.upload(req.file.path,
        {
            resource_type: "video",
            folder: "video",
          },
        
        (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        var upload = new Upload({
            name: req.file.originalname,
            url: result.url,
            cloudinary_id: result.public_id,
            description: req.body.description,
        });
        if(upload) {
            return res.status(200).send({
                name: req.file.originalname,
                url: result.url,
                cloudinary_id: result.public_id,
                description: req.body.description,
            })
        } else {
            return res.status(201).json('Upload Video Thất Bại')
        }
    }
    );
}