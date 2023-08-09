const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String
  },
  filename: {
    type: String,
  },
  path: {
    type: String,
  },
  mimetype: {
    type: String,
  },
  size: {
    type: Number,
  }
});

const videoModel = mongoose.model('Video', videoSchema);

module.exports = videoModel;
