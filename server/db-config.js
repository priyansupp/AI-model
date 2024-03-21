const mongoose = require('mongoose');

class Database {

    constructor() {
        this._connect();
    }
    URL = 'mongodb://localhost:27017/AImodel';

    _connect() {
        mongoose.connect(process.env.DBURL || this.URL)
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