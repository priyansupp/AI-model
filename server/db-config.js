const mongoose = require('mongoose');

class Database {

    constructor() {
        this._connect();
    }
    URL = "mongodb+srv://priyansupp:Micro5818@cluster0.p2gjoi7.mongodb.net/AI";

    _connect() {
        mongoose.connect(process.env.URL || this.URL)
        .then((res) => {
            // const db = mongoose.connection.useDb('AI');
            // console.log(`The connection to database : ${db.name} has been established`);
            console.log(`Connection to database has been established`);
        })
        .catch(err => {
            console.log(`The error is : ${err}`);
        })
    }
}


// export a new object of class Database(will work as a Singleton)
module.exports = new Database();