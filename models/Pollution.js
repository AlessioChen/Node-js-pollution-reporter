const db = require("../utils/dbConnection")

// get all the rows from db table
const getAll = (callback) => {

    let sql = "SELECT * from ??"
    let inserts = ['pollution']
    query = db.format(sql, inserts)

    db.query(query,
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

    let sql = `INSERT INTO ?? (?? , ??) VALUES (?? ,??)`
    let inserts = ['pollution', 'city', 'photo', '${data.city}', '${data.imagesrc}']

    const query = db.format(sql, inserts)
    console.log(query)
    db.query(query, (error, results) => {

        if (error) {
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