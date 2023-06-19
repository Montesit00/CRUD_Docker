const {db,createTable} = require("../connect/connect")
const ctrl = {};

ctrl.getProductos = async (req,res) =>{
    await createTable()
  
    const consulta = "SELECT * from productos2";

    db.query(consulta,(err,rows)=>{
        if(err){
            console.log(err);
            return res.json({
                mensaje:"Hubo un error"
            })
        }
        return res.json(rows)
    })
}

ctrl.postProductos = async (req,res) => {
    await createTable()

    const {nombre,precio} = req.body
    const consulta = `INSERT INTO productos2 (nombre,precio) VALUES ('${nombre}','${precio}')`;

    db.query(consulta,(err,row)=>{
        if(err){
            return res.json({
                mensaje: err
            })
        }
        return res.json(row)
    })
}

module.exports = ctrl