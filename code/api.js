var express = require('express')
var router = express.Router()

router.get('/api/test', function(req, res, next) {
	res.json({"msg":"test response"})
})

module.exports = router
