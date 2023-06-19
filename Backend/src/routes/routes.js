const router = require("express").Router();

const { getProductos, postProductos } = require("../controllers/controls")

router.get('/', getProductos)

router.post('/', postProductos)

module.exports = router;