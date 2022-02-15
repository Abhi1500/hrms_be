const multer  = require('multer');
const path = require('path');   
const filePath = path.join(__dirname, '../storage/bucket');
let imgKey = 'img';

exports.uploadImg = (key) => {
    imgKey = key;
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, filePath)
        },
        filename: function (req, file, cb) {
          const [name,ext] = file.originalname.split('.');
          if(ext == 'png' || ext == 'PNG' || ext == 'jpg') 
          cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
          else
          cb(new Error('Wrong File formet (user only .png, .jpg, .PNG)'))
        }
      })
      
    return multer({ storage: storage }).single(key)
}

exports.handleImg = (req, res, next) => {
  req.body[imgKey] = `https://fast-anchorage-32246.herokuapp.com/${req.file.filename}`;
  next();
}