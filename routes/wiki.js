const express = require('express')
// const models = require('../models');
const router = express.Router()
const bodyParser = require('body-parser')
const { addPage } = require('../views')
const { Page } = require("../models")
// const mainView = require('../views/main.js')
module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res, next) => {
  res.send('hi!')
})

router.post('/', async (req, res, next) => {
  console.log(req.body)
  // let postedPage = Page.create({ title: req.body.title,
  //               content: req.body.content,
  //               status: req.body.status,
  //               createdAt: new Date(),
  //               updatedAt: new Date()})

})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})
