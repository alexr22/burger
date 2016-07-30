var mysql = require('mysql');

var connection = mysql.createConnection({

        port: 3306,
        host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'b943bznt9uvc2rz3',
        password: 'vr7ehoskvsg71nm0',
        database: "g8ldnsaxanujjyr4"
    
});




connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;