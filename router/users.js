const express = require('express')
const router = express.Router()

const usercotroller = require('../controller/users')

router.get('/users', usercotroller.index)

router.get('/user/:id', usercotroller.show)

  router.post('/user', usercotroller.store)

  router.put('/user/:id', usercotroller.update)

  router.delete('/user/:id',usercotroller.delete)

  module.exports = router