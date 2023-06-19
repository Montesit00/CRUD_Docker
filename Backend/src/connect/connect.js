const mysql = require('mysql')

const db = mysql.createConnection({
    user:"root",
    password:"mysecretpassword",
    host:process.env.DB_HOST,
    database:"mi_base_de_datos"
})

db.connect((err)=>{
        (err)?console.log(`Se ha producido un error: ${err}`):console.log('BD conectada');
    })

async function createTable () {
    const sql = `
      CREATE TABLE IF NOT EXISTS productos2 (
        id INT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(100) NOT NULL,
        precio FLOAT NOT NULL,
        PRIMARY KEY (id)
      )
    `
    return await db.query(sql)
  }



module.exports = {db,createTable}