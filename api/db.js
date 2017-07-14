/**
 * Created by Kristoffer on 2017-07-06.
 */
mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '*********',
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
        var sql = "DELETE FROM items WHERE id = ?";
        connection.query(sql, itemId, function (error, result) {
            if (error) {
                console.log("Error deleting: "+ error);
                throw error;
            }else {
                console.log("Deleted item: " + itemId);
            }
        })
    },
    getAllItems: function (callback) {
        var sql = "SELECT * FROM items";
        var result = [];
      connection.query(sql, function(error, rows, fields){
          if(error) {
              console.log("Error getting all from table: " + error);
              throw error;
          }else {
              console.log(rows[0]);
              for(var i = 0; i<rows.length; i++) {
                    result.push({id: rows[i].id, itemName: rows[i].itemName});
              }
              console.log(result);
              return callback(null, JSON.stringify(result));
          }
      });
    }
};


