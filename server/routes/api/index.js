const router = require('express').Router()

// const userRoutes = require('./user-routes')
const userRoutes = require('./user-routes')
const jobRoutes = require('./job-routes')

// add prefix of `/users` to routes created in `user-routes.js`

router.use('/users', userRoutes)
router.use('./jobs', jobRoutes)

module.exports = router