/**
 * Created by Kristoffer on 2017-07-06.
 */
mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '********',
    database: 'shopping_list'
});

module.exports = {

    insertItem: function (item) {
        var sql = "INSERT INTO items SET itemName = ?";
        connection.query(sql, item, function (error, result) {
            if (error) {
                console.log("Error inserting " + error);
            } else {
                console.log("Added to table");
            }
        });
    },

    deleteItem: function (itemId) {
        //code to delete an item in db
    },
    getAllItems: function () {
      //code to get all items in db.
    }
};


