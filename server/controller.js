const drinks = require('./db.json')

//get, put, delete, post

module.exports = {
    getDrinks: (req, res) => {
        res.status(200).send(drinks)
    }
}