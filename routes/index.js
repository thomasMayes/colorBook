var auth = require('./auth/index'); 
const itemRoutes = require('./items/index')
const userRoutes = require('./user/index')
const router = require('express').Router();

 router.use('/api/user', userRoutes)
 router.use('/api/auth', auth)
 router.use('/api/items', itemRoutes)


module.exports = router;