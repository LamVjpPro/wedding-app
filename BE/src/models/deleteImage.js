const cloudinary = require('cloudinary').v2;


// Cấu hình Cloudinary
cloudinary.config({
    cloud_name: 'difhv6lu5',
    api_key: '633272124542815',
    api_secret:'cHxskdn69ADKchBKofKGpoJGjtg',
}
);


// Hàm để xóa ảnh
async function deleteImage(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log('Image deleted:', result);
    return result;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
}

module.exports = deleteImage;