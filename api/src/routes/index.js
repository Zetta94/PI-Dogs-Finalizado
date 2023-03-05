const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRouter = require('./DogRouters')
const temperaments = require('./TemperamentsRouters')
//const temperamentsRouters = require('./TemperamentsRouters')

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs",dogRouter)
router.use("/temperament",temperaments)
//router.use("/temperaments",temperamentsRouters)


module.exports = router;
