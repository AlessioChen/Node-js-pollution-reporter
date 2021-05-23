//uploads images into file system 
const path = require('path')
const multer = require('multer')

//defines where to store files and names them uniquely 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    //input filter only images allowed
    filerFilter: (req, file, cb) => {
        if (file.mimetype != "image/png" && file.mimetype != "image/jpg" & file.mimetype != "image/gif" && file.mimetype != "image/jpeg") {
            return cb(null, false, new Error("Only images allowed"))
        }
        cb(null, true)
    }
})


module.exports = upload.single('image')