const express = require('express')
const router = express.Router()
const blogcontroller = require('../controller/blogcontroller')

router.route('/getblogs').get(blogcontroller.getblogs)

router.route('/postblogs').post(blogcontroller.postblogs)

module.exports = router