var express = require("express")
var bodyParser = require("body-parser")
var http = require('http')
var path = require('path')
var api = require('./api')
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router = express.Router()


app.use(api)
router.get('/', express.static(path.join(__dirname, '/public')))

app.use(router)

var port = process.env.PORT || '8080'
app.set('port', port)

var server = http.createServer(app)

server.listen(port)
console.log("Server started on port: " +  port)
