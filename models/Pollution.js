const db = require("../utils/dbConnection")

// get all the rows from db table
const getAll = (callback) => {

    db.query("SELECT * from pollution",
        (error, results) => {
            if (error) {
                callback(error.stack)
            }

            const resultJson = JSON.parse(JSON.stringify(results))
            const data = []
            resultJson.map((item) => {
                data.push(item)
            })
            console.log(data)
            callback(data)
        })

}

// insert new row into db table 
const addRow = (data) => {

    const query = `INSERT INTO pollution (city, photo) VALUES ('${data.city}', '${data.imagesrc}')`
    db.query(query, (error, results) => {
    
        if(error){
            return error.stack
        }
        console.log("Data added to db")    
    }

    )


}

module.exports = {
    getAll,
    addRow
}