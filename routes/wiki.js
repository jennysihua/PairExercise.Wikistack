const express = require('express')
// const models = require('../models');
const router = express.Router()
// const mainView = require('../views/main.js')
module.exports = router

router.get('/', (req, res, next) => {
  res.send('Get eventually')
})

router.post('/', (req, res, next) => {
  res.send('Post eventually')
})

router.get('/add', (req, res, next) => {
  res.send('Get add eventually')
})
