const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
  try {
    res.json({})
  } catch (err) {
    res.status(500).send(err.message)
  }
})

//Exports
module.exports = router