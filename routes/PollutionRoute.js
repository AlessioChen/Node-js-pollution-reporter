//modules
const express = require('express')
const router = express.Router()

const uploadPollution = require('../utils/multer')


//controllers
const pollutionController = require("../controllers/PollutionController.js")
const homeController = require("../controllers/HomeController")


//routes
router.get("/", homeController)
router.get("/all", pollutionController.pollutionIndex)
router.post("/upload", uploadPollution, pollutionController.upload)
// router.post("/upload", pollutionController.upload)
module.exports = router