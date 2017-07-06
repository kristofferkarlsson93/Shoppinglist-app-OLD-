/**
 * Created by Kristoffer on 2017-07-06.
 */
mysql = require('mysql');

module.exports = {

    insertItem: function (item) {
        //code to insert in DB
        console.log("heehehehheh");
    },
    deleteItem: function (itemId) {
        //code to delete an item in db
    },
    getAllItems: function () {
      //code to get all items in db.
    },

    //Private function to connect to the DB.
    connection: function () {
        var dbConnection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '*******',
            database: 'shopping_list'
        });
        dbConnection.connect(function (error) {
            if(error) {
                console.log("Error");
            }else {
                console.log("Connected!");
                return dbConnection;
            }
        });
    }
};


