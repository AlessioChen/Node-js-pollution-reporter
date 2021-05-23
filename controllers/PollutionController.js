const Pollution = require("../models/Pollution")
const path = require("path")



const pollutionIndex = (req, res) => {

    Pollution.getAll((data) => {
        return res.json(data)
    })

}

const upload = (req, res) => {

    const data = {
        city: req.body.city,
        imagesrc: path.join('images', req.file.filename)
    }

    Pollution.addRow(data)
    res.send("Data added to DB")
}


module.exports = {
    pollutionIndex,
    upload

}