// class MySQLDatabase {
//     connect() {
//       console.log("Connecting to MySQL...");
//     }
//     query(queryString) {
//       console.log(`Running MySQL query: ${queryString}`);
//     }
//   }

//   class MongoDB {
//     connect() {
//       console.log("Connecting to MongoDB...");
//     }
//     query(queryString) {
//       console.log(`Running MongoDB query: ${queryString}`);
//     }
//   }

//   // Using the databases
//   const mysql = new MySQLDatabase();
//   mysql.connect();
//   mysql.query("SELECT * FROM users");

//   const mongo = new MongoDB();
//   mongo.connect();
//   mongo.query("db.users.find()");


// The abstraction: Database interface
class Database {
    constructor(implementation) {
        this.implementation = implementation; // This is the "bridge"
    }

    connect() {
        this.implementation.connect();
    }

    query(queryString) {
        this.implementation.query(queryString);
    }
}

// The implementation for MySQL
class MySQLDatabase {
    connect() {
        console.log("Connecting to MySQL...");
    }
    query(queryString) {
        console.log(`Running MySQL query: ${queryString}`);
    }
}

// The implementation for MongoDB
class MongoDB {
    connect() {
        console.log("Connecting to MongoDB...");
    }
    query(queryString) {
        console.log(`Running MongoDB query: ${queryString}`);
    }
}

// Usage:

// Create a MySQL database connection
const mysql = new Database(new MySQLDatabase());
mysql.connect();  // Connecting to MySQL...
mysql.query("SELECT * FROM users");  // Running MySQL query: SELECT * FROM users

// Create a MongoDB database connection
const mongo = new Database(new MongoDB());
mongo.connect();  // Connecting to MongoDB...
mongo.query("db.users.find()");  // Running MongoDB query: db.users.find()
